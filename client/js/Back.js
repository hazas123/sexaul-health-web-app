import { Template } from 'meteor/templating'
import '../templates/ChlamydiaMale.html'
import '../templates/ChlamydiaFemale.html'

Template.ChlamydiaMale.events({
  'click #closeSTIMale': function (event) {
    window.history.back()
  }
})

Template.GenitalHerpesMale.events({
  'click #closeSTIMale': function (event) {
    window.history.back()
  }
})

Template.genitalWartsMale.events({
  'click #closeSTIMaleGW': function (event) {
    window.history.back()
  }
})

Template.GonorrhoeaMale.events({
  'click #closeSTIMaleGon': function (event) {
    window.history.back()
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

Template.ChlamydiaFemale.events({
  'click .closeSTIFemale': function (event) {
    window.history.back()
  }
})

Template.GenitalHerpesFemale.events({
  'click .closeSTIFemale': function (event) {
    window.history.back()
  }
})

Template.GenitalWartsFemale.events({
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
