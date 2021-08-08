const mongoose = require("mongoose");
const Checking = require("../models/checking.js");
const Account = require("../models/account.js");
const accountAuth = require("../controllers/accountAuth.js");
const cookieParser = require("cookie-parser");
const ObjectId = require("mongodb").ObjectId

exports.checkingAccount = async (req, res) => {
  // console.log(req.body)

  console.log(req.headers);
  var username = req.body.username;
  console.log(username)
  const Amt = await Checking.find({ username });
  console.log("amount" + Amt);

  res.send(Amt);
};

exports.addCheckingAccount = async (req, res) => {
    console.log(req.body)
    console.log(res.body)
    const username = req.body.username
    var addAmt = Number(req.body.state.addAmount)

    var oldAmt = req.body.amount
    var newAmt = Number(oldAmt) + Number(addAmt)
  const Amt = await Checking.updateOne({ username },{$set:{amount:newAmt}});
  console.log(Amt)
  res.send(Amt)
//   console.log(Checking.find(username))
}
// const express = require('express');

// const { addExpense, getExpenses, patchExpense, deleteExpense } = require('../controllers/transactions');
// const { requireSignin } = require('../controllers/userAuth');

// const router = express.Router();

// router.post('/expenses', requireSignin, addExpense);
// router.get('/expenses', requireSignin, getExpenses);
// router.patch('/expenses', requireSignin, patchExpense);
// router.delete('/expenses', requireSignin, deleteExpense);

// module.exports = router;


exports.transferCheckingAccount = async (req, res) => {
    console.log(req.body)
    var username = req.body.username
    var id = req.body.state.id
    console.log("our id:"+id)
    var id = new ObjectId(id)
    console.log({ id })
  const Amt = await Checking.find({"_id":id})

  var username = req.body.username
    console.log("user:"+username)
    var addAmt = Number(req.body.state.transferAmount)

    var oldAmt = Amt[0].amount
    console.log(oldAmt)
    var newAmt = Number(oldAmt) + addAmt
    console.log(`${oldAmt} turns to ${newAmt}`)
    var id = req.body.state.id
  const transfer = await Checking.updateOne({"_id":id},{ $set:{ amount: newAmt } });
  console.log(transfer)
  var AmtOwn = await Checking.find({username})
  var highAmt = AmtOwn[0].amount
  var lowAmt = Number(highAmt) - Number(addAmt)
  const subtract = await Checking.updateOne({username},{ $set:{ amount: lowAmt } });
  console.log(subtract)
  res.send()
//   console.log(Checking.find(username))
}

exports.transferToSaving = async (req, res) => {
  console.log(req.body)
    var username = req.body.username
  const Amt = await Saving.find({username})
  console.log("h")

    var addAmt = Number(req.body.state.transferAmount)

    var oldAmt = Amt[0].amount
    console.log("old amount:" + oldAmt)
    console.log(addAmt)
    console.log(req.body.amount)
    console.log(req.headers)
    console.log(req.method)
    console.log(oldAmt)
    var newAmt = Number(oldAmt) + addAmt
    console.log(`${oldAmt} turns to ${newAmt}`)
  const transfer = await Saving.updateOne({ username },{ $set:{ amount: newAmt } });
  console.log(transfer)
  var AmtOwn = await Checking.find({username})
  var highAmt = AmtOwn[0].amount
  var lowAmt = Number(highAmt) - Number(addAmt)
  const subtract = await Checking.updateOne({username},{ $set:{ amount: lowAmt } });
  console.log(subtract)
  console.log(res)
  res.send()
}

const Saving = require("../models/saving.js")