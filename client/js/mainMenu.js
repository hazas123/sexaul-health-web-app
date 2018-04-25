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
  'click #ContactUs': function (event) {
    $('#page-slide').toggleClass('slide')
    $('#toggle').toggleClass('slide-tog')
    window.location.href = '/ContactSalus'
  },
  'click .CloseHelpMenuAlt': function (event) {
    if (!$('.helpMain').hasClass('HelpHide')) {
      $('.helpMain').addClass('HelpHide')
    }
  },
  'click #ReturnHome': function (event) {
    if (!$('.helpMain').hasClass('HelpHide')) {
      $('.helpMain').addClass('HelpHide')
    }
    window.location.href = '/choice'
  },
  'click #PreviousPage': function (event) {
    if (!$('.helpMain').hasClass('HelpHide')) {
      $('.helpMain').addClass('HelpHide')
    }
    window.history.back()
  },
  'click #Help': function (event) {
    $('.helpMain').toggleClass('HelpHide')
  }
})
