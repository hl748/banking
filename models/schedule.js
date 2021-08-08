const mongoose = require("mongoose")
const { Schema, model } = mongoose

const Schedule = new Schema({
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

module.exports = model("Payment",Payment)