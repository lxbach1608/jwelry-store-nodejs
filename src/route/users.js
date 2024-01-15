const express = require("express");
const router = express.Router();

const UserController = require("../app/controllers/UserController");

router.post("/user", UserController.index);

router.put("/information/:email/update", UserController.updateInformation);

module.exports = router;
