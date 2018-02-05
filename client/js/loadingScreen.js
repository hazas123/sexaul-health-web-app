import { Template } from 'meteor/templating'
import { Session } from 'meteor/session'
import { Blaze } from 'meteor/blaze'
import '../templates/loadingScreen.html'

var view

Template.loadingScreen.onRendered(function () {
  view = this.view
})

Template.loadingScreen.events({

  'click button': function (event) {
    $('#Hold').animate({
      'marginLeft': '-=100vw'}, 4000)
    $('body').css('overflow-y', 'visible')
    setTimeout(() => Blaze.remove(view), 3400)
  }
})

Template.loadingScreen.onDestroyed(function () {
  $('#Hold').remove()
  console.log('BOOM')
}

)
