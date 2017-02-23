var test = require('tape')
var request = require('superagent')
var app = require('../app')
// console.log("Testing and working?")

test('base test', function(t) {
  t.pass()
  t.end()
})
// test('Can get the lifestyles from /api/v1/lifestyles', t => {
//   request(app)
//     .get('/api/v1/transactions')
//     .expect(200)
//     .end((err, res) => {
//       t.pass()
//       t.end()
//     })
// })
