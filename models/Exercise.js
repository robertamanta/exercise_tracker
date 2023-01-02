const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        maxlength: [30, "Max description length is 30"]

    },
    duration: {
        type: Number,
        required: true,
        min: [1]
    },
    date: {
        type: Date, 
        default: Date.now
    },
    userId: {
        type: String,
        required: true
    }
})



module.exports = Exercise = mongoose.model("exercises", exerciseSchema);