const controller = {};
const products = require("../public/json/productos.json")


controller.RenderHome = (req, res) => {
    res.render("home")
}

controller.RenderContact = (req, res) => {
    res.render("contact")
}

controller.RenderStore = (req, res) => {
    res.render("store", {
           products,
    })
    
}

controller.RenderRegister = (req,res) => {
    res.render("register")
}

module.exports = controller;