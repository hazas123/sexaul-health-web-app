import { Meteor } from 'meteor/meteor'
import { HTTP } from 'meteor/http'
import { Email } from 'meteor/email'
import { check } from 'meteor/check'
var redis = require('redis')
// enviroment variable used to store reddit url
var client = redis.createClient(process.env.REDIS_URL)
var apiai = require('apiai')
var unidecode = require('unidecode')

Meteor.startup(() => {

})

Meteor.methods({
  // function uses APIai SDK to send and recive messages from dialog flow
  callAPI: function (val, uuid) {
    // Promise used to make code run asynchronous
    return new Promise((resolve, reject) => {
      var app = apiai(process.env.DIALOG_API_KEY)
      var options = {
        sessionId: uuid
      }
      var request = app.textRequest(val, options)
      request.on('response', function (response) {
        resolve(response.result.fulfillment.speech)
      })
      request.on('error', function (error) {
        reject(new Error('ERROR: ' + error))
      })
      request.end()
    })
  },

  // fuction to get infomation from NHS
  getNhsInfo: function (STIName) {
    // Promise used to make code run asynchronous
    return new Promise((resolve, reject) => {
      var arg = STIName
      // build up api query
      var query = 'https://api.nhs.uk/conditions/' + arg
      // checks if query is in reddis
      client.get(query, Meteor.bindEnvironment(function (error, res) {
        if (error) { reject(new Error('ERROR: ' + error)) }
        if (res) {
          // decodes unicode characters
          res = unidecode(res)
          // formats links back to nhs
          res = res.replace(/href=\\"/g, 'target=\\"_blank\\" href=\\"https://www.nhs.uk')
          // parse rsponce in to JSON Object
          var responce = JSON.parse(res)
          Meteor.call('getMarkdown', responce.mainEntityOfPage, function (error, result) {
            if (error) {
              if (error) { throw error }
            }
            resolve(result)
          })
        } else {
          // if key doesnt't exist in reddis make the API call
          var options = {
            // enviroment verable used to store api key
            'headers': { 'subscription-key': process.env.NHS_API_KEY }
          }
          try {
            // make the API call
            const result = HTTP.call('GET', 'https://api.nhs.uk/conditions/' + arg, options)
            // add it it reddis on okay
            client.set(query, result.content, function (error) {
              if (error) { throw error }
            })
            // decodes unicode characters
            res = unidecode(result.content)
            // formats links back to nhs
            res = res.replace(/href=\\"/g, 'target=\\"_blank\\" href=\\"https://www.nhs.uk')
            // parse rsponce in to JSON Object
            responce = JSON.parse(res)
            Meteor.call('getMarkdown', responce.mainEntityOfPage, function (error, result) {
              if (error) {
                if (error) { throw error }
              }
              resolve(result)
            })
          } catch (e) {
            // Got a network error, timeout, or HTTP error in the 400 or 500 range.
            console.log('error', e)
            reject(new Error('ERROR: ' + error))
          }
        }
      }))
    })
  },

  getMarkdown: function (mainEntityOfPage) {
    // Promise used to make code run asynchronous
    return new Promise((resolve, reject) => {
      var createdHTML
      // get how many entites there are from the API
      var arrayLength = mainEntityOfPage.length
      for (var i = 0; i < arrayLength; i++) {
        // build up HTML from the retuned JSON object
        if (i === 0) {
          createdHTML = mainEntityOfPage[i].mainEntityOfPage[0].text
        } else {
          createdHTML += '<button class="mainentityofpagebutton" id="mainEntityOfPage' + i + '">' + mainEntityOfPage[i].text + '</button><div class="mainentityofpage mainEntityOfPage' + i + '" >' + mainEntityOfPage[i].mainEntityOfPage[0].text + '</div>'
        }
      }
      // pass back the crated html
      resolve(createdHTML)
    })
  },

  sendEmail (from, subject, text) {
    return new Promise((resolve, reject) => {
      var to = process.env.TO_EMAIL
      // Make sure that all arguments are strings.
      check([to, from, subject, text], [String])

      // Let other method calls from the same client start running, without
      // waiting for the email sending to complete.
      this.unblock()
      Email.send({ to, from, subject, text })
      resolve(true)
    })
  }
})
