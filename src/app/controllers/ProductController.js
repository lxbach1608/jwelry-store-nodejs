class ProductController {
  index(req, res) {
    res.json("123");
  }
}

module.exports = new ProductController();
