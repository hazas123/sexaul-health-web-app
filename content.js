import 'babel-polyfill' // polyfill fixes Array.includes Error in simpl-schema
import SimpleSchema from 'simpl-schema'
import { Mongo } from 'meteor/mongo'
const Content = new Mongo.Collection('content')

const Schemas = {}

Schemas.Content = new SimpleSchema({
  name: {
    type: String,
    label: 'Title',
    max: 200
  },
  result: {
    type: Array
  },
  'result.$': {
    type: Object,
    max: 100
  }
})

Content.attachSchema(Schemas.Content)

export default Content
