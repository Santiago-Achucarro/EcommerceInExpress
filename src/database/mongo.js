require("dotenv").config()
const mongoose = require("mongoose");
const URL = process.env.DB_url;

mongoose.connect(URL, (err)=> {
    if(err) throw err;
    console.log("Base de datos conectada"); 
})


