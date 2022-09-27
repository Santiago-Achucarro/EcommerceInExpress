
const auth = (req, res, next) => {
    if (req.session.user) {
      console.log(req.session.user)
      next()
    } else {
      console.log(req)
      res.redirect("/noAuth")
  }
  }


module.exports = auth