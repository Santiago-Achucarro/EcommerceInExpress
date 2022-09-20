const validator = require("express-validator")
const { body, validationResult } = validator
 
const validationRules = [
    body("name")
        .notEmpty().withMessage("Campo Obligatorio"),
    body("number")
        .isMobilePhone().isLength({ min:10, max:10}).withMessage("Ingrese un Numero de Celular"),
    body("email")
        .notEmpty().withMessage("Campo Obligatorio"),

(req, res, next ) => {
    const errors = validationResult(req);
        if(!errors.isEmpty()){
            const formData = req.body
            const arrayErr = errors.array();
            res.render("contact", { arrayErr, formData, title:'Contact', })
          } else return next()
}
]



module.exports = validationRules