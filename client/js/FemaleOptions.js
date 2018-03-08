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

Template.FemaleOptions.events({
  'click #MaleChlamydiaOPTI': function (event) {
    window.location.href = '/chlamydiaFemale'
    //  console.log('yummy ', hello.GenderToExport, 'another', hello.SexaulityToExport)
  },
  'click #MaleGenitalWartsOPTI': function (event) {
    window.location.href = '/genialWartsFemale'
  },
  'click #MaleGenitalHerpesOPTI': function (event) {
    window.location.href = '/genialHerpesFemale'
  },
  'click #MaleGonorrhoeaOPTI': function (event) {
    window.location.href = '/gonorrhoeaFemale'
  },
  'click #MaleSyphilisOPTI': function (event) {
    window.location.href = '/syphilisFemale'
  },
  'click #MalePubicLiceOPTI': function (event) {
    window.location.href = '/pubicLiceFemale'
  },
  'click #ScabiesOPTI': function (event) {
    window.location.href = '/scabiesFemale'
  },
  'click #FemaleChlamydiaOPTI': function (event) {
    window.location.href = '/chlamydiaFemale'
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
