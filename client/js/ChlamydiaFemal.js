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
    console.log('MaleClose Chlamydia')
    $('#aiOption').css('visibility', 'visible')
  }
})

Template.GenialHerpesMale.events({
  'click #closeSTIMaleGH': function (event) {
    $('#MaleGenitalHerpesOPTI').css('background-color', 'blue')
    $('.choiceHoldMain').css('visibility', 'visible')
    $('#OptionsHolder').css('visibility', 'visible')
    $('.STIMainHoldGH').css('visibility', 'hidden')
    $('.STIMainHoldGH').css('height', '0vh')
    $('.STIMainHoldGH').css('width', '0vw')
    $('.STIMainHoldGH').css('left', '100vw')
    $('.ChoiceholdBackSTI').css('visibility', 'hidden')
    $('body').css('overflow-y', 'hidden')
    $('body').css('overflow-y', 'visible')
    $('#closeSTIMaleGH').css('visibility', 'hidden')
    console.log('MaleClose herpes')
    $('#aiOption').css('visibility', 'visible')
  }
})

Template.GenialWartsMaleT.events({
  'click #closeSTIMaleGW': function (event) {
    $('#MaleGenitalWartsOPTI').css('background-color', 'blue')
    $('.choiceHoldMain').css('visibility', 'visible')
    $('#OptionsHolder').css('visibility', 'visible')
    $('.STIMainHoldGW').css('visibility', 'hidden')
    $('.STIMainHoldGW').css('height', '0vh')
    $('.STIMainHoldGW').css('width', '0vw')
    $('.STIMainHoldGW').css('left', '100vw')
    $('.ChoiceholdBackSTI').css('visibility', 'hidden')
    $('body').css('overflow-y', 'hidden')
    $('body').css('overflow-y', 'visible')
    $('#closeSTIMaleGW').css('visibility', 'hidden')
    console.log('MaleClose warts')
    $('#aiOption').css('visibility', 'visible')
  }
})

Template.GonorrhoeaMale.events({
  'click #closeSTIMaleGon': function (event) {
    $('#MaleGonorrhoeaOPTI').css('background-color', 'blue')
    $('.choiceHoldMain').css('visibility', 'visible')
    $('#OptionsHolder').css('visibility', 'visible')
    $('.STIMainHoldGon').css('visibility', 'hidden')
    $('.STIMainHoldGon').css('height', '0vh')
    $('.STIMainHoldGon').css('width', '0vw')
    $('.STIMainHoldGon').css('left', '100vw')
    $('.ChoiceholdBackSTI').css('visibility', 'hidden')
    $('body').css('overflow-y', 'hidden')
    $('body').css('overflow-y', 'visible')
    $('#closeSTIMaleGon').css('visibility', 'hidden')
    console.log('MaleClose warts')
    $('#aiOption').css('visibility', 'visible')
  }
})

Template.SyphilisMale.events({
  'click #closeSTIMaleSyph': function (event) {
    $('#MaleSyphilisOPTI').css('background-color', 'blue')
    $('.choiceHoldMain').css('visibility', 'visible')
    $('#OptionsHolder').css('visibility', 'visible')
    $('.STIMainHoldSyph').css('visibility', 'hidden')
    $('.STIMainHoldSyph').css('height', '0vh')
    $('.STIMainHoldSyph').css('width', '0vw')
    $('.STIMainHoldSyph').css('left', '100vw')
    $('.ChoiceholdBackSTI').css('visibility', 'hidden')
    $('body').css('overflow-y', 'hidden')
    $('body').css('overflow-y', 'visible')
    $('#closeSTIMaleSyph').css('visibility', 'hidden')
    console.log('MaleClose warts')
    $('#aiOption').css('visibility', 'visible')
  }
})

Template.PubicLiceMale.events({
  'click #closeSTIMalePubLi': function (event) {
    // $('#MaleSyphilisOPTI').css('background-color', 'blue')
    $('.choiceHoldMain').css('visibility', 'visible')
    $('#OptionsHolder').css('visibility', 'visible')
    $('.STIMainHoldPubLi').css('visibility', 'hidden')
    $('.STIMainHoldPubLi').css('height', '0vh')
    $('.STIMainHoldPubLi').css('width', '0vw')
    $('.STIMainHoldPubLi').css('left', '100vw')
    $('.ChoiceholdBackSTI').css('visibility', 'hidden')
    $('body').css('overflow-y', 'hidden')
    $('body').css('overflow-y', 'visible')
    $('#closeSTIMalePubLi').css('visibility', 'hidden')
    console.log('MaleClose warts')
    $('#aiOption').css('visibility', 'visible')
  }
})

Template.ScabiesMale.events({
  'click #closeSTIMaleScabies': function (event) {
    // $('#MaleSyphilisOPTI').css('background-color', 'blue')
    $('.choiceHoldMain').css('visibility', 'visible')
    $('#OptionsHolder').css('visibility', 'visible')
    $('.STIMainHoldScabies').css('visibility', 'hidden')
    $('.STIMainHoldScabies').css('height', '0vh')
    $('.STIMainHoldScabies').css('width', '0vw')
    $('.STIMainHoldScabies').css('left', '100vw')
    $('.ChoiceholdBackSTI').css('visibility', 'hidden')
    $('body').css('overflow-y', 'hidden')
    $('body').css('overflow-y', 'visible')
    $('#closeSTIMaleScabies').css('visibility', 'hidden')
    console.log('MaleClose warts')
    $('#aiOption').css('visibility', 'visible')
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
    $('#aiOption').css('visibility', 'visible')
    console.log('FemaleClose')
  }
})
