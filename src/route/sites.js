const express = require("express");
const router = express.Router();

const SiteController = require("../app/controllers/SiteController");

router.get("/colors", SiteController.getColors);
router.get("/sizes", SiteController.getSizes);

router.post("/color", SiteController.storeColor);
router.post("/size", SiteController.storeSize);

module.exports = router;
