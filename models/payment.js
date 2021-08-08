const mongoose = require("mongoose")
const { Schema, model } = mongoose

const Payment = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = model("Payment",Payment)