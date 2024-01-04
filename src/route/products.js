const express = require("express");
const router = express.Router();

const ProductController = require("../app/controllers/ProductController");

router.post("/store", ProductController.store);

router.get("/:slug", ProductController.detail);
router.get("/categories/:slug", ProductController.productByCategory);
router.get("/", ProductController.index);

module.exports = router;
