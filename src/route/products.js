const express = require("express");
const router = express.Router();

const ProductController = require("../app/controllers/ProductController");

router.use("/", ProductController.index);

module.exports = router;
