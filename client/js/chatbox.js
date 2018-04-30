import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Session } from 'meteor/session'

import '../templates/chatbox.html'
const uuidv1 = require('uuid/v1')

Template.chatbox.events({
  'click .chat-widget-container, click .Close-Chat-Bot' (event, instance) {
    event.preventDefault()

    $('.chat-box-container').toggleClass('show')
    $('.chat-widget-container').toggleClass('open')
    var uuid = uuidv1()
    Session.set('uniqueSessioID', uuid)
    $('.self').remove()
    $('.reply').remove()
    $('.chatlogs').append('<div class="chat reply"><p class="chat-message">Hi there I am the Salus&#39;s automated service, I can currently help by listing STI symptoms or directing you to parts of the website. Is there something I can help you with?</p></div>')
  },
  'click .send, keyup #chat-input' (event, instance) {
    if ((event.type === 'click') || (event.type === 'keyup' && event.which === 13)) {
      var val = $.trim($('textarea').val())
      $('textarea').val('')
      var errorset = $('#chat-input').hasClass('errorValidation')
      if (errorset) {
        $('#chat-input').toggleClass('errorValidation')
      }
      $('.validation').css('visibility', 'hidden')
      var uuid = Session.get('uniqueSessioID')
      var clientCheck = /^[a-zA-Z0-9 .-?]+$/.test(val)
      if (clientCheck) {
        $('.chatlogs').append('<div class="chat self"><p class="chat-message">' + val + '</p></div>')
        Meteor.call('callAPI', val, uuid, function (error, result) {
          if (error) {
            console.log(error)
          }
          $('.chatlogs').append('<div class="chat reply"><p class="chat-message">' + result + '</p></div>')
        })
        $('.chatlogs').animate({scrollTop: $('.chatlogs').prop('scrollHeight')}, 1000)
      } else {
        $('#chat-input').toggleClass('errorValidation')
        $('.validation').css('visibility', 'visible')
      }
    }
  },
  'click #HelpAIButton': function (event) {
    $('.helpMain').toggleClass('HelpHide')
    $('.ThreeDHelp').addClass('helpShow')
    $('.SearchHelp').addClass('helpShow')
    $('.Content').addClass('helpShow')
    $('.AI').addClass('helpShow')
    $('.HelpHelp').removeClass('helpShow')
  }
})
