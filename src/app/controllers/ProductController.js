const Product = require("../models/Product");

class ProductController {
  async index(req, res) {
    const instance = await Product.find({});
    res.json({ data: instance });
  }
}

module.exports = new ProductController();
