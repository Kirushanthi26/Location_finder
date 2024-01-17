const { v4: uuidv4 } = require("uuid");
const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");

let DUMMY_USERS = [
  {
    id: "u1",
    name: "kirushanthi",
    email: "kirushanthi@gmail.com",
    password: "kiru123",
  },
  {
    id: "u2",
    name: "vithya",
    email: "vithya@gmail.com",
    password: "vithya123",
  },
];

const getAllUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });

  if (DUMMY_USERS.length === 0) {
    return next(new HttpError("could not find users", 404));
  }
};

const createNewUser = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    throw new HttpError("invalid input", 422);
  }

  const { name, email, password } = req.body;

  const hasUser = DUMMY_USERS.find((u) => u.email === email);
  if (hasUser) {
    throw new HttpError("already registered, please Login", 401);
  }

  const signupUser = {
    id: uuidv4(),
    name,
    email,
    password,
  };

  DUMMY_USERS.push(signupUser);
  res.status(201).json({ user: signupUser });
};

const loginUser = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    throw new HttpError("invalid input", 422);
  }
  
  const { email, password } = req.body;

  const identifiedUser = DUMMY_USERS.find((u) => u.email === email);

  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpError("wrong credentials, please try again", 401);
  }

  res.json({ message: "Login successful" });
};

exports.getAllUsers = getAllUsers;
exports.createNewUser = createNewUser;
exports.loginUser = loginUser;
