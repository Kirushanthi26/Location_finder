const { v4: uuidv4 } = require("uuid");
const HttpError = require("../models/http-error");

let DUMMY_PLACES = [
  {
    id: "p1",
    title: "Lotus Tower",
    description:
      "Lotus Tower located in Colombo, Sri Lanka. It has been called a symbolic landmark of Sri Lanka. ",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/61/14/af/caption.jpg?w=1200&h=1200&s=1",
    address: "AC6, Colombo 01000",
    location: {
      lat: 6.9273044588293065,
      lng: 79.8583383153592,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Lotus Tower",
    description:
      "Lotus Tower located in Colombo, Sri Lanka. It has been called a symbolic landmark of Sri Lanka. ",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/61/14/af/caption.jpg?w=1200&h=1200&s=1",
    address: "AC6, Colombo 01000",
    location: {
      lat: 6.9273044588293065,
      lng: 79.8583383153592,
    },
    creator: "u2",
  },
];

const getAllUsers = (req, res, next) => {
  res.json({ DUMMY_PLACES });

  if (DUMMY_PLACES.length === 0) {
    return next(new HttpError("could not find users", 404))
  }
};

const createNewUser = (req, res, next) => {
    
}

const loginUser = (req, res, next) => {

}

exports.getAllUsers = getAllUsers;
exports.createNewUser = createNewUser
exports.loginUser = loginUser
