const User = require("../models/schema");
const { hashPass,checkPass } = require("../public/helpers/bycript");
const products = require("../public/json/productos.json");

const controller = {};



controller.renderPostRegister = async (req, res) => {
  const { user, email, pass } = req.body;
  const password = await hashPass(pass);

  const newUser = new User({
    user,
    email,
    password,
  });

const usr = {
  id: newUser._id,
  name: newUser.user,
};

  req.session.user = usr
  newUser.save((err) => {
    if (!err) {
      res.render("store", {products,title: "Store", user: req.session.user, id: req.session.user.id});
    } else {
      res.render("home", { title:"Home" , message: "Error de registro" });
    }
  });
};

controller.renderPostLogin = async (req, res) => {
  const { user, pass } = req.body;
  const usuario = await User.find().where({user});
  console.log(usuario);
  if (!usuario.length ) {
    return res.render("home", { title:"Home" , message: "Contraseña o Usuario incorrectos" });
  };
  const usr = {
    id: usuario[0]._id,
    name: usuario[0].user
  }

  if(await checkPass(pass, usuario[0].password)){
    req.session.user = usr
    res.render("store", {products, title: "Store", user: req.session.user, id:`${req.session.user.id}`});
  }else{
  return res.render("home", { title:"Home" , message: "Contraseña o Usuario incorrectos" });

}
  
};

controller.renderSettingsData = async (req,res) => {
   const user =  await User.findById(req.session.user.id).lean()
   res.render("config", {title:"Perfil",user})
}

controller.renderSettingsUpdate = async (req,res) => {
  try {
    await User.findByIdAndUpdate(req.session.user.id, req.body)
    res.render("config",{title: "Perfil" , accepted: "Cambios Realizados", user: req.session.user })
  } catch (error) {
    res.render("config",{title:"Perfil", refused: "Hubo un error en los cambios", user: req.session.user})
  }
}

controller.renderUserDelete = async (req,res) => {
  try {
    await User.findByIdAndDelete(req.session.user.id)
    req.session.destroy();
    res.redirect("/");
  } catch (error) {
    res.render("config", {title: "Perfil" , refused: "Hubo un error en los cambios", user: req.session.user})
  }
}

controller.renderGetLogout = async (req,res) => {
  req.session.destroy();
  res.redirect("/");
}

module.exports = controller;
