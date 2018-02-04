import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
// import { ReactiveVar } from 'meteor/reactive-var'

import '../templates/chatbox.html'

Template.chatbox.onCreated(function chatboxOnCreated () {
})

Template.chatbox.helpers({
})

Template.chatbox.events({
  'click .send' (event, instance) {
    var val = $.trim($('textarea').val())
    // var clientCheck = /^[a-z0-9 .-]+$/.test(val)
    $('.chatlogs').append('<div class="chat self"><p class="chat-message"></p>' + val + '</div>')
    console.log(this)
    Meteor.call('callAPI', val, function (error, result) {
      if (error) {
        console.log(error)
      }
      console.log(result)
      $('.chatlogs').append('<div class="chat reply"><p class="chat-message"></p>' + result + '</div>')
    })
  }
})
