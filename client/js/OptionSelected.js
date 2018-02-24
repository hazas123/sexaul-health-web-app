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
var GenderSel = hello.GenderToExport
var Woman = 'Woman'
var OtherGender = 'Other'
var Sex = hello.SexaulityToExport

// var m = require('mymodule')

Template.OptionsSelected.helpers({
  myValue: function () {
        // As usual, this will be reactive.
    return Template.instance().data.sharedVar1.get()
  }
})
Template.OptionsSelected.onCreated(function () {
  this.GenderExportedVar = new ReactiveVar(hello.GenderToExport)
  this.SexualityExportedVar = new ReactiveVar(hello.SexaulityToExport)
  console.log(this.GenderExportedVar)
  console.log(this.SexualityExportedVar)
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
    console.log('GenderSel', hello.GenderToExport)
    // var m = require('mymodule')
    console.log('yummy ', hello.GenderToExport, 'another', hello.SexaulityToExport)
  },
  'click #MaleGenitalWartsOPTI': function (event) {
    $('#MaleGenitalWartsOPTI').css('background-color', 'red')
    $('.choiceHoldMain').css('visibility', 'hidden')
    $('#OptionsHolder').css('visibility', 'hidden')
    $('.STIMainHoldGW').css('visibility', 'visible')
    $('.STIMainHoldGW').css('height', '100vh')
    $('.STIMainHoldGW').css('width', '100vw')
    $('.STIMainHoldGW').css('left', '0vw')
    $('.ChoiceholdBackSTI').css('visibility', 'visible')
    $('#closeSTIMaleGW').css('visibility', 'visible')
    $('body').css('overflow-y', 'hidden')
    // var collectingTmplInstance = this.view.parentView.templateInstance()
    // this.myReactiveVarGender = collectingTmplInstance.myReactiveVarGender
    console.log('GenderSel', hello.GenderToExport)
    // var m = require('mymodule')
    console.log('yummy ', hello.GenderToExport, 'another', hello.SexaulityToExport)
  },
  'click #MaleGenitalHerpesOPTI': function (event) {
    $('#MaleGenitalHerpesOPTI').css('background-color', 'red')
    $('.choiceHoldMain').css('visibility', 'hidden')
    $('#OptionsHolder').css('visibility', 'hidden')
    $('.STIMainHoldGH').css('visibility', 'visible')
    $('.STIMainHoldGH').css('height', '100vh')
    $('.STIMainHoldGH').css('width', '100vw')
    $('.STIMainHoldGH').css('left', '0vw')
    $('.ChoiceholdBackSTI').css('visibility', 'visible')
    // $('#closeSTIMale').css('visibility', 'visible')
    $('body').css('overflow-y', 'hidden')
    $('#closeSTIMaleGH').css('visibility', 'visible')
    // var collectingTmplInstance = this.view.parentView.templateInstance()
    // this.myReactiveVarGender = collectingTmplInstance.myReactiveVarGender
    console.log('GenderSel', hello.GenderToExport)
    // var m = require('mymodule')
    console.log('yummy ', hello.GenderToExport, 'another', hello.SexaulityToExport)
  },
  'click #MaleGonorrhoeaOPTI': function (event) {
    $('#MaleGonorrhoeaOPTI').css('background-color', 'red')
    $('.choiceHoldMain').css('visibility', 'hidden')
    $('#OptionsHolder').css('visibility', 'hidden')
    $('.STIMainHoldGon').css('visibility', 'visible')
    $('.STIMainHoldGon').css('height', '100vh')
    $('.STIMainHoldGon').css('width', '100vw')
    $('.STIMainHoldGon').css('left', '0vw')
    $('.ChoiceholdBackSTI').css('visibility', 'visible')
    // $('#closeSTIMale').css('visibility', 'visible')
    $('body').css('overflow-y', 'hidden')
    $('#closeSTIMaleGon').css('visibility', 'visible')
    // var collectingTmplInstance = this.view.parentView.templateInstance()
    // this.myReactiveVarGender = collectingTmplInstance.myReactiveVarGender
    console.log('GenderSel', hello.GenderToExport)
    // var m = require('mymodule')
    console.log('yummy ', hello.GenderToExport, 'another', hello.SexaulityToExport)
  },
  'click #MaleSyphilisOPTI': function (event) {
    $('#MaleSyphilisOPTI').css('background-color', 'red')
    $('.choiceHoldMain').css('visibility', 'hidden')
    $('#OptionsHolder').css('visibility', 'hidden')
    $('.STIMainHoldSyph').css('visibility', 'visible')
    $('.STIMainHoldSyph').css('height', '100vh')
    $('.STIMainHoldSyph').css('width', '100vw')
    $('.STIMainHoldSyph').css('left', '0vw')
    $('.ChoiceholdBackSTI').css('visibility', 'visible')
    // $('#closeSTIMale').css('visibility', 'visible')
    $('body').css('overflow-y', 'hidden')
    $('#closeSTIMaleSyph').css('visibility', 'visible')
    // var collectingTmplInstance = this.view.parentView.templateInstance()
    // this.myReactiveVarGender = collectingTmplInstance.myReactiveVarGender
    console.log('GenderSel', hello.GenderToExport)
    // var m = require('mymodule')
    console.log('yummy ', hello.GenderToExport, 'another', hello.SexaulityToExport)
  },
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
    console.log('yummy ', hello.GenderToExport, 'another', hello.SexaulityToExport)
  }
})

Template.OptionsSelected.helpers({
    // This is what will be sent to Child1 and Child2.
  GenderExportedVar () {
    return Template.instance().GenderExportedVar.get()
  },
  SexualityExportedVar () {
    return Template.instance().SexualityExportedVar.get()
  }
})
