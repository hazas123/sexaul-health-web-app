import { Template } from 'meteor/templating'

Template.MenuMain.events({

  'click #HelpLink': function (event) {
    $('.helpMain').toggleClass('HelpHide')
  },
  'click #toggle': function (event) {
    $('#page-slide').toggleClass('slide')
    $('#toggle').toggleClass('slide-tog')
  },
  'click .MenuOverride li': function (event) {
    $('#page-slide').toggleClass('slide')
    $('#toggle').toggleClass('slide-tog')
  },
  'click .MenuLogo': function (event) {
    $('#page-slide').toggleClass('slide')
    $('#toggle').toggleClass('slide-tog')
  },
  'click #BackBtn': function (event) {
    $('#page-slide').toggleClass('slide')
    $('#toggle').toggleClass('slide-tog')
    window.history.back()
  }
})
