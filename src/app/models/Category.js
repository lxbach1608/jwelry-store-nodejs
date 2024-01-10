const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Category = new Schema({
  name: { type: String },
  parentId: { type: String },
  promotion: { type: Number },
  slug: { type: String },
});

module.exports = mongoose.model("Category", Category);
