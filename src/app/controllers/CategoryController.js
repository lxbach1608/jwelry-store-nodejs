const Category = require("../models/Category");

class CategoryController {
  async index(req, res) {
    const instances = await Category.find();

    let data = [];

    instances.forEach((item) => {
      let child = [];

      if (item.parentId !== null) return;

      instances.forEach((category) => {
        if (item._doc._id.toHexString() === category.parentId) {
          child.push({
            name: category.name,
            slug: category._doc.slug,
            children: null,
          });
        }
      });

      data.push({
        name: item._doc.name,
        slug: item._doc.slug,
        children: child.length > 0 ? child : null,
      });
    });

    res.json({ data });
  }
}

module.exports = new CategoryController();
