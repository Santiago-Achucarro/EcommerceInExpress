const validator = require("express-validator")
const { body, validationResult } = validator
 
const validationRules = [
    body("name","Campo Nombre Obligatorio")
        .notEmpty(),
    body("number","Campo Celular obligatorio")
        .isLength({ min:10, max:10}),
    body("email","Ingrese un email valido")
        .isEmail()
        .exists(),

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