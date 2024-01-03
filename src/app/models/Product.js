const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Product = new Schema({
  name: { type: String },
  price: { type: Number },
  size: { type: Number },
  color: { type: Number },
  category: { type: Number },
});

module.exports = mongoose.model("Product", Product);
