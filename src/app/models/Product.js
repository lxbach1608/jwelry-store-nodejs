const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Products = new Schema({
  name: { type: String },
  name: { type: String },
  price: { type: Number },
  size: { type: Number },
  color: { type: Number },
  category: { type: Number },
});

module.exports = mongoose.model("Product", Products);
