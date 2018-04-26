import { Template } from 'meteor/templating'
import '../templates/OptionsSelected.html'
import '../templates/choice.html'

Template.choice.onRendered(function () {
  // Added so this actually renders as a blaze view
  var view = this.view
})

Template.OtherOptions.events({
  'click #MaleChlamydiaOPTI': function (event) {
    window.location.href = '/chlamydiaMale'
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
  }, // sti Female
  'click #FemaleChlamydiaOPTI': function (event) {
    window.location.href = '/chlamydiaFemale'
  },
  'click #FemaleGenitalWartsOPTI': function (event) {
    window.location.href = '/GenitalWartsFemale'
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
    window.location.href = '/RectalDouche'
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
  },
  'click #CombinedPillOPTI': function (event) {
    window.location.href = '/CombinedPill'
  },
  'click #ReturnHome': function (event) {
    if (!$('.helpMain').hasClass('HelpHide')) {
      $('.helpMain').addClass('HelpHide')
    }
    window.location.href = '/choice'
  },
  'click #PreviousPage': function (event) {
    if (!$('.helpMain').hasClass('HelpHide')) {
      $('.helpMain').addClass('HelpHide')
    }
    window.history.back()
  },
  'click #Help': function (event) {
    $('.helpMain').toggleClass('HelpHide')
  }
})
