import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Session } from 'meteor/session'

import '../templates/chatbox.html'
import '../templates/choice.html'
// Requires module to generate unique identifyer for chat bot
const uuidv1 = require('uuid/v1')

Template.chatbox.events({
  'click .chat-widget-container, click .Close-Chat-Bot' (event, instance) {
    event.preventDefault()

    $('.chat-box-container').toggleClass('show')
    $('.chat-widget-container').toggleClass('open')
    // generate new unique identifyer
    var uuid = uuidv1()
    // set session var with the UUID
    Session.set('uniqueSessioID', uuid)
    // remove previous chat logs
    $('.self').remove()
    $('.reply').remove()
    // add prompt message for user
    $('.chatlogs').append('<div class="chat reply"><p class="chat-message">Hi there I am the Salus&#39;s automated service, I can currently help by listing STI symptoms or directing you to parts of the website. Is there something I can help you with?</p></div>')
  },
  'click .send, keyup #chat-input' (event, instance) {
    // check if its a mouse click or enter button
    if ((event.type === 'click') || (event.type === 'keyup' && event.which === 13)) {
      // remove white space from entered text
      var val = $.trim($('textarea').val())
      $('textarea').val('')
      var errorset = $('#chat-input').hasClass('errorValidation')
      if (errorset) {
        $('#chat-input').toggleClass('errorValidation')
      }
      $('.validation').css('visibility', 'hidden')
      // get the uuid of this chat
      var uuid = Session.get('uniqueSessioID')
      // check the user enterd text is what we are expecting
      var clientCheck = /^[a-zA-Z0-9 .-?]+$/.test(val)
      if (clientCheck) {
        $('.chatlogs').append('<div class="chat self"><p class="chat-message">' + val + '</p></div>')
        $('.chatlogs').append('<div id="wave" class="chat reply"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>')
        $('.chatlogs').animate({scrollTop: $('.chatlogs').prop('scrollHeight')}, 1000)
        // pass message and uuid to server side function
        Meteor.call('callAPI', val, uuid, function (error, result) {
          if (error) {
            console.log(error)
          }
          $('#wave').remove()
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
