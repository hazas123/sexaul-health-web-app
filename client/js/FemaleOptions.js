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
  // sti's
  'click #FemaleChlamydiaOPTI': function (event) {
    window.location.href = '/chlamydiaFemale'
    //  console.log('yummy ', hello.GenderToExport, 'another', hello.SexaulityToExport)
  },
  'click #FemaleGenitalWartsOPTI': function (event) {
    window.location.href = '/genialWartsFemale'
  },
  'click #FemaleGenitalHerpesOPTI': function (event) {
    window.location.href = '/genialHerpesFemale'
  },
  'click #FemaleGonorrhoeaOPTI': function (event) {
    window.location.href = '/gonorrhoeaFemale'
  },
  'click #FemaleSyphilisOPTI': function (event) {
    window.location.href = '/syphilisFemale'
  },
  'click #FemalePubicLiceOPTI': function (event) {
    window.location.href = '/pubicLiceFemale'
  },
  'click #FemaleScabiesOPTI': function (event) {
    window.location.href = '/scabiesFemale'
  },
  'click #MythsOPTI': function (event) {
    window.location.href = '/Myths'
  },
  'click #FemaleHIVOPTI': function (event) {
    window.location.href = '/HIVFemale'
  },
  // Hygine
  'click #DoucheOPTI': function (event) {
    window.location.href = '/AnalDouche'
  },
  'click #TamponOPTI': function (event) {
    window.location.href = '/Tampon'
  },
  // Contraception
  'click #CondomOPTI': function (event) {
    window.location.href = '/Condoms'
  },
  'click #implantOPTI': function (event) {
    window.location.href = '/Implant'
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
