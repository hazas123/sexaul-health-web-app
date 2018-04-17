import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
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
  console.log(GenderSel, Woman, OtherGender, Sex)
})

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
    window.location.href = '/AnalDouche'
  },
  // Contraception
  'click #CondomOPTI': function (event) {
    window.location.href = '/Condoms'
  },
  // Myths
  'click #MythsOPTI': function (event) {
    window.location.href = '/Myths'
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
