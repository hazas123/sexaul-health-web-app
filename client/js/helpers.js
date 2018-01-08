import { Template } from 'meteor/templating'

Template.registerHelper('log', function (Str) {
  console.log(Str)
})
