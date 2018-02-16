import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import { Session } from 'meteor/session'
import { Blaze } from 'meteor/blaze'
import '../templates/OptionsSelected.html'
import '../templates/choice.html'

var view

Template.OptionsSelected.onCreated(function () {
})

Template.choice.onRendered(function () {
  view = this.view
  console.log(view)
})

Template.choice.events({
  'click .OpenMenu': function (event) {
    $('.MenuOverride').css('width', '20vw')
  },
  'click .CloseMenu': function (event) {
    $('.MenuOverride').css('width', '0vw')
  },
  'click #closeDisclamer': function (event) {
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
    $('#OptionsHolder').css('visibility', 'visible')
    console.log('visible')
    var day = $('#days').find(':selected').text()
    var month = $('#months').find(':selected').text()
    var year = $('#years').find(':selected').text()
    var birthDate = new Date(year + '-' + month + '-' + day)
    var ageDifMs = Date.now() - birthDate.getTime()
    var ageDate = new Date(ageDifMs) // miliseconds from epoch
    var age = Math.abs(ageDate.getUTCFullYear() - 1970)
    var Gender = $('input[name=GenderOption]:checked', '#col1Options').val()
    var Sexaulity = $('input[name=SexualityOption]:checked', '#col3Options').val()
    console.log(Sexaulity)
    console.log(Gender)
    console.log(age)
    Session.set('SexaulitySession', Sexaulity)
    instance.counter.set(age)
    instance.myReactiveVarGender.set(Gender)
    instance.myReactiveVarSexuality.set(Sexaulity)
    Session.set('GenderSession', Gender)
  }
})

Template.choice.helpers({
    // This is what will be sent to Child1 and Child2.
  sharedVarG: function () {
    return this.myReactiveVarGender
  },
  sharedVarS: function () {
    return this.myReactiveVarSexuality
  }
})
