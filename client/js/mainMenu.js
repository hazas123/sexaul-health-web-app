import { Template } from 'meteor/templating'

Template.MenuMain.events({

  'click #HelpLink': function (event) {
    $('.ThreeDHelp').addClass('helpShow')
    $('.SearchHelp').addClass('helpShow')
    $('.Content').addClass('helpShow')
    $('.AI').addClass('helpShow')
    $('.HelpHelp').toggleClass('helpShow')
    $('.helpMain').removeClass('HelpHide')
  },
  'click #toggle': function (event) {
    $('#page-slide').toggleClass('slide')
    $('#toggle').toggleClass('slide-tog')
    $('.ThreeDHelp').addClass('helpShow')
    $('.SearchHelp').addClass('helpShow')
    $('.Content').addClass('helpShow')
    $('.AI').addClass('helpShow')
    $('.HelpHelp').removeClass('helpShow')
  },
  'click .MenuOverride li': function (event) {
    $('#page-slide').toggleClass('slide')
    $('#toggle').toggleClass('slide-tog')
    $('.ThreeDHelp').addClass('helpShow')
    $('.SearchHelp').addClass('helpShow')
    $('.Content').addClass('helpShow')
    $('.AI').addClass('helpShow')
    $('.HelpHelp').removeClass('helpShow')
  },
  'click .MenuLogo': function (event) {
    $('#page-slide').toggleClass('slide')
    $('#toggle').toggleClass('slide-tog')
    $('.ThreeDHelp').addClass('helpShow')
    $('.SearchHelp').addClass('helpShow')
    $('.Content').addClass('helpShow')
    $('.AI').addClass('helpShow')
    $('.HelpHelp').removeClass('helpShow')
  },
  'click #ContactUs': function (event) {
    $('#page-slide').removeClass('slide')
    $('#toggle').removeClass('slide-tog')
    $('.ThreeDHelp').addClass('helpShow')
    $('.SearchHelp').addClass('helpShow')
    $('.Content').addClass('helpShow')
    $('.AI').addClass('helpShow')
    $('.HelpHelp').removeClass('helpShow')
  },
  'click .CloseHelpMenuAlt': function (event) {
    if (!$('.helpMain').hasClass('HelpHide')) {
      $('.helpMain').addClass('HelpHide')
    }
    $('.ThreeDHelp').addClass('helpShow')
    $('.SearchHelp').addClass('helpShow')
    $('.Content').addClass('helpShow')
    $('.AI').addClass('helpShow')
    $('.HelpHelp').removeClass('helpShow')
  },
  'click #ReturnHome': function (event) {
    if (!$('.helpMain').hasClass('HelpHide')) {
      $('.helpMain').addClass('HelpHide')
    }
    $('.ThreeDHelp').addClass('helpShow')
    $('.SearchHelp').addClass('helpShow')
    $('.Content').addClass('helpShow')
    $('.AI').addClass('helpShow')
    $('.HelpHelp').removeClass('helpShow')
    window.location.href = '/choice'
  },
  'click #PreviousPage': function (event) {
    if (!$('.helpMain').hasClass('HelpHide')) {
      $('.helpMain').addClass('HelpHide')
    }
    $('.ThreeDHelp').addClass('helpShow')
    $('.SearchHelp').addClass('helpShow')
    $('.Content').addClass('helpShow')
    $('.AI').addClass('helpShow')
    $('.HelpHelp').removeClass('helpShow')
    window.history.back()
  },
  'click #Help': function (event) {
    $('.helpMain').toggleClass('HelpHide')
    $('.ThreeDHelp').addClass('helpShow')
    $('.SearchHelp').addClass('helpShow')
    $('.Content').addClass('helpShow')
    $('.AI').addClass('helpShow')
    $('.HelpHelp').removeClass('helpShow')
  },
  'click .ResetSize': function (event) {
    $('h1').removeClass('Small')
    $('h1').removeClass('Medium')
    $('h1').removeClass('Large')
    $('p').removeClass('Small')
    $('p').removeClass('Medium')
    $('p').removeClass('Large')
  }
})
