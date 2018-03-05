import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import { Session } from 'meteor/session'

import '../templates/OptionsSelected.html'
import '../templates/choice.html'

var view
var GenderToExport
var SexaulityToExport

var ChoicesSize

Template.choice.onCreated(function choiceOnCreated () {
  // counter starts at 0
  this.isTrue = new ReactiveVar(false)
})

Template.choice.helpers({
  isTrue () {
    return Template.instance().isTrue.get()
  }
})

Template.choice.onRendered(function () {
  view = this.view
  console.log(view)
})

Template.choice.events({
  'click #body': function (event) {
    console.log('body Click')
  },
  'click #toggle': function (event) {
    $('#page-slide').toggleClass('slide')
    $('#toggle').toggleClass('slide-tog')
  },
  'click #closeDisclamer': function (event) {
    event.preventDefault()
    $('#disclamer').css('visibility', 'hidden')
    console.log('disclamer visible')
  },
  'click #MenuLink1': function (event) {
    $('#MainMenuOption1').css('visibility', 'visible')
    console.log('area visible')
  },
  'click #closeMainMenuOption1': function (event) {
    $('#MainMenuOption1').css('visibility', 'hidden')
  },
  'click #closeMainMenuOption2': function (event) {
    $('#MainMenuOption2').css('visibility', 'hidden')
  },
  'click #SelectOptionCol4' (event, instance) {
    // clicked the .clickbtn class
    // increment the counter when button is clicked
    $('.aiButton').css('visibility', 'hidden')
    $('#MainMenuOption0').css('visibility', 'hidden')
    $('#OptionsHolder').css('visibility', 'visible')
    console.log('visible')
    var day = $('#days').find(':selected').text()
    var month = $('#months').find(':selected').text()
    var year = $('#years').find(':selected').text()
    var birthDate = new Date(year + '-' + month + '-' + day)
    var ageDifMs = Date.now() - birthDate.getTime()
    var ageDate = new Date(ageDifMs) // miliseconds from epoch
    var age = Math.abs(ageDate.getUTCFullYear() - 1970)
    var Gender = $('input[name=GenderOption]:checked').val()
    var Sexaulity = $('input[name=SexualityOption]:checked', '#col3Options').val()
    console.log(Sexaulity)
    console.log(Gender)
    console.log(age)
    Session.set('SexaulitySession', Sexaulity)
    instance.counter.set(age)
    instance.myReactiveVarGender.set(Gender)
    instance.myReactiveVarSexuality.set(Sexaulity)
    GenderToExport = Gender
    SexaulityToExport = Sexaulity
    module.exports.GenderToExport = GenderToExport
    module.exports.SexaulityToExport = SexaulityToExport
    // exports.GenderToExport = instance.myReactiveVarSexuality
    Session.set('GenderSession', Gender)
    instance.isTrue.set(true)
    this.train = new ReactiveVar(true)
    console.log(this.train)
    $('#toggle').css('visibility', 'visible')
    ChoicesSize = document.getElementById('MainMenuOption0').offsetHeight
    module.exports.ChoicesSize = ChoicesSize
    $('#MainMenuOption0').css('height', '200vh')
  },
  'click #choiceholdmain' (event, instance) {
  }
})

Template.choice.helpers({
    // This is what will be sent to Child1 and Child2.
  sharedVarG: function () {
    return this.myReactiveVarGender
  },
  sharedVarS: function () {
    return this.myReactiveVarSexuality
  },
  isTrue () {
    return Template.instance().isTrue.get()
  }
})
