require('./src/database/mongo');
const express = require('express');
const hbs = require('express-handlebars')
const port = 3000
const bodyParser = require('body-parser');
const path = require('path')
const session = require("express-session")

const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(session({
    secret: process.env.pass_session,
    resave:false,
    saveUninitialized: true,
}))

// Config HBS Template
app.engine('hbs', hbs.engine({extname:"hbs"}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/src/views'));

// Routes
app.use(require('./src/routes/app.routes'))
app.use(require('./src/routes/form.routes'))
app.use(require('./src/routes/user.routes'))

// Static Folder
app.use(express.static(path.join(__dirname ,'src/public')))

// Handle Error 404
app.use(function(req, res) {
    res.status(404);
    res.render("notFound", {user:req.session.user});
});

// Init Process
app.listen(port,(err) => {
err? console.log(err.code)
:
console.log(`Server running on http://localhost:${port}`);
})
