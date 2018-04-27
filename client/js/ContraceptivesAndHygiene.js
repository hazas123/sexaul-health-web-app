import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'

Template.RectalDouche.events({
  'click #moreinfo' (event) {
    $('html,body').animate({
      scrollTop: $('.HygineInfoShift').offset().top},
    'slow')
  }
})

Template.Condom.events({
  'click #moreinfo' (event) {
    $('html,body').animate({
      scrollTop: $('.HygineInfoShift').offset().top},
    'slow')
  }
})

Template.CombinedPill.events({
  'click #moreinfo' (event) {
    $('html,body').animate({
      scrollTop: $('.HygineInfoShift').offset().top},
    'slow')
  }
})

Template.Implant.events({
  'click #moreinfo' (event) {
    $('html,body').animate({
      scrollTop: $('.HygineSmallHeading').offset().top},
    'slow')
  }
})
