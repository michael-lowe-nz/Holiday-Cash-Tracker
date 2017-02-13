var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var dotenv = require('dotenv').config()
var mongoose = require('mongoose')
var cors = require('cors')


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
app.use(cors())

app.post('/api/v1/transactions', (req, res) => {
  console.log("Posting to transactions")
  var newTransaction = req.body
  // if (!req.body.amount) {
  //   res.send('Improper object sent...')
  // }
  console.log('req.body:', req.body)
  res.send(req.body)
  // res.send("Posted to transactions")
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
