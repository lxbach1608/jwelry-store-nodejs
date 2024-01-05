const productRouter = require("./products");
const CategoryRouter = require("./categories");
const SiteRouter = require("./sites");

function route(app) {
  app.use("/products", productRouter);
  app.use("/categories", CategoryRouter);
  app.use("/sites", SiteRouter);
}

module.exports = route;
