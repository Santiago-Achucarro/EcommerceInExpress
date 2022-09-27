const controller = {};
const products = require("../public/json/productos.json");


controller.renderHome = (req, res) => {
    res.render("home", { title: 'Home', user: req.session.user})
}

controller.renderContact = (req, res) => {
    res.render("contact", {title: 'Contact', user: req.session.user})
}

controller.renderStore = (req, res) => {
    res.render("store", {
        products, 
        title: 'Store', 
        user: req.session.user
    })
}



controller.renderNoAuth = (req, res) => {
        res.render("error", {title: "NoAuth"})
}



module.exports = controller;