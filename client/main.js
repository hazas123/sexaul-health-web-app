import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'
import { Cookies } from 'meteor/ostrio:cookies'
import { Session } from 'meteor/session'
import './main.html'
import './templates/disclaimerBanner'

const cookies = new Cookies()

Meteor.startup(() => {
  if (!cookies.has('returningUser')) {
    Session.set('returningUser', true)
  } else {
    Session.set('returningUser', false)
  }
})

Template.disclaimerBanner.events({
  'click #closedisclaimer': function (event) {
    event.preventDefault()
    $('#disclaimer').css('visibility', 'hidden')
    cookies.set('returningUser', true)
  }
})
