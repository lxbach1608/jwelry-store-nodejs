const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Size = new Schema(
  {
    _id: { type: Number },
    sizeName: { type: String },
  },
  {
    _id: false,
  }
);

module.exports = mongoose.model("Size", Size);
