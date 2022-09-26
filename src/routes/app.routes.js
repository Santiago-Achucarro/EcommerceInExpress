const { Router } = require("express");
const auth = require("../auth/authorization");
const router = Router();
const { 
    renderHome, 
    renderContact, 
    renderStore, 
    renderNoAuth,
    } = require("../controllers/app.controller")

router.get("/", renderHome)
router.get("/store", auth , renderStore)
router.get("/contact", renderContact)
router.get("/noauth", renderNoAuth)

module.exports = router

