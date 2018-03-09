import {Router} from 'meteor/iron:router'

Router.route('/', function () {
  this.render('loadingScreen')
})

Router.route('/choice', function () {
  this.render('choice')
})

/*      Male sti's routes start here    */
Router.route('/chlamydiaMale', function () {
  this.render('ChlamydiaMaleT')
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

/*      Female sti's routes start here    */

Router.route('/chlamydiaFemale', function () {
  this.render('ChlamydiaFemaleC')
})

Router.route('/genialHerpesFemale', function () {
  this.render('GenialHerpesFemale')
})

Router.route('/genialWartsFemale', function () {
  this.render('GenialWartsFemale')
})

Router.route('/gonorrhoeaFemale', function () {
  this.render('GonorrhoeaFemale')
})

Router.route('/pubicLiceFemale', function () {
  this.render('PubicLiceFemale')
})

Router.route('/scabiesFemale', function () {
  this.render('ScabiesFemale')
})

Router.route('/syphilisFemale', function () {
  this.render('SyphilisFemale')
})

/* Gender Selected */
Router.route('/choiceMale', function () {
  this.render('maleOptions')
})

Router.route('/choiceFemale', function () {
  this.render('FemaleOptions')
})

Router.route('/choiceOther', function () {
  this.render('OtherOptions')
})
/*    If just gender is selected  */
/*
Router.route('/choiceMale', function () {
  this.render('maleOptions')
})

Router.route('/choiceFemale', function () {
  this.render('FemaleOptions')
})

Router.route('/choiceOther', function () {
  this.render('FemaleOptions')
})  */
/*      If male and Sexuality are selected   */
/*
Router.route('/choiceMaleHeterosexual', function () {
  this.render('MaleHomosexual')
})

Router.route('/choiceMaleBisexual', function () {
  this.render('MaleBisexual')
})

Router.route('/choiceMaleHomosexual', function () {
  this.render('MaleHomosexual')
})

Router.route('/choiceMalePreferNotTo', function () {
  this.render('maleOptions')
})
*/

/*      If Female and Sexuality are selected   */
/*
Router.route('/choiceFemaleHeterosexual', function () {
  this.render('FemaleHomosexual')
})

Router.route('/choiceFemaleBisexual', function () {
  this.render('FemaleBisexual')
})

Router.route('/choiceFemaleHomosexual', function () {
  this.render('FemaleHomosexual')
})

Router.route('/choiceFemalePreferNotTo', function () {
  this.render('FemaleOptions')
}) */

/*      If Other and Sexuality are selected   */
/*
Router.route('/choiceOtherHeterosexual', function () {
  this.render('OtherHomosexual')
})

Router.route('/choiceOtherBisexual', function () {
  this.render('OtherBisexual')
})

Router.route('/choiceOtherHomosexual', function () {
  this.render('OtherHomosexual')
})

Router.route('/choiceOtherPreferNotTo', function () {
  this.render('OtherOptions')
}) */

/*    If just sexuality is selected  */
/*
Router.route('/choiceHomosexual', function () {
  this.render('maleOptions')
})

Router.route('/choiceBisexual', function () {
  this.render('maleOptions')
})

Router.route('/choiceHeterosexual', function () {
  this.render('maleOptions')
})

Router.route('/choicePreferNotTo', function () {
  this.render('maleOptions')
}) */
