// const { response } = require("express");
const express = require("express");
const hbs = require("express-handlebars")
const port = 3000


const app = express();
app.use(express.static("public"))

app.engine('.hbs', hbs.engine({extname:".hbs"}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get("/", (req, res) => {
    res.render(`home`)
})

app.get("/tienda", (req, res) => {
    res.render(`tienda`)
})

app.get("/contacto", (req,res) => {
    res.render(`contacto.hbs`)
})


app.listen(port,(err) => {
err? console.log(err.code)
:
console.log(`Server running on http://localhost:${port}`);
})