const express = require("express");
const app = express();
const path = require("path");
var morgan = require("morgan");
const handlebars = require("express-handlebars");
const port = 3005;

const route = require("./route");

// config static files
app.use(express.static(path.join(__dirname, "public")));

// HTTP Logger
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
