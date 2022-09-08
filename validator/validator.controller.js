const validator = require("express-validator")
const { body, validationResult } = validator
 
const validationRules = [
    body("name")
        .notEmpty().withMessage("Campo Obligatorio"),
    body("number")
        .isMobilePhone().withMessage("Ingrese un Numero de Celular")
        .isLength({ min:10, max:10}).withMessage("Faltan Numeros"),
    body("email")
        .notEmpty().withMessage("Campo Obligatorio"),

(req, res, next ) => {
    const errors = validationResult(req);
        if(!errors.isEmpty()){
            const formData = req.body
            const arrWarnings = errors.array();
            console.log(arrWarnings);
          
            res.render("contact", { arrWarnings, formData })
          } else return next()
}
]



module.exports = validationRules