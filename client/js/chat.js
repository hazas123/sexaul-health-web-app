import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'

import '../templates/chat.html'

// Template.chat.onCreated(function chatOnCreated () {
//
// })
//
// Template.chat.helpers({
//
// })

Template.chat.events({
  'click #addClass': function () {
    $('#addClass').click(function () {
      $('#chat').show()
    })
  }

})
