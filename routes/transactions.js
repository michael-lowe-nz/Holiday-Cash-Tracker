var express = require('express')
var router = express.Router()

var Transaction = require('../schema/Transactions')

/* GET transactions listing. */
router.get('/', function(req, res, next) {
  Transaction.find(function (err, transactions) {
    if (err) return res.send("Error:", err)
    res.json({transactions: transactions})
  })
})

router.post('/', function(req, res) {
  new Transaction({
    amount: req.body.amount,
    description: req.body.description,
    categories: req.body.categories,
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
