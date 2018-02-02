import { Meteor } from 'meteor/meteor'

Meteor.startup(() => {
  // code to run on server at startup
})

Meteor.methods({
  'callAPI': function () {
    var apiai = require('apiai')

    var app = apiai('')

    var options = {
      sessionId: '12'
    }

    var request = app.textRequest('hi', options)

    request.on('response', function (response) {
      console.log('RES', response.result.fulfillment.speech)
      return response.result.fulfillment.speech
    })
    request.on('error', function (error) {
      console.log('ERROR', error)
      throw new Meteor.Error(error)
    })
    request.end()
  }
})
