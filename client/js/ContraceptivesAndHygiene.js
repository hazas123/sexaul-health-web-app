import { Template } from 'meteor/templating'

// set click events
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

Template.Tampon.events({
  'click #moreinfo' (event) {
    $('html,body').animate({
      scrollTop: $('.HygineSmallHeading').offset().top},
    'slow')
  }
})
