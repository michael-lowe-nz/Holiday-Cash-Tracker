var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var TransactionSchema = new Schema({
  id: ObjectId,
  amount: Number,
  description: String,
  category: String
})

var postSchema = mongoose.model('TransactionSchema', TransactionSchema)


/* GET transactions listing. */
router.get('/', function(req, res, next) {
  res.json({
    transactions: [1,5,6]
  })
})

router.post('/', function(req, res) {
  new postSchema({
    amount: req.body.amount,
    description: req.body.description,
    category: req.body.category
  })
  .save()
  console.log("Req.body: ", req.body)
  res.send("Transaction Added")
})

module.exports = router
