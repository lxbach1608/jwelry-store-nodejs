const ProductSchema = require("../models/Product");

class ProductController {
  // [GET] /
  async index(req, res) {
    const instance = await ProductSchema.find({});

    const data = instance.filter((product, index, self) => {
      return index === self.findIndex((o) => o["slug"] === product["slug"]);
    });

    res.json({ data });
  }

  // [GET] /product/:slug
  async detail(req, res) {
    const instance = await ProductSchema.findOne({ slug: req.params.slug });

    res.json({ data: instance });
  }

  // [POST] /products/store
  store(req, res, next) {
    console.log(req.body);

    const product = new ProductSchema(req.body);
    product.save();

    res.json("saved");
  }
}

module.exports = new ProductController();
