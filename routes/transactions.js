var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('Getting the transcations')
  Transaction.find( (err, transactions) => res.json(200, transactions))
})

module.exports = router
