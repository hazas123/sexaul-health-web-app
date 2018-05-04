import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'

import '../templates/choice.html'

// var m = require('mymodule')

Template.maleOptions.events({
  'click #MaleChlamydiaOPTI': function (event) {
    window.location.href = '/ChlamydiaMale'
    //  console.log('yummy ', hello.GenderToExport, 'another', hello.SexaulityToExport)
  },
  'click #MaleGenitalWartsOPTI': function (event) {
    window.location.href = '/genitalWartsMale'
  },
  'click #MaleGenitalHerpesOPTI': function (event) {
    window.location.href = '/genitalHerpesMale'
  },
  'click #MaleGonorrhoeaOPTI': function (event) {
    window.location.href = '/gonorrhoeaMale'
  },
  'click #MaleSyphilisOPTI': function (event) {
    window.location.href = '/syphilisMale'
  },
  'click #MalePubicLiceOPTI': function (event) {
    window.location.href = '/pubicLiceMale'
  },
  'click #MaleScabiesOPTI': function (event) {
    window.location.href = '/scabiesMale'
  },
  'click #MaleHIVOPTI': function (event) {
    window.location.href = '/HIVMale'
  },
  // Hygine
  'click #DoucheOPTI': function (event) {
    window.location.href = '/RectalDouche'
  },
  // Contraception
  'click #CondomOPTI': function (event) {
    window.location.href = '/Condoms'
  },
  // Myths
  'click #MythsOPTI': function (event) {
    window.location.href = '/Myths'
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
  },
  'click .CloseFilter': function (event) {
    $('.FilterOptionsAvaliable').toggleClass('FilterOptionsShow')
  }
})
