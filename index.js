const express = require("express");
var morgan = require("morgan");
const app = express();
const port = 3005;

app.use(morgan("combined"));

app.get("/main", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
