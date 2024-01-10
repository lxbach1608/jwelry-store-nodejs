const express = require("express");
const router = express.Router();

const ProductController = require("../app/controllers/ProductController");

router.post("/store", ProductController.store);

router.get("/distinctProducts", ProductController.distinctProducts);
router.get("/categories/:slug", ProductController.productByCategory);
router.get("/:slug", ProductController.detail);
router.get("/", ProductController.index);

module.exports = router;
