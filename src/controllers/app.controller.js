const controller = {};
const products = require("../public/json/productos.json")
const auth = require("../auth/authorization");


controller.RenderHome = (req, res) => {
    res.render("home", { title: 'Home'})
}

controller.RenderContact = (req, res) => {
    res.render("contact", {title: 'Contact'})
}

controller.RenderStore = (req, res) => {
    res.render("store", {
        products, 
        title: 'Store', 
        user: req.session.user.name
    })
}



controller.RenderNoAuth = (req, res) => {
        res.render("error", {title: "NoAuth"})
}

module.exports = controller;