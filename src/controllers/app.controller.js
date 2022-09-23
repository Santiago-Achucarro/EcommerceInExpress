const controller = {};
const products = require("../public/json/productos.json");


controller.RenderHome = (req, res) => {
    res.render("home", { title: 'Home', user: req.session.user})
}

controller.RenderContact = (req, res) => {
    res.render("contact", {title: 'Contact', user: req.session.user})
}

controller.RenderStore = (req, res) => {
    res.render("store", {
        products, 
        title: 'Store', 
        user: req.session.user
    })
}



controller.RenderNoAuth = (req, res) => {
        res.render("error", {title: "NoAuth"})
}

module.exports = controller;