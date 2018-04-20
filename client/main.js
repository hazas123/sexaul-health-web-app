import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'
import { Cookies } from 'meteor/ostrio:cookies'
import { Session } from 'meteor/session'
import './main.html'
import './templates/disclamerBanner'

const cookies = new Cookies()

Meteor.startup(() => {
  if (!cookies.has('returningUser')) {
    Session.set('returningUser', true)
  } else {
    Session.set('returningUser', false)
  }
})

Template.DisclamerBanner.events({
  'click #closeDisclamer': function (event) {
    event.preventDefault()
    $('#disclamer').css('visibility', 'hidden')
    cookies.set('returningUser', true)
  }
})
