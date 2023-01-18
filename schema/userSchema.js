const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname : String,
    lname : String,
    age : Number,
})


module.exports = mongoose.model("userSchema",userSchema)