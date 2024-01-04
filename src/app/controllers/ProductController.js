const ProductSchema = require("../models/Product");

class ProductController {
  // [GET] /
  async index(req, res) {
    const instance = await ProductSchema.find({});
    res.json({ data: instance });
  }

  // [GET] /products/create

  // [POST] /products/store
  store(req, res, next) {
    console.log(req.body);

    const product = new ProductSchema(req.body);
    product.save();

    res.json("saved");
  }
}

module.exports = new ProductController();
