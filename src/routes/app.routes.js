const { Router } = require("express");
const auth = require("../auth/authorization");
const router = Router();
const { RenderHome, RenderContact, RenderStore, RenderRegister,RenderNoAuth, RenderSpecialHome } = require("../controllers/app.controller")

router.get("/", RenderHome)
router.get("/store", auth , RenderStore)
router.get("/contact", RenderContact)
router.get("/noauth", RenderNoAuth)

module.exports = router

