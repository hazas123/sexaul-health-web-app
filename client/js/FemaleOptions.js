import { Template } from 'meteor/templating'
import '../templates/OptionsSelected.html'
import '../templates/choice.html'

Template.OptionsSelected.onRendered(function () {
  $('#OptionsHolder').css('visibility', 'visible')
})

Template.choice.onRendered(function () {
  view = this.view
})

Template.FemaleOptions.events({
  // sti's
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
  'click .FilterButton': function (event) {
    $('.FilterOptionsMobile').toggleClass('FilterHide')
  },
  'click #closeFilter': function (event) {
    $('.FilterOptionsMobile').toggleClass('FilterHide')
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

Template.OptionsSelected.helpers({
    // This is what will be sent to Child1 and Child2.
  GenderExportedVar () {
    return Template.instance().GenderExportedVar.get()
  },
  SexualityExportedVar () {
    return Template.instance().SexualityExportedVar.get()
  }
})
