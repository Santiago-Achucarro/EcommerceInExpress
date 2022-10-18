const controller = {};
const transport  = require("../validator/transport.controller");

controller.renderPostContact = async (req,res) => {
    
  const {name,number,email} = req.body
  
      const emailMsg = {
        to:"serviciodecontacto@enterprise.com",
        from: email,
        subject: "Solicitud De Contacto",
        html: `Hola que tal, mi nombre es ${name}, estoy buscando contactarme con usted, este es mi numero ${number} y este mi email ${email}`
      }
      
      const sendMail = await transport.sendMail(emailMsg);
      if(sendMail.rejected.length){
        req.app.locals.MailDenied = "Ocurrior un error con el contacto"
      }else{
        req.app.locals.MailAccepted = "Formulario Enviado"
      }
      res.redirect("/contact")
    
  }



module.exports = controller