import { Template } from 'meteor/templating'
import { Session } from 'meteor/session'
import { Blaze } from 'meteor/blaze'
import '../templates/loadingScreen.html'
import '../templates/choice.html'

var view

Template.loadingScreen.onRendered(function () {
  view = this.view
  $('body').css('overflow-y', 'visible')
  $(document).ready(function () {
    $(this).scrollTop(0)
    $('html').animate({scrollTop: 0}, 1)
    $('body').animate({scrollTop: 0}, 1)
  })
  $('body').css('overflow-y', 'hidden')
  setTimeout(function () { $('.btn').css('visibility', 'visible') }, 4000)
})

Template.loadingScreen.events({

  'click button': function (event) {
    $('#Hold').animate({
      'marginLeft': '-=100vw'}, 4000)
    setTimeout(function () { $('.OpenMenu').css('visibility', 'visible') }, 3500)
    $('body').css('overflow-y', 'visible')
    setTimeout(() => Blaze.remove(view), 3400)
    setTimeout(function () { $('#disclamer').css('visibility', 'visible') }, 3500)
    setTimeout(function () { $('#toggle').css('visibility', 'visible') }, 3500)
  }
})

Template.loadingScreen.onDestroyed(function () {
  $('#Hold').remove()
  console.log('BOOM')
}
)
