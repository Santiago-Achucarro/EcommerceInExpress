const { Router } = require("express")
const auth = require("../auth/authorization")
const { renderPostRegister, renderPostLogin,RenderSpecialHome, RenderSpecialContact,renderGetLogout } = require("../controllers/user.controller")
const router = Router()

router.get("/user/homelogin", auth , RenderSpecialHome)
router.get("/user/contact", auth , RenderSpecialContact)

router.post("/user/register", renderPostRegister)

router.post("/user/login", renderPostLogin)
router.get("/user/logout", renderGetLogout)

module.exports = router 