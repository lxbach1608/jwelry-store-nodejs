const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    _id: { type: Number },
    name: { type: String },
    desc: { type: String, default: "" },
    price: { type: Number },
    size: { type: Number },
    color: { type: Number },
    category: { type: Number, default: null },
    slug: { type: String, slug: "name" },
  },
  {
    _id: false,
    timestamps: true,
  }
);

// Add plugins
mongoose.plugin(slug);
ProductSchema.plugin(AutoIncrement);

module.exports = mongoose.model("Product", ProductSchema);
