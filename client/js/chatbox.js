import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Session } from 'meteor/session'
// import { ReactiveVar } from 'meteor/reactive-var'

import '../templates/chatbox.html'
const uuidv1 = require('uuid/v1')

Template.chatbox.onCreated(function chatboxOnCreated () {
})

Template.chatbox.helpers({
})

Template.chatbox.events({
  'click .chat-widget-container' (event, instance) {
    event.preventDefault()

    $('.chat-box-container').toggleClass('show')
    $('.chat-widget-container').toggleClass('open')
    var uuid = uuidv1()
    console.log('UUID', uuid)
    Session.set('uniqueSessioID', uuid)
    $('.self').remove()
    $('.reply').remove()
    $('.chatlogs').append('<div class="chat reply"><p class="chat-message">I can help by listing STI symptoms. Is this something I can help you with?</p></div>')
  },
  'click .send' (event, instance) {
    var val = $.trim($('textarea').val())
    $('textarea').val('')
    var uuid = Session.get('uniqueSessioID')
    // var clientCheck = /^[a-z0-9 .-]+$/.test(val)
    $('.chatlogs').append('<div class="chat self"><p class="chat-message">' + val + '</p></div>')
    console.log(this)
    Meteor.call('callAPI', val, uuid, function (error, result) {
      if (error) {
        console.log(error)
      }
      console.log(result)
      $('.chatlogs').append('<div class="chat reply"><p class="chat-message">' + result + '</p></div>')
    })
    $('.chatlogs').animate({scrollTop: $('.chatlogs').prop('scrollHeight')}, 1000)
  }
})
