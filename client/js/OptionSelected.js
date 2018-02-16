import { Template } from 'meteor/templating'
import { Session } from 'meteor/session'
import { Blaze } from 'meteor/blaze'
import '../templates/OptionsSelected.html'
import '../templates/choice.html'
import '../js/hello.js'

var view
var car = Session.get('GenderSession')

Template.OptionsSelected.onRendered(function () {

})

Template.choice.onRendered(function () {
  view = this.view
  console.log(view)
})

Template.OptionsSelected.events({
  'click #MaleChlamydiaOPTI': function (event) {
    $('#MaleChlamydiaOPTI').css('background-color', 'red')
    $('.choiceHoldMain').css('visibility', 'hidden')
    $('#OptionsHolder').css('visibility', 'hidden')
    $('.STIMainHold').css('visibility', 'visible')
    $('.STIMainHold').css('height', '100vh')
    $('.STIMainHold').css('width', '100vw')
    $('.STIMainHold').css('left', '0vw')
    $('.ChoiceholdBackSTI').css('visibility', 'visible')
    $('#closeSTIMale').css('visibility', 'visible')
    $('body').css('overflow-y', 'hidden')
    console.log('MaleOpen')
    console.log(car)
  }
})

Template.OptionsSelected.events({
  'click #FemalChlamydiaOPTI': function (event) {
    $('#FemalChlamydiaOPTI').css('background-color', 'red')
    $('.choiceHoldMain').css('visibility', 'hidden')
    $('#OptionsHolder').css('visibility', 'hidden')
    $('.STIMainHoldWoman').css('visibility', 'visible')
    $('.STIMainHoldWoman').css('height', '100vh')
    $('.STIMainHoldWoman').css('width', '100vw')
    $('.STIMainHoldWoman').css('left', '0vw')
    $('.ChoiceholdBackSTI').css('visibility', 'visible')
    $('#closeSTIFemale').css('visibility', 'visible')
    $('body').css('overflow-y', 'hidden')
    console.log('FemaleOpen')
  }
})
