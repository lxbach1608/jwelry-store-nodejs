const mongoose = require("mongoose");

function connect() {
  mongoose
    .connect("mongodb://localhost:27017/jwelry-store-dev")
    .then(() => console.log("Connected!"))
    .catch(() => console.log("Connected failed !"));
}

module.exports = { connect };
