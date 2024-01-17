const express = require("express");

const router = express.Router();

const usersController = require("../controller/users-controller");

router.get("/", usersController.getAllUsers);

router.post("/signup", usersController.createNewUser)

router.post("/login", usersController.loginUser )

module.exports = router;
