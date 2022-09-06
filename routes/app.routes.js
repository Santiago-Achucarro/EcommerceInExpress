const { Router } = require("express");
const router = Router();
const {RenderHome, RenderContact, RenderStore} = require("../controllers/app.controller")

router.get("/", RenderHome)
router.get("/store", RenderStore)
router.get("/contact", RenderContact)



module.exports = router

