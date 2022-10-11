const { Router } = require("express")
const auth = require("../auth/authorization")
const router = Router()
const { 
    renderPostRegister, 
    renderPostLogin,
    renderGetLogout, 
    renderSettingsData, 
    renderSettingsUpdate,
    renderUserDelete
} = require("../controllers/user.controller")

router.post("/user/register", renderPostRegister)
router.post("/user/login", renderPostLogin)
router.post("/user/setting",auth, renderSettingsUpdate)

router.get("/user/logout", renderGetLogout)
router.get("/user/setting",auth, renderSettingsData)
router.get("/user/delete",auth, renderUserDelete )

module.exports = router 