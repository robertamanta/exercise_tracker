const mongoose = require('mongoose');

const exerciseSchema  = new mongoose.Schema(
    {
        username: String,
        description: String,
        duration: number,
        date: String,
        userId: String
    }
)


module.exports = { Exercise };