var sinon = require('sinon')
var chai = require('chai')
var expect = chai.expect

var mongoose = require('mongoose')
require('sinon-mongoose')

var Transaction = require('../schema/Transaction')

expect("Get all transactions", () => {
  it("should return all transactions", (done) => {
    console.log("Testing...", done)
  })
})
