const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const usersController = require("../controller/users-controller");

router.get("/", usersController.getAllUsers);

router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersController.createNewUser
);

router.post(
  "/login",
  [
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersController.loginUser
);

module.exports = router;
