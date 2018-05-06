import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'
import { Cookies } from 'meteor/ostrio:cookies'
import { Session } from 'meteor/session'
import './main.html'
import './templates/disclaimerBanner'

// requires module to check and set coookies
const cookies = new Cookies()

// code run on client start up
Meteor.startup(() => {
  // sets session var based on if they are a returning user
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
    // sets cookie to be checked for returning users
    cookies.set('returningUser', true)
  }
})
