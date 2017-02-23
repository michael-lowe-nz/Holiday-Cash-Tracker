var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var TransactionSchema = new Schema({
  id: ObjectId,
  amount: Number,
  description: String,
  categories: [String],
  location: String
})

var postSchema = mongoose.model('TransactionSchema', TransactionSchema)

module.exports = postSchema
