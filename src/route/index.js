const productRouter = require("./products");
const CategoryRouter = require("./categories");

function route(app) {
  app.use("/products", productRouter);
  app.use("/categories", CategoryRouter);
}

module.exports = route;
