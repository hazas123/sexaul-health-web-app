import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import { Meteor } from 'meteor/meteor'
import { Session } from 'meteor/session'
import { Promise } from 'meteor/promise'

import '../templates/hello.html'
import '../templates/choice.html'
import '../templates/loadingScreen.html'
import '../templates/OptionsSelected.html'

Template.choice.onCreated(function choiceOnCreated () {
  // counter starts at 0
  this.counter = new ReactiveVar(0)
  this.myReactiveVarGender = new ReactiveVar()
  this.myReactiveVarSexuality = new ReactiveVar()

  $(function () {
    var i
    for (i = new Date().getFullYear(); i > 1900; i--) {
      $('#years').append($('<option />').val(i).html(i))
    }

    for (i = 1; i < 13; i++) {
      $('#months').append($('<option />').val(i).html(i))
    }
    updateNumberOfDays()

    $('#years, #months').change(function () {
      updateNumberOfDays()
    })
  })

  function updateNumberOfDays () {
    var i
    $('#days').html('')
    var month = $('#months').val()
    var year = $('#years').val()
    var days = daysInMonth(month, year)

    for (i = 1; i < days + 1; i++) {
      $('#days').append($('<option />').val(i).html(i))
    }
  }

  function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate()
  }
})

Template.choice.helpers({
  counter () {
    return Template.instance().counter.get()
  }
})

Template.choice.result = function () {
  return Session.get('serverDataResponse') || ''
}

  // 'click .clickAPI' (event, instance) {
  //
  //   Meteor.call('asyncJob', message, function(err, result) {
  //       if (typeof console !== 'undefined')
  //         console.log(message)
  //     })
    // Meteor.call('callAPI', function (err, res) {
    //   if (err) {
    //     Session.set('serverDataResponse', 'Error:' + err.reason)
    //     return
    //   }
    //   Session.set('serverDataResponse', res)
    //   console.log('RUN', res)
    //   console.log(Date.now(), res)
    // })

    // const callWithPromise = (method) => {
    //   return new Promise((resolve, reject) => {
    //     Meteor.call('callAPI', (error, result) => {
    //       if (error) reject(error)
    //       console.log('RUN', result)
    //       console.log(Date.now(), result)
    //       resolve(result)
    //     })
    //   })
    // }
  // }
