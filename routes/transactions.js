var express = require('express')
var router = express.Router()

var Transaction = require('../schema/Transaction')

/* GET transactions listing. */
router.get('/', function(req, res, next) {
  Transaction.find(function (err, transactions) {
    if (err) return res.send("Error:", err)
    res.json({transactions: transactions})
  })
})

router.get('/:id', function(req, res, next) {
  Transaction.find()
})

router.post('/', function(req, res) {
  new Transaction({
    amount: req.body.amount,
    date: new Date(req.body.year, req.body.month, req.body.day),
    description: req.body.description,
    category: req.body.category,
    location: req.body.location
  })
  .save(function (err) {
    if (err) {
      res.send('Error posting to mongoDB')
    }
    else {
      res.send('Transaction Added')
    }
  })
})

module.exports = router
