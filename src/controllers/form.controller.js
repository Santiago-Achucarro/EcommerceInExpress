const controller = {};
const transport  = require("../validator/transport.controller");

controller.RenderPostContact = async (req,res) => {
    
  const {name,number,email} = req.body
  
      const emailMsg = {
        to:"serviciodecontacto@enterprise.com",
        from: email,
        subject: "Solicitud De Contacto",
        html: `Contacto de ${name} con numero ${number} y email ${email}`
      }
      
      const sendMail = await transport.sendMail(emailMsg);
      if(sendMail.rejected.length){
        req.app.locals.sendMailStatus = "no se envio"
      }else{
        req.app.locals.sendMailStatus = "se envio"
      }
      res.redirect("/")
    
  }



module.exports = controller