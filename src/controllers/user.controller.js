const {User,Market} = require("../models/schema");
const { hashPass,checkPass } = require("../public/helpers/bycript");
const products = require("../public/json/productos.json");

const controller = {};


controller.renderMarket = (req,res) => {
  let id = req.session.user.id
  let data  = Object.keys(req.body)

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    let values = req.body[element]
    if(values <= 0){
      console.log("estos valores no");
    }else{
      const newMarket = new Market ({
        idUser: id,
        amount:values,
      })
      newMarket.save((err) => {
          if(!err){
            res.render("store",{products,user: req.session.user, title:"store",values})
          }else{
            res.redirect("/")
          }
      })
    }
  }

}

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

newUser.save((err) => {
  if (!err) {
      req.session.user = usr
      res.render("store", {products,title: "Store", user: req.session.user, id: req.session.user.id});
    } else {
      console.log(err)
      res.render("home", { title:"Home" , message: "Error de registro" });
    }
  });

};

controller.renderPostLogin = async (req, res) => {
  const { user, pass } = req.body;
  const usuario = await User.find().where({user});
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
   const usuario =  await User.findById(req.session.user.id).lean()
   res.render("config", {title:"Perfil", usuario, user:req.session.user })
}

controller.renderSettingsUpdate = async (req,res) => {
  try {
    await User.findByIdAndUpdate(req.session.user.id, req.body)
    const usuario =  await User.findById(req.session.user.id).lean()
    req.session.user.name = req.body.user
    res.render("config",{title: "Perfil" , accepted: "Cambios Realizados", user: req.session.user, usuario})
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
