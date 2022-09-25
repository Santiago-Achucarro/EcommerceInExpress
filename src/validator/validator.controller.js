const validator = require("express-validator")
const { body, validationResult } = validator
 
const validationRules = [
    body("name")
        .notEmpty().withMessage("Campo Nombre Obligatorio"),
    body("number")
        .isLength({ min:10, max:10}).withMessage("Campo Celular obligatorio"),
    body("email")
        .notEmpty().withMessage("Campo Email Obligatorio"),

(req, res, next ) => {
    const errors = validationResult(req);
        if(!errors.isEmpty()){
            const formData = req.body
            const arrayErr = errors.array();
            res.render("contact", { arrayErr, formData, title:'Contact' })
          } else return next()
}
]



module.exports = validationRules