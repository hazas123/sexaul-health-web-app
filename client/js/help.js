import { Template } from 'meteor/templating'

import '../templates/Help.html'

Template.HelpGuide.events({

  'click .helpHoldBack': function (event) {
    var HelpID = event.target.id
    if (HelpID === 'ThreeDHelp') {
      $('.ThreeDHelp').addClass('helpShow')
      $('.SearchHelp').addClass('helpShow')
      $('.Content').addClass('helpShow')
      $('.AI').addClass('helpShow')
      $('.HelpHelp').addClass('helpShow')
      $('.' + HelpID).toggleClass('helpShow')
    }
    if (HelpID === 'SearchHelp') {
      $('.ThreeDHelp').addClass('helpShow')
      $('.SearchHelp').addClass('helpShow')
      $('.Content').addClass('helpShow')
      $('.AI').addClass('helpShow')
      $('.HelpHelp').addClass('helpShow')
      $('.' + HelpID).toggleClass('helpShow')
    }
    if (HelpID === 'Content') {
      $('.ThreeDHelp').addClass('helpShow')
      $('.SearchHelp').addClass('helpShow')
      $('.Content').addClass('helpShow')
      $('.AI').addClass('helpShow')
      $('.HelpHelp').addClass('helpShow')
      $('.' + HelpID).toggleClass('helpShow')
    }
    if (HelpID === 'AI') {
      $('.ThreeDHelp').addClass('helpShow')
      $('.SearchHelp').addClass('helpShow')
      $('.Content').addClass('helpShow')
      $('.AI').addClass('helpShow')
      $('.HelpHelp').addClass('helpShow')
      $('.' + HelpID).toggleClass('helpShow')
    }
  },
  'click #CloseHelp': function (event) {
    $('.helpMain').toggleClass('HelpHide')
    $('.ThreeDHelp').addClass('helpShow')
    $('.SearchHelp').addClass('helpShow')
    $('.Content').addClass('helpShow')
    $('.AI').addClass('helpShow')
    $('.HelpHelp').removeClass('helpShow')
  },
  'click #AIFromSearch': function (event) {
    $('.ThreeDHelp').addClass('helpShow')
    $('.SearchHelp').addClass('helpShow')
    $('.Content').addClass('helpShow')
    $('.AI').addClass('helpShow')
    $('.HelpHelp').addClass('helpShow')
    $('.' + 'AI').toggleClass('helpShow')
  }
})
