var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var dotenv = require('dotenv').config()
var mongoose = require('mongoose')

var Schema = new mongoose.Schema()

var TransactionSchema = new mongoose.Schema({
  id: Number,
  trip : String,
  location: String,
  date: String,
  description: String,
  category: String,
  amount: Number,
  currency: String,
  userId: Object
})


mongoose.connect(process.env.MONGOLAB_URI)
var db = mongoose.connection
var Transaction = mongoose.model('TransactionSchema', Schema)


var users = require('./routes/users')

var app = express()

app.post('/api/v1/transactions', (req, res) => {
  console.log("retrieving Transaction var");
  var transaction = new Transaction()
  transaction.amount = 12.2
  transaction.save(function (err) {
    res.send('Transaction created')
  })
})

app.get('/api/v1/transactions', function (req, res) {
  console.log('Getting the transactions')
  Transaction.find( function (err, transactions){
    res.json(200, transactions)
  })
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/v1/users', users)


module.exports = app
