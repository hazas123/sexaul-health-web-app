import { Meteor } from 'meteor/meteor'
import { HTTP } from 'meteor/http'
var redis = require('redis')
var client = redis.createClient(6379, '127.0.0.1')
var apiai = require('apiai')
var unidecode = require('unidecode')

Meteor.startup(() => {

})

Meteor.methods({
  callAPI: function (val, uuid) {
    return new Promise((resolve, reject) => {
      var app = apiai('ae024febf4ff42c9930027e13f69cd28')
      var options = {
        sessionId: uuid
      }
      var request = app.textRequest(val, options)
      request.on('response', function (response) {
        console.log('RES', response.result.fulfillment.speech)
        resolve(response.result.fulfillment.speech)
      })
      request.on('error', function (error) {
        console.log('ERROR', error)
        reject(new Error('ERROR: ' + error))
      })
      request.end()
    })
  },

  getNhsInfo: function () {
    return new Promise((resolve, reject) => {
      var arg = 'gonorrhoea'
      var query = 'https://api.nhs.uk/conditions/' + arg

      client.get(query, Meteor.bindEnvironment(function (error, res) {
        if (error) { reject(new Error('ERROR: ' + error)) }
        if (res) {
          res = unidecode(res)
          var responce = JSON.parse(JSON.parse(res))
          Meteor.call('getMarkdown', responce.mainEntityOfPage, function (error, result) {
            if (error) {
              if (error) { throw error }
            }
            resolve(result)
          })
        } else {
          var options = {
            'headers': {'subscription-key': 'cbc7eaba65544f048e7d2ce0d93d1977'}
          }
          try {
            const result = HTTP.call('GET', 'https://api.nhs.uk/conditions/' + arg, options)
            client.set(query, result.content, function (error) {
              if (error) { throw error }
            })
            res = unidecode(result.content)
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
    return new Promise((resolve, reject) => {
      var createdHTML
      var arrayLength = mainEntityOfPage.length
      for (var i = 0; i < arrayLength; i++) {
        if (i === 0) {
          createdHTML = mainEntityOfPage[i].mainEntityOfPage[0].text
        } else {
          createdHTML += '<button class="mainentityofpagebutton" id="mainEntityOfPage' + i + '">' + mainEntityOfPage[i].text + '</button><div class="mainentityofpage mainEntityOfPage' + i + '" >' + mainEntityOfPage[i].mainEntityOfPage[0].text + '</div>'
        }
      }
      resolve(createdHTML)
    })
  }
})
