const mongoose = require('mongoose');

const userSchema  = new mongoose.Schema(
    {
        userId: String,
        username: String
    }
)


module.exports = { User };