import { Template } from 'meteor/templating'
import { Session } from 'meteor/session'
import { Blaze } from 'meteor/blaze'
import { ReactiveVar } from 'meteor/reactive-var'

import '../templates/OptionsSelected.html'
import '../templates/choice.html'

var view

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
  'click #toggle': function (event) {
    $('#page-slide').toggleClass('slide')
    $('#toggle').toggleClass('slide-tog')
  },
  'click #SelectOptionCol4': function (event, instance) {
    $('#toggle').css('visibility', 'visible')
    $('#OptionsHolder').css('visibility', 'visible')
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
  }
})
