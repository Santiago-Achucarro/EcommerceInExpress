const { Router } = require("express");
const router = Router();
const { RenderPostContact } = require("../controllers/form.controller");
const validationRules = require("../validator/validator.controller");

router.post("/contact", validationRules , RenderPostContact )

module.exports = router