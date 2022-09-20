const mongoose = require("mongoose")
const {Schema, model} = mongoose

const userSchema = new Schema({
    name: {type: String, required: true, unique:true},
    email: {type: String, required: true, lowercase: true, trim:true, unique:true},
    pass: {type: String, required: true},
},
    {timestamps:true}
);

const User = model("User", userSchema);
module.exports = User 