const productRouter = require("./products");
const CategoryRouter = require("./categories");
const SiteRouter = require("./sites");
const UserRouter = require("./users");

function route(app) {
  app.use("/products", productRouter);
  app.use("/categories", CategoryRouter);
  app.use("/users", UserRouter);
  app.use("/sites", SiteRouter);
  app.use("/", SiteRouter);
}

module.exports = route;
