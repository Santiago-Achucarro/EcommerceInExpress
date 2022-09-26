const { Router } = require("express");
const router = Router();
const { renderPostContact } = require("../controllers/form.controller");
const validationRules = require("../validator/validator.controller");

router.post("/contact", validationRules , renderPostContact )

module.exports = router