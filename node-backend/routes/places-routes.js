const express = require("express");

const HttpError = require("../models/http-error")

const router = express.Router();

const DUMMY_PLACES = [
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

router.get("/:pid", (req, res, next) => {
  const placeID = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeID;
  });

  if (!place) {
    //return res.status(404).json({message: "Could not find a place for the provided id."})
    const error = new HttpError("Could not find a place for the provided id.", 404);
    throw error;
  }

  res.json({ place });
});

router.get("/user/:uid", (req, res, next) => {
  const userID = req.params.uid;
  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userID;
  });

  if (!place) {
    //return res.status(404).json({message: "Could not find a place for the provided user id."})
    return next(new HttpError("Could not find a place for the provided user id.", 404));
  }

  res.json({ place });
});

module.exports = router;
