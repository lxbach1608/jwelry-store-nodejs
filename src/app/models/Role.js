const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Role = new Schema({
  role: { type: Number },
  desc: { type: String },
});

module.exports = mongoose.model("Role", Role);
