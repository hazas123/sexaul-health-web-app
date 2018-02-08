import { Template } from 'meteor/templating'
import { Session } from 'meteor/session'
import { Blaze } from 'meteor/blaze'
import '../templates/OptionsSelected.html'
import '../templates/choice.html'

var view

Template.OptionsSelected.onRendered(function () {

})

Template.choice.onRendered(function () {
  view = this.view
  console.log(view)
})

Template.OptionsSelected.events({
  'click .itemOpt': function (event) {
    $('#MaleChlamydiaOPTI').css('background-color', 'red')
    $('.choiceHoldMain').css('visibility', 'hidden')
    $('#OptionsHolder').css('visibility', 'hidden')
    $('.STIMainHold').css('visibility', 'visible')
    $('.STIMainHold').css('height', '100vh')
    $('.STIMainHold').css('width', '100vw')
    $('.STIMainHold').css('left', '0vw')
    $('body').css('overflow-y', 'hidden')
    console.log('item')
  }
})
