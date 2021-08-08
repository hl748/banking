const mongoose = require("mongoose")
const Payment = require("../models/payment.js")
const Checking = require("../models/checking")


exports.payment = async (req, res) => {
    // console.log(req.body)

console.log(req.headers)
console.log(req.body)
console.log("request:"+req)
var username = req.body.username

// models: one for each db
// controllers: one for each type of export
// app: connects to db, root url, etc
// react: 
    // index-renders app
    // App-sets up router
    // components-each page
// router: contains routes for serverside

var name= req.body.state.name
var price = req.body.state.price
console.log(name+price)
console.log(name)
console.log(price)
    const Amt = new Payment({
        name,
        price
    })
    Amt.save()
    var AmtOwn = await Checking.find({username})
    var addAmt = Number(req.body.state.price)
    var highAmt = AmtOwn[0].amount
    var lowAmt = Number(highAmt) - Number(addAmt)
    const subtract = await Checking.updateOne({username},{ $set:{ amount: lowAmt } });
    // console.log(Amt)
    // console.log(Amt[0].name)
    res.send(Amt)

    
  
  }

exports.getItem = async (req,res) =>{
    console.log("testgetitem")
    const username = req.body.username
    const item = await Payment.find({username})
    console.log(item+"item")
    console.log(Payment.find())
    // res.send(item)
}