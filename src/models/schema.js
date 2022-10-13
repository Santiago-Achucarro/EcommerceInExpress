const mongoose = require("mongoose")
const {Schema, model} = mongoose

const userSchema = new Schema({
    user: {type: String, required: true, unique:true},
    email: {type: String, required: true, lowercase: true, trim:true},
    password: {type: String, required: true},
},
    {timestamps:true}
);

const userMarket = new Schema({
    idUser: {type:String,required:true},
    amount: {type:Number, required:true}
})

const Market =  model("Market", userMarket)
const User = model("User", userSchema);
module.exports = {User,Market} 