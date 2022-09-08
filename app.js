require("./src/database/mongo");
const express = require("express");
const hbs = require("express-handlebars")
const port = 3000
const bodyParser = require('body-parser');
const path = require("path")

const app = express();
app.use(bodyParser.urlencoded({extended:false}))

app.engine('.hbs', hbs.engine({extname:".hbs"}));
app.set('view engine', '.hbs');
app.set('views', './src/views');

// Routes
app.use(require("./routes/app.routes"))
app.use(require("./routes/form.routes"))

// Static Folder
app.use(express.static(path.join(__dirname ,"src/public")))



app.listen(port,(err) => {
err? console.log(err.code)
:
console.log(`Server running on http://localhost:${port}`);
})