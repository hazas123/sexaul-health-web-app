import { Template } from 'meteor/templating'
import { Session } from 'meteor/session'
import { ReactiveVar } from 'meteor/reactive-var'
import { Blaze } from 'meteor/blaze'
import { Meteor } from 'meteor/meteor'
import '../templates/OptionsSelected.html'
import '../templates/choice.html'
import '../js/hello.js'

var hello = require('../js/choice.js')
var view
var GenderSel = hello.car
var Woman = 'Woman'
var OtherGender = 'Other'
var Sex = hello.cake

// var m = require('mymodule')

Template.OptionsSelected.helpers({
  myValue: function () {
        // As usual, this will be reactive.
    return Template.instance().data.sharedVar1.get()
  }
})
Template.OptionsSelected.onCreated(function () {
  this.gentest = new ReactiveVar(hello.car)
  console.log(this.gentest)
})

Template.OptionsSelected.onRendered(function () {
  $('#OptionsHolder').css('visibility', 'visible')
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
    // var collectingTmplInstance = this.view.parentView.templateInstance()
    // this.myReactiveVarGender = collectingTmplInstance.myReactiveVarGender
    console.log('GenderSel', hello.car)
    // var m = require('mymodule')
    console.log('yummy ', hello.car, 'another', hello.cake)
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
    console.log('yummy ', hello.car, 'another', hello.cake)
  }
})

Template.OptionsSelected.helpers({
    // This is what will be sent to Child1 and Child2.
  gentest () {
    return Template.instance().gentest.get()
  }
})
