import { Template } from 'meteor/templating'
var hello = require('./choice.js')

Template.registerHelper('_log', function (Str) {
  console.log(Str)
})

Template.registerHelper('_equals', function (arg1, arg2, options, context) {
  if (arguments.length < 3) throw new Error('Handlebars Helper "equals" needs 2 parameters')
  console.log('arg1', arg1)
  console.log('arg2', arg2)
  if (options && options.hasOwnProperty('fn') && options.fn instanceof Function) {
    if (arg1 === arg2) {
      return options.fn(context)
    }
    return options.inverse(context)
  }
  return arg1 === arg2
})

Template.registerHelper('_notequals', function (arg1, arg2, options, context) {
  if (arguments.length < 3) throw new Error('Handlebars Helper "notequals" needs 2 parameters')
  if (options && options.hasOwnProperty('fn') && options.fn instanceof Function) {
    if (arg1 !== arg2) {
      return options.fn(context)
    }
    return options.inverse(context)
  }
  return arg1 !== arg2
})

Template.registerHelper('_between', function (arg1, arg2, arg3, options, context) {
  if (arguments.length < 4) throw new Error('Handlebars Helper "between" needs 3 parameters')
  if (options && options.hasOwnProperty('fn') && options.fn instanceof Function) {
    if (arg1 >= arg2 && arg1 < arg3) {
      return options.fn(context)
    }
    return options.inverse(context)
  }
  return arg1 >= arg2 && arg1 < arg3
})

Template.registerHelper('_greaterThan', function (arg1, arg2, options, context) {
  if (arguments.length < 3) throw new Error('Handlebars Helper "greaterThan" needs 2 parameters')
  if (options && options.hasOwnProperty('fn') && options.fn instanceof Function) {
    if (arg1 >= arg2) {
      return options.fn(context)
    }
    return options.inverse(context)
  }
  return arg1 >= arg2
})
