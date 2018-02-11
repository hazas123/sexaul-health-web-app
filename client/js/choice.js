import { Template } from 'meteor/templating'
import { Session } from 'meteor/session'
import { Blaze } from 'meteor/blaze'
import '../templates/OptionsSelected.html'
import '../templates/choice.html'

var view

Template.OptionsSelected.onRendered(function () {

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
  'click #SelectOptionCol4': function (event) {
    $('#OptionsHolder').css('visibility', 'visible')
    console.log('visible')
  },
  'click #closeDisclamer': function (event) {
    $('#disclamer').css('visibility', 'hidden')
    console.log('disclamer visible')
  },
  'click #MenuLink1': function (event) {
    $('#MainMenuOption1').css('visibility', 'visible')
    console.log('area visible')
  }
})
