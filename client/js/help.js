import { Template } from 'meteor/templating'

import '../templates/Help.html'

Template.HelpGuide.events({

  'click .helpHoldBack': function (event) {
    console.log('clicked')
    var HelpID = event.target.id
    console.log(HelpID + ' h')
    if (HelpID === 'ThreeDHelp') {
      $('.ThreeDHelp').addClass('helpShow')
      $('.SearchHelp').addClass('helpShow')
      $('.Content').addClass('helpShow')
      $('.' + HelpID).toggleClass('helpShow')
    }
    if (HelpID === 'SearchHelp') {
      $('.ThreeDHelp').addClass('helpShow')
      $('.SearchHelp').addClass('helpShow')
      $('.Content').addClass('helpShow')
      $('.' + HelpID).toggleClass('helpShow')
    }
    if (HelpID === 'Content') {
      $('.ThreeDHelp').addClass('helpShow')
      $('.SearchHelp').addClass('helpShow')
      $('.Content').addClass('helpShow')
      $('.' + HelpID).toggleClass('helpShow')
    }
  },
  'click #CloseHelp': function (event) {
    $('.helpMain').toggleClass('HelpHide')
  }
})
/*
var $btns = $('.helpHoldBack').click(function() {
  console.log('clicked');
  console.log(this.id);
  if (this.id == 'ThreeDHelp') {
    console.log(this.id);
    document.getElementsByClassName('ThreeDHelp').display = 'inherit';
}
if (this.id == 'SearchHelp') {
  console.log(this.id);
  document.getElementsByClassName('SearchHelp').display = 'visible';
}
if (this.id == 'Content') {
  console.log(this.id);
  document.getElementsByClassName('Content').display = 'visible';
}
})  */
