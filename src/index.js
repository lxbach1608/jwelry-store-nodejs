const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const path = require("path");
const handlebars = require("express-handlebars");
const port = 3005;
const db = require("./config/db");
const cookieParser = require("cookie-parser");
const JWTMiddleware = require("./app/middlewares/JWTMiddleware");

db.connect();

const route = require("./route");

// config static files
app.use(express.static(path.join(__dirname, "public")));

// HTTP Logger
app.use(morgan("combined"));

// cookies
app.use(cookieParser());

// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
