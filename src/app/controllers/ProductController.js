const ProductSchema = require("../models/Product");
const CategorySchema = require("../models/Category");

class ProductController {
  // [GET] /
  async index(req, res) {
    const products = await ProductSchema.find({});
    const categories = await CategorySchema.find();

    let data = [];

    categories.forEach((category) => {
      if (category._doc.parentId === null) {
        return;
      }

      let newObj = [];

      products.forEach((product) => {
        if (product.category === category.slug) {
          newObj.push({
            ...product._doc,
            promotion: category.promotion,
          });
        }
      });

      data = [...data, ...newObj];
    });

    res.json({ data });
  }

  // [GET] /distinctProducts
  async distinctProducts(req, res) {
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
    const products = await ProductSchema.find({ slug: req.params.slug });
    const category = await CategorySchema.findOne({
      slug: products[0].category,
    });

    const data = products.map((product) => {
      return {
        ...product._doc,
        promotion: category.promotion,
      };
    });

    res.json({ data });
  }

  // [GET] /products/categories/:slug
  async productByCategory(req, res) {
    const instance = await ProductSchema.aggregate([
      { $match: { category: req.params.slug } },
      { $group: { _id: "$slug", doc: { $first: "$$ROOT" } } },
    ]);

    const categoryResult = await CategorySchema.findOne({
      slug: req.params.slug,
    });

    const data = instance.map((item) => {
      return {
        ...item.doc,
        category: item.doc.category.replace("-", " "),
        promotion: categoryResult.promotion,
      };
    });

    res.json({ data });
  }

  // [GET] /products/search?q

  async search(req, res) {
    const { q } = req.query;
    const instance = await ProductSchema.find({
      $or: [
        { name: { $regex: q, $options: "i" } },
        { slug: { $regex: q, $options: "i" } },
      ],
    });

    const slugs = [...new Set(instance.map((item) => item.slug))];

    let data = [];

    slugs.forEach((slug) => {
      let product = instance.find((item) => item.slug === slug);
      data = [...data, product];
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
