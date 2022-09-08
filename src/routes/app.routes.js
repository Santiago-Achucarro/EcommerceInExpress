const { Router } = require("express");
const router = Router();
const {RenderHome, RenderContact, RenderStore, RenderRegister} = require("../controllers/app.controller")

router.get("/", RenderHome)
router.get("/store", RenderStore)
router.get("/contact", RenderContact)
router.get("/register", RenderRegister)


module.exports = router

