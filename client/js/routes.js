import {Router} from 'meteor/iron:router'

Router.route('/', function () {
  this.render('loadingScreen')
})

Router.route('/choice', function () {
  this.render('choice')
})

Router.route('/choiceMan', function () {
  this.render('maleOptions')
})
