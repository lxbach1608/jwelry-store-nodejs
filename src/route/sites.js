const express = require("express");
const router = express.Router();
const jwt = require("../app/middlewares/JWTMiddleware");

const SiteController = require("../app/controllers/SiteController");

router.get("/checkExistCookie", jwt.checkExistCookie);
router.get("/logout", jwt.logout);
// router.get("/", SiteController.home);
// router.get("/login", SiteController.login);
// router.get("/profile", SiteController.profile);

router.post("/login", SiteController.login);

router.get("/colors", SiteController.getColors);
router.get("/sizes", SiteController.getSizes);

router.post("/color", SiteController.storeColor);
router.post("/size", SiteController.storeSize);

module.exports = router;
