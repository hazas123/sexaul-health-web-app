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
  'click #col6': function (event) {
    $('#OptionsHolder').css('visibility', 'visible')
    console.log('visible')
  }
})
