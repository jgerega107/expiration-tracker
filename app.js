const express = require("express");
const app = express();
const static = express.static(__dirname + "/public");
const exphbs = require("express-handlebars");
app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
const configRoutes = require("./routes");
configRoutes(app);

app.listen(3000, () => {
  console.log("Routes live on http://localhost:3000");
});
