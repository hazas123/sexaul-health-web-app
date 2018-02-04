import { Meteor } from 'meteor/meteor'

Meteor.startup(() => {

})

Meteor.methods({
  callAPI: function (val) {
    return new Promise((resolve, reject) => {
      var apiai = require('apiai')
      var app = apiai('ae024febf4ff42c9930027e13f69cd28')
      var options = {
        sessionId: '12'
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

  getLastClick: function () {
    var lastClick
    lastClick = 100 + 1
    console.log('lastClick', lastClick)
    return lastClick
  }
})
