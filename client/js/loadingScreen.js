import { Template } from 'meteor/templating'
import '../templates/loadingScreen.html'
import '../templates/choice.html'

// set click on enter button
Template.loadingScreen.events({

  'click button': function (event) {
    window.location.href = '/choice'
  }
})
