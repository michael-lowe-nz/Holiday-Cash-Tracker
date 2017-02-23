var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

/** This is a schema **/
var TransactionSchema = new Schema({
  id: ObjectId,
  amount: Number,
  description: String,
  categories: [String],
  location: String
})

/** This is a model, we will create an instance of this model (a document) to store in the DB **/
var Transaction = mongoose.model('TransactionSchema', TransactionSchema)

module.exports = Transaction
