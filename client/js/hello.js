import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import { Meteor } from 'meteor/meteor'

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

Template.hello.events({
  'click .clickbtn' (event, instance) {
    // increment the counter when button is clicked
    var day = $('#days').find(':selected').text()
    var month = $('#months').find(':selected').text()
    var year = $('#years').find(':selected').text()
    var birthDate = new Date(year + '-' + month + '-' + day)

    var ageDifMs = Date.now() - birthDate.getTime()
    var ageDate = new Date(ageDifMs) // miliseconds from epoch
    var age = Math.abs(ageDate.getUTCFullYear() - 1970)

    console.log(age)
    instance.counter.set(age)
  }
})

Template.buttonTest.events({
  'click #testClick' (event) {
    Meteor.call('getNhsInfo', function (error, result) {
      if (error) {
        console.log(error)
      }
      $('.putitinme').append('<div><p>' + result + '</p></div>')
      console.log(result)
    })
  }
})
