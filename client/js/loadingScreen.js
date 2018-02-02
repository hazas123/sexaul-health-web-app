import { Template } from 'meteor/templating'
import { Session } from 'meteor/session'
import '../templates/loadingScreen.html'

Session.setDefault('myTemplate', 'hello')

Template.loadingScreen.events({

  'click button': function (event) {
    Session.set('myTemplate', 'hello0')
  }
})
