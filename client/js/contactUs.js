import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import '../templates/Contact.html'

// set click events
Template.ContactTemp.events({
  'click .btn' (event, instance) {
    var formContainer = $('#form-container')
    var successContainer = $('#success-container')
    var failContainer = $('#fail-container')

    event.preventDefault()
    // get the enterd name, email & message
    var email = $('#contact-form')['0'][2].value
    var name = $('#contact-form')['0'][1].value
    var message = $('#contact-form')['0'][3].value
    // test that enterd email is vaild
    var emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    // test that enterd name and message is not blank
    var nameCheck = /.*\S.*/.test(name)
    var messageCheck = /.*\S.*/.test(message)
    // apply error message if its not what we expect
    if (!emailCheck) {
      $('#emailInvalid').removeClass('contactValidationHide')
      $('#email').addClass('contactValidation')
    } else {
      $('#emailInvalid').addClass('contactValidationHide')
      $('#email').removeClass('contactValidation')
    }
    if (!nameCheck) {
      $('#nameInvalid').removeClass('contactValidationHide')
      $('#name').addClass('contactValidation')
    } else {
      $('#nameInvalid').addClass('contactValidationHide')
      $('#name').removeClass('contactValidation')
    }
    if (!messageCheck) {
      $('#messageInvalid').removeClass('contactValidationHide')
      $('#message').addClass('contactValidation')
    } else {
      $('#messageInvalid').addClass('contactValidationHide')
      $('#message').removeClass('contactValidation')
    }

    // if all the enterd values are what we expect pass them to server side function to send emil
    if (emailCheck && nameCheck && messageCheck) {
      Meteor.call('sendEmail', $('#contact-form')['0'][2].value, $('#contact-form')['0'][1].value, $('#contact-form')['0'][3].value, function (error, result) {
        if (error) {
          failContainer.fadeIn()
          formContainer.slideUp()
        }
        successContainer.fadeIn()
        formContainer.slideUp()
      })
    }
  },
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
