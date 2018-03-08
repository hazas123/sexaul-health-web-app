import {Router} from 'meteor/iron:router'

Router.route('/', function () {
  this.render('loadingScreen')
})

Router.route('/choice', function () {
  this.render('choice')
})

Router.route('/choiceMale', function () {
  this.render('maleOptions')
})

Router.route('/choiceFemale', function () {
  this.render('FemaleOptions')
})

Router.route('/chlamydiaMale', function () {
  this.render('ChlamydiaMaleT')
})

Router.route('/chlamydiaFemale', function () {
  this.render('ChlamydiaFemaleC')
})

Router.route('/genialHerpesMale', function () {
  this.render('GenialHerpesMale')
})

Router.route('/genialWartsMale', function () {
  this.render('GenialWartsMaleT')
})

Router.route('/gonorrhoeaMale', function () {
  this.render('GonorrhoeaMale')
})

Router.route('/pubicLiceMale', function () {
  this.render('PubicLiceMale')
})

Router.route('/scabiesMale', function () {
  this.render('ScabiesMale')
})

Router.route('/syphilisMale', function () {
  this.render('SyphilisMale')
})
