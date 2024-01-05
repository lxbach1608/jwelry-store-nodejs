const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Color = new Schema(
  {
    _id: { type: Number },
    colorName: { type: String },
  },
  {
    _id: false,
  }
);

module.exports = mongoose.model("Color", Color);
