const express = require("express");
const router = express.Router();

const UserController = require("../app/controllers/UserController");

router.post("/user", UserController.index);

// router.post("/user", UserController.store);

module.exports = router;
