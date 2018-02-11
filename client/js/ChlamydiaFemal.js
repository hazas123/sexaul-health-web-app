import { Template } from 'meteor/templating'
import { Session } from 'meteor/session'
import { Blaze } from 'meteor/blaze'
import '../templates/ChlamydiaMale.html'
import '../templates/OptionsSelected.html'
import '../templates/ChlamydiaFemaleC.html'

Template.ChlamydiaMaleT.events({
  'click #closeSTIMale': function (event) {
    $('#MaleChlamydiaOPTI').css('background-color', 'blue')
    $('.choiceHoldMain').css('visibility', 'visible')
    $('#OptionsHolder').css('visibility', 'visible')
    $('.STIMainHold').css('visibility', 'hidden')
    $('.STIMainHold').css('height', '0vh')
    $('.STIMainHold').css('width', '0vw')
    $('.STIMainHold').css('left', '100vw')
    $('.STIMainHoldWoman').css('visibility', 'hidden')
    $('.STIMainHoldWoman').css('height', '0vh')
    $('.STIMainHoldWoman').css('width', '0vw')
    $('.STIMainHoldWoman').css('left', '100vw')
    $('body').css('overflow-y', 'visible')
    $('#closeSTIMale').css('visibility', 'hidden')
    console.log('MaleClose')
  }
})

Template.ChlamydiaFemaleC.events({
  'click #closeSTIFemale': function (event) {
    $('#FemalChlamydiaOPTI').css('background-color', 'blue')
    $('.choiceHoldMain').css('visibility', 'visible')
    $('#OptionsHolder').css('visibility', 'visible')
    $('.STIMainHoldWoman').css('visibility', 'hidden')
    $('.STIMainHoldWoman').css('height', '0vh')
    $('.STIMainHoldWoman').css('width', '0vw')
    $('.STIMainHoldWoman').css('left', '100vw')
    $('.STIMainHold').css('visibility', 'hidden')
    $('.STIMainHold').css('height', '0vh')
    $('.STIMainHold').css('width', '0vw')
    $('.STIMainHold').css('left', '100vw')
    $('#closeSTIFemale').css('visibility', 'hidden')
    $('body').css('overflow-y', 'visible')
    console.log('FemaleClose')
  }
})
