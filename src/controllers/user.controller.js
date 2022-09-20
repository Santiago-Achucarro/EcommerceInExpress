const User = require("../models/schema");
const { hashPass,checkPass } = require("../public/helpers/bycript");
const products = require("../public/json/productos.json");

const controller = {};



controller.RenderSpecialHome = (req,res) => {
  res.render("home", {title: "Home", user: req.session.user.name})
}

controller.RenderSpecialContact = (req,res) => {
  res.render("contact", {title: "Contact", user: req.session.user.name})
}


controller.renderPostRegister = async (req, res) => {
  const { user, email, password } = req.body;
  const pass = await hashPass(password);

  const newUser = new User({
    name:user,
    email,
    pass,
  });
  req.session.user = newUser
  newUser.save((err) => {
    if (!err) {
      res.render("store", {products,title: "Store", user: req.session.user.name});
    } else {
      res.render("home", { title:"Home" , message: "Ya existe ese usuario" });
    }
  });
};

controller.renderPostLogin = async (req, res) => {
  const { user, password } = req.body;
  const usuario = await User.find().where({ user });
  const hashedPass = usuario[0].pass
  console.log(password);
  console.log(hashedPass);

  const usr = {
    id: usuario[0]._id,
    name: usuario[0].name
  }

  if (!usuario.length) {
    return res.render("/", { message: "Contraseña o Usuario incorrectos" });
  };

  if(await checkPass(password, hashedPass)){
    req.session.user = usr
    res.render("store", {products, title: "Store", user: `${req.session.user.name} ${req.session.user.id}` });

}else{
  return res.render("home", { title:"Home" , message: "Contraseña o Usuario incorrectos" });

}
  
};

controller.GetSettingsData = async (req,res) => {
   const user =  await User.findById(req.session.user.id).lean()
   res.render("config", {user})
}

controller.renderGetLogout = async (req,res) => {
  req.session.destroy();
  res.redirect("/");
}

module.exports = controller;
