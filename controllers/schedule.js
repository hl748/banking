const mongoose = require("mongoose")
const Schedule = require("../models/schedule.js")



exports.schedule = async (req, res) => {
    // console.log(req.body)
//
console.log(req.headers)
    const Amt = await Schedule.find({ username })
    Amt.save()

    console.log(Amt)

    res.send(Amt)

    
  
  }