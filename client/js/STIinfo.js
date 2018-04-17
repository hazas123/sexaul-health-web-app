import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'

var STIName

Template.ChlamydiaMale.onRendered(function () {
  STIName = 'chlamydia'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
  })
})

Template.ChlamydiaMale.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})

Template.ChlamydiaFemale.onRendered(function () {
  STIName = 'chlamydia'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
  })
})

Template.ChlamydiaFemale.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})

Template.GenitalHerpesMale.onRendered(function () {
  STIName = 'genital-herpes'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
  })
})

Template.GenitalHerpesMale.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})

Template.GenitalHerpesFemale.onRendered(function () {
  STIName = 'genital-herpes'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
  })
})

Template.GenitalHerpesFemale.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})

Template.genitalWartsMale.onRendered(function () {
  STIName = 'genital-warts'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
  })
})

Template.genitalWartsMale.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})

Template.GenitalWartsFemale.onRendered(function () {
  STIName = 'genital-warts'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
  })
})

Template.GenitalWartsFemale.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})

Template.GonorrhoeaMale.onRendered(function () {
  STIName = 'gonorrhoea'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
  })
})

Template.GonorrhoeaMale.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})

Template.GonorrhoeaFemale.onRendered(function () {
  STIName = 'gonorrhoea'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
  })
})

Template.GonorrhoeaFemale.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})

Template.PubicLiceMale.onRendered(function () {
  STIName = 'pubic-lice'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
  })
})

Template.PubicLiceMale.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})

Template.PubicLiceFemale.onRendered(function () {
  STIName = 'pubic-lice'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
  })
})

Template.PubicLiceFemale.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})

Template.ScabiesMale.onRendered(function () {
  STIName = 'scabies'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
  })
})

Template.ScabiesMale.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})

Template.ScabiesFemale.onRendered(function () {
  STIName = 'scabies'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
  })
})

Template.ScabiesFemale.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})

Template.SyphilisMale.onRendered(function () {
  STIName = 'syphilis'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
  })
})

Template.SyphilisMale.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})

Template.SyphilisFemale.onRendered(function () {
  STIName = 'syphilis'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
  })
})

Template.SyphilisFemale.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})

Template.HIVMale.onRendered(function () {
  STIName = 'hiv-and-aids'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
  })
})

Template.HIVMale.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})

Template.HIVFemale.onRendered(function () {
  STIName = 'hiv-and-aids'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
  })
})

Template.HIVFemale.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})
