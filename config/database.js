const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('db connect ')
    } catch (error) {
        console.log(error)   
    }
};