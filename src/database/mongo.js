require("dotenv").config()
const mongoose = require("mongoose");
const {Schema} = mongoose
const URL = process.env.DB_url;

mongoose.connect(URL, (err)=> {
    if(err) throw err;
    console.log("Base de datos conectada"); 
})

const UserSchema = new Schema({
    user: String,
    pass: String,
    email: String,
    date: { type: Date, default: Date.now}
})
