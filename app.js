var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var dotenv = require('dotenv').config()
var mongoose = require('mongoose')

var Schema = new mongoose.Schema({
  id: String,
  title: String
})

var Schema = new mongoose.Schema({
  id: Number,
  trip : String,
  location: String,
  date: String,
  description: String,
  category: String,
  amount: Number,
  userId: Object
})

var Transactions = mongoose.model('Transactions', Schema)

mongoose.connect(process.env.MONGOLAB_URI, function (error) {
    if (error) console.error(error)
    else console.log('mongo connected')
})


var users = require('./routes/users')
var transactions = require('./routes/transactions')

var app = express()

app.get('/transactions', function(req, res, next) {
  console.log('Getting the transcations')
  Transactions.find( (err, transactions) => res.json(200, transactions))
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/v1/users', users)
// app.use('/api/v1/transactions', transactions)


module.exports = app
