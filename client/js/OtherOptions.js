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

Template.choice.onRendered(function () {
  view = this.view
  console.log(view)
  console.log(GenderSel, Woman, OtherGender, Sex)
})

Template.OtherOptions.events({
  'click #MaleChlamydiaOPTI': function (event) {
    window.location.href = '/chlamydiaMale'
    //  console.log('yummy ', hello.GenderToExport, 'another', hello.SexaulityToExport)
  },
  'click #MaleGenitalWartsOPTI': function (event) {
    window.location.href = '/genialWartsMale'
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
  }, // sti Female
  'click #FemaleChlamydiaOPTI': function (event) {
    window.location.href = '/chlamydiaFemale'
    //  console.log('yummy ', hello.GenderToExport, 'another', hello.SexaulityToExport)
  },
  'click #FemaleGenitalWartsOPTI': function (event) {
    window.location.href = '/genialWartsFemale'
  },
  'click #FemaleGenitalHerpesOPTI': function (event) {
    window.location.href = '/genitalHerpesFemale'
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
