const joiObjectid = require("joi-objectid")
const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema({
    bankReferenceId: {
        type: mongoose.Types.ObjectId,
        
    },
    amount: Number,
    date:{
        type: Date,
        default: Date.now,
    },
    from: String,
    to: String,
})

const Transactions = mongoose.model("Transactions", transactionSchema)

module.exports.Transactions = Transactions