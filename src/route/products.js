const express = require("express");
const router = express.Router();

const ProductController = require("../app/controllers/ProductController");

router.get("/", ProductController.index);

router.post("/store", ProductController.store);

module.exports = router;
