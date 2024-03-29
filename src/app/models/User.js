const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
  email: { type: String },
  password: { type: String },
  role: { type: Number },
});

module.exports = mongoose.model("User", User);
