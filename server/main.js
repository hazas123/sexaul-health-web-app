import { Meteor } from 'meteor/meteor'
import { HTTP } from 'meteor/http'

Meteor.startup(() => {

})

Meteor.methods({
  callAPI: function (val, uuid) {
    return new Promise((resolve, reject) => {
      var apiai = require('apiai')
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
    var arg = 'chlamydia'
    var options = {
      'headers': {'subscription-key': '-------'}
    }
    try {
      const result = HTTP.call('GET', 'https://api.nhs.uk/conditions/' + arg, options)

      console.log('worked', result.content)
      return true
    } catch (e) {
      // Got a network error, timeout, or HTTP error in the 400 or 500 range.
      console.log('error', e)
      return false
    }
  }
})
