const express = require("express");
const router = express.Router();

const CategoryController = require("../app/controllers/CategoryController");

router.use("/", CategoryController.index);

module.exports = router;
