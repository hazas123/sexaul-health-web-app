import { Template } from 'meteor/templating'
import { Session } from 'meteor/session'
import { Blaze } from 'meteor/blaze'
import '../templates/ChlamydiaMale.html'
import '../templates/OptionsSelected.html'
import '../templates/ChlamydiaFemaleC.html'

Template.ChlamydiaMaleT.events({
  'click #closeSTIMale': function (event) {
    window.history.back()
    console.log('MaleClose Chlamydia')
  }
})

Template.GenialHerpesMale.events({
  'click #closeSTIMaleGH': function (event) {
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
Template.ChlamydiaFemaleC.events({
  'click #closeSTIFemale': function (event) {
    window.history.back()
  }
})

Template.SexualMyths.events({
  'click #closeMyths': function (event) {
    window.history.back()
  }
})
