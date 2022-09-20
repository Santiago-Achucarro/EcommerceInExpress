const bcrypt = require("bcrypt");
const saltRounds = 10;
const funcionesCheck = {}

funcionesCheck.hashPass = async (pass) => {
   return await bcrypt.hash(pass,saltRounds)
}

funcionesCheck.checkPass = async (pass, hashedPass) => {
    return await bcrypt.compare(pass, hashedPass)
}



module.exports = funcionesCheck