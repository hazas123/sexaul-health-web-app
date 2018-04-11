import { Template } from 'meteor/templating'
import '../templates/ChlamydiaMale.html'
import '../templates/OptionsSelected.html'
import '../templates/ChlamydiaFemaleC.html'

Template.ChlamydiaMaleT.events({
  'click #closeSTIMale': function (event) {
    window.history.back()
    console.log('MaleClose Chlamydia')
  }
})

Template.GenitalHerpesMale.events({
  'click #closeSTIMale': function (event) {
    window.history.back()
    console.log('MaleClose herpes')
  }
})

Template.GenialWartsMaleT.events({
  'click #closeSTIMaleGW': function (event) {
    window.history.back()
    console.log('MaleClose warts')
  }
})

Template.GonorrhoeaMale.events({
  'click #closeSTIMaleGon': function (event) {
    window.history.back()
    console.log('MaleClose warts')
  }
})

Template.SyphilisMale.events({
  'click #closeSTIMaleSyph': function (event) {
    window.history.back()
  }
})

Template.PubicLiceMale.events({
  'click #closeSTIMalePubLi': function (event) {
    // $('#MaleSyphilisOPTI').css('background-color', 'blue')
    window.history.back()
  }
})

Template.ScabiesMale.events({
  'click #closeSTIMaleScabies': function (event) {
    // $('#MaleSyphilisOPTI').css('background-color', 'blue')
    window.history.back()
  }
})

Template.HIVMale.events({
  'click .closeSTIMale': function (event) {
    // $('#MaleSyphilisOPTI').css('background-color', 'blue')
    window.history.back()
  }
})

Template.ChlamydiaFemaleC.events({
  'click .closeSTIFemale': function (event) {
    window.history.back()
  }
})

Template.GenitalHerpesFemale.events({
  'click .closeSTIFemale': function (event) {
    window.history.back()
  }
})

Template.GenialWartsFemale.events({
  'click .closeSTIFemale': function (event) {
    window.history.back()
  }
})

Template.GonorrhoeaFemale.events({
  'click .closeSTIFemale': function (event) {
    window.history.back()
  }
})

Template.PubicLiceFemale.events({
  'click .closeSTIFemale': function (event) {
    window.history.back()
  }
})

Template.ScabiesFemale.events({
  'click .closeSTIFemale': function (event) {
    window.history.back()
  }
})

Template.SyphilisFemale.events({
  'click .closeSTIFemale': function (event) {
    window.history.back()
  }
})

Template.HIVFemale.events({
  'click .closeSTIFemale': function (event) {
    window.history.back()
  }
})

Template.SexualMyths.events({
  'click #closeMyths': function (event) {
    window.history.back()
  }
})

Template.Condom.events({
  'click .closeContaception': function (event) {
    window.history.back()
  }
})
