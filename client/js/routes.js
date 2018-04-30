import {Router} from 'meteor/iron:router'

Router.route('/', function () {
  this.render('loadingScreen')
})

Router.route('/choice', function () {
  this.render('choice')
})

/*      Male sti's routes start here    */
Router.route('/ChlamydiaMale', function () {
  this.render('ChlamydiaMale')
})

Router.route('/genitalHerpesMale', function () {
  this.render('GenitalHerpesMale')
})

Router.route('/genitalWartsMale', function () {
  this.render('genitalWartsMale')
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

Router.route('/HIVMale', function () {
  this.render('HIVMale')
})
/*      Female sti's routes start here    */

Router.route('/chlamydiaFemale', function () {
  this.render('ChlamydiaFemale')
})

Router.route('/genitalHerpesFemale', function () {
  this.render('GenitalHerpesFemale')
})

Router.route('/GenitalWartsFemale', function () {
  this.render('GenitalWartsFemale')
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

Router.route('/HIVFemale', function () {
  this.render('HIVFemale')
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

Router.route('/Myths', function () {
  this.render('SexualMyths')
})

Router.route('/AboutSalus', function () {
  this.render('About')
})
Router.route('/Disclaimer', function () {
  this.render('disclaimer')
})

Router.route('/SiteMap', function () {
  this.render('SiteMap')
})

Router.route('/SearchSalus', function () {
  this.render('SearchTemp')
})

Router.route('/ContactSalus', function () {
  this.render('ContactTemp')
})

//  hygiene

Router.route('/RectalDouche', function () {
  this.render('RectalDouche')
})

Router.route('/Tampon', function () {
  this.render('Tampon')
})
//  Contraception

Router.route('/Condoms', function () {
  this.render('Condom')
})

Router.route('/Implant', function () {
  this.render('Implant')
})

Router.route('/CombinedPill', function () {
  this.render('CombinedPill')
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
