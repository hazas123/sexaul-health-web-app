import { Template } from 'meteor/templating'
import '../templates/loadingScreen.html'
import '../templates/choice.html'

Template.loadingScreen.events({

  'click button': function (event) {
    window.location.href = '/choice'
  }
})
