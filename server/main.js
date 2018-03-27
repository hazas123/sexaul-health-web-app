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
      var arg = 'chlamydia'
      var query = 'https://api.nhs.uk/conditions/' + arg

      client.get(query, Meteor.bindEnvironment(function (error, res) {
        if (error) { reject(new Error('ERROR: ' + error)) }
        if (res) {
          console.log('REDIS WORKED', res)
          res = unidecode(res)
          var responce = JSON.parse(JSON.parse(res))
          console.log('Parsed', responce.mainEntityOfPage)
          resolve(responce.mainEntityOfPage)
        } else {
          var options = {
            'headers': {'subscription-key': 'cbc7eaba65544f048e7d2ce0d93d1977'}
          }
          try {
            const result = HTTP.call('GET', 'https://api.nhs.uk/conditions/' + arg, options)
            client.set(query, result.content, function (error) {
              if (error) { throw error }
            })
            console.log('API CALL', result.content)
            resolve(result.content)
          } catch (e) {
            // Got a network error, timeout, or HTTP error in the 400 or 500 range.
            console.log('error', e)
            reject(new Error('ERROR: ' + error))
          }
        }
      }))
    })
  }
})
