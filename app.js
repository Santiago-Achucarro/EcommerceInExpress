// const { response } = require("express");
const express = require("express");
const hbs = require("express-handlebars")
const port = 3000
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}))

app.engine('.hbs', hbs.engine({extname:".hbs"}));
app.set('view engine', '.hbs');
app.set('views', './views');

// Routes
app.use(require("./routes/app.routes"))

// Static Folder
app.use(express.static("public"))

app.listen(port,(err) => {
err? console.log(err.code)
:
console.log(`Server running on http://localhost:${port}`);
})