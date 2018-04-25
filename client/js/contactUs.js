import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Session } from 'meteor/session'

import '../templates/Contact.html'


Template.ContactTemp.events({
  'click .btn' (event, instance) {
    var contactForm = $('#contact-form')
    var spinArea = $('#spin-area')
    var formContainer = $('#form-container')
    var successContainer = $('#success-container')

    event.preventDefault()
    console.log(contactForm)

    // spinArea.spin('large') // Attach the spinner

      // Send a POST AJAX request to the URL of form's action
    Meteor.call('sendEmail', $('#contact-form')['0'][2].value, $('#contact-form')['0'][1].value, $('#contact-form')['0'][3].value, function (error, result) {
      if (error) {
        console.log(error)
        // spinArea.spin(false)
      }
      successContainer.fadeIn()
      formContainer.slideUp()
      // spinArea.spin(false)
    })
  }
})

Template.ContactTemp.events({
  'click #ReturnHome': function (event) {
    if (!$('.helpMain').hasClass('HelpHide')) {
      $('.helpMain').addClass('HelpHide')
    }
    window.location.href = '/choice'
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
