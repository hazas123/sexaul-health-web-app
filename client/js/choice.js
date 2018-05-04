import { Template } from 'meteor/templating'
import '../templates/choice.html'
const uuidv1 = require('uuid/v1')

Template.choice.events({
  'click #MenuLink1': function (event) {
    $('#MainMenuOption1').css('visibility', 'visible')
  }
})

Template.choice.events({
  'click #MainM1' () {
    window.location.href = '/AboutSalus'
  },
  'click #MainM2' () {
    window.location.href = '/SearchSalus'
  },
  'click #MainM3' () {
    window.location.href = '/ContactSalus'
  },
  'click #MainM4' () {
    event.preventDefault()

    $('.chat-box-container').toggleClass('show')
    $('.chat-widget-container').toggleClass('open')
    var uuid = uuidv1()
    Session.set('uniqueSessioID', uuid)
    $('.self').remove()
    $('.reply').remove()
    $('.chatlogs').append('<div class="chat reply"><p class="chat-message">Hi there I am the Salus&#39;s automated service, I can currently help by listing STI symptoms or directing you to parts of the website. Is there something I can help you with?</p></div>')

  },
  'click #PreviousPage': function (event) {
    if (!$('.helpMain').hasClass('HelpHide')) {
      $('.helpMain').addClass('HelpHide')
    }
    window.history.back()
  },
  'click #Help': function (event) {
    $('.helpMain').toggleClass('HelpHide')
  }
})
