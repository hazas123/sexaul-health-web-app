import { Template } from 'meteor/templating'
import '../templates/OptionsSelected.html'
import '../templates/choice.html'

Template.choice.onRendered(function () {
  var view = this.view
})

Template.choice.events({
  'click #closeDisclamer': function (event) {
    event.preventDefault()
    $('#disclamer').css('visibility', 'hidden')
  },
  'click #MenuLink1': function (event) {
    $('#MainMenuOption1').css('visibility', 'visible')
  }
})

Template.choice.events({
  'click #MainM1' () {
    window.location.href = '/AboutSalus'
  },
  'click #MainM2' () {
    window.location.href = '/SearchSalus'
  },
  'click #MainM3' () {
    window.location.href = '/ContactSalus'
  }
})
