import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'

var STIName

Template.ChlamydiaMaleT.onRendered(function () {
  STIName = 'chlamydia'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    console.log(result)
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
    console.log(result)
  })
})

Template.ChlamydiaMaleT.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})

Template.ChlamydiaFemaleC.onRendered(function () {
  STIName = 'chlamydia'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    console.log(result)
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
    console.log(result)
  })
})

Template.ChlamydiaFemaleC.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})

Template.GenitalHerpesMale.onRendered(function () {
  STIName = 'genital-herpes'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    console.log(result)
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
    console.log(result)
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
    console.log(result)
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
    console.log(result)
  })
})

Template.GenitalHerpesFemale.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})

Template.GenialWartsMaleT.onRendered(function () {
  STIName = 'genital-warts'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    console.log(result)
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
    console.log(result)
  })
})

Template.GenialWartsMaleT.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})

Template.GenialWartsFemale.onRendered(function () {
  STIName = 'genital-warts'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    console.log(result)
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
    console.log(result)
  })
})

Template.GenialWartsFemale.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})

Template.GonorrhoeaMale.onRendered(function () {
  STIName = 'gonorrhoea'
  Meteor.call('getNhsInfo', STIName, function (error, result) {
    console.log(result)
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
    console.log(result)
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
    console.log(result)
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
    console.log(result)
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
    console.log(result)
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
    console.log(result)
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
    console.log(result)
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
    console.log(result)
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
    console.log(result)
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
    console.log(result)
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
    console.log(result)
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
    console.log(result)
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
    console.log(result)
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
    console.log(result)
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
    console.log(result)
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
    console.log(result)
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
    console.log(result)
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
    console.log(result)
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
    console.log(result)
    if (error) {
      console.log(error)
    }
    $('.conditionInfo').append('<div>' + result + '</div>')
    console.log(result)
  })
})

Template.HIVFemale.events({
  'click .mainentityofpagebutton' (event) {
    $('.' + event.target.id).toggleClass('mainentityofpage')
  }
})
