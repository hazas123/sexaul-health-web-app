import { Template } from 'meteor/templating'
import '../templates/choice.html'

// sets click events
Template.SearchTemp.events({
  'click #SelectOptionCol4' (event, instance) {
    var Gender = $('input[name=GenderOption]:checked').val()
    $('#toggle').css('visibility', 'visible')

    if (Gender === undefined) {
      Gender = ''
      window.location.href = '/SearchSalus'
    }

    if (Gender === 'Female') {
      window.location.href = '/choice' + Gender
    }

    if (Gender === 'Male') {
      window.location.href = '/choice' + Gender
    }

    if (Gender === 'Other') {
      window.location.href = '/choice' + Gender
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
