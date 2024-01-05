const ProductSchema = require("../models/Product");

class ProductController {
  // [GET] /
  async index(req, res) {
    const instance = await ProductSchema.find({});

    const data = instance.filter((product, index, self) => {
      return (
        index === self.findIndex((o) => o["category"] === product["category"])
      );
    });

    res.json({ data });
  }

  // [GET] /products/:slug
  async detail(req, res) {
    const instance = await ProductSchema.findOne({ slug: req.params.slug });

    res.json({ data: instance });
  }

  // [GET] /products/categories/:slug
  async productByCategory(req, res) {
    const instance = await ProductSchema.aggregate([
      { $match: { category: req.params.slug } },
      { $group: { _id: "$slug", doc: { $first: "$$ROOT" } } },
    ]);

    const data = instance.map((item) => {
      return { ...item.doc, category: item.doc.category.replace("-", " ") };
    });

    res.json({ data });
  }

  // [POST] /products/store
  store(req, res, next) {
    const product = new ProductSchema(req.body);
    product.save();

    res.json("saved");
  }
}

module.exports = new ProductController();
