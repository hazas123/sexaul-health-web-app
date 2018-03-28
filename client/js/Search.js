import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import { Session } from 'meteor/session'

import '../templates/OptionsSelected.html'
import '../templates/choice.html'
var GenderToExport
// var SexaulityToExport

Template.SearchTemp.helpers({
    // This is what will be sent to Child1 and Child2.
  sharedVarG: function () {
    return this.myReactiveVarGender
  }
})

Template.SearchTemp.events({
  'click #SelectOptionCol4' (event, instance) {
    //  clicked the .clickbtn class
    //  increment the counter when button is clicked
    // $('#OptionsHolder').css('visibility', 'visible')
    // console.log('visible')
    /* var day = $('#days').find(':selected').text()
    var month = $('#months').find(':selected').text()
    var year = $('#years').find(':selected').text()
    var birthDate = new Date(year + '-' + month + '-' + day)
    var ageDifMs = Date.now() - birthDate.getTime()
    var ageDate = new Date(ageDifMs) // miliseconds from epoch
    var age = Math.abs(ageDate.getUTCFullYear() - 1970)  */
    var Gender = $('input[name=GenderOption]:checked').val()
  //  var Sexaulity = $('input[name=SexualityOption]:checked', '#col3Options').val()
    // console.log(Sexaulity)
    console.log(Gender)
    // console.log(age)
  //  Session.set('SexaulitySession', Sexaulity)
    // instance.counter.set(age)
  //  instance.myReactiveVarGender.set(Gender)
  //  instance.myReactiveVarSexuality.set(Sexaulity)
    GenderToExport = Gender
  //  SexaulityToExport = Sexaulity
    module.exports.GenderToExport = GenderToExport
  //  module.exports.SexaulityToExport = SexaulityToExport
    // exports.GenderToExport = instance.myReactiveVarSexuality
    Session.set('GenderSession', Gender)
  //  instance.isTrue.set(true)
//    this.train = new ReactiveVar(true)
    console.log(this.train)
    $('#toggle').css('visibility', 'visible')

    if (Gender === undefined) {
      Gender = ''
      console.log(Gender)
      window.location.href = '/SearchSalus'
    }

    if (Gender === 'Female') {
      console.log('Female')
      window.location.href = '/choice' + Gender
    }

    if (Gender === 'Male') {
      console.log('Male')
      window.location.href = '/choice' + Gender
    }

    if (Gender === 'Other') {
      console.log('Male')
      window.location.href = '/choice' + Gender
    }

  /* if (Sexaulity === undefined) {
      Sexaulity = ''
      console.log(Sexaulity)
    } */
  //  window.location.href = '/choice' + Gender
  }
})
