const { v4: uuidv4 } = require("uuid");
const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");

const getCoordsForAddress = require("../util/location");
const Place = require("../models/place");

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

const getPlaceById = (req, res, next) => {
  const placeID = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeID;
  });

  if (!place) {
    //return res.status(404).json({message: "Could not find a place for the provided id."})
    const error = new HttpError(
      "Could not find a place for the provided id.",
      404
    );
    throw error;
  }

  res.json({ place });
};

const getPlacesByUserId = (req, res, next) => {
  const userID = req.params.uid;
  const places = DUMMY_PLACES.filter((p) => {
    return p.creator === userID;
  });

  if (!places || places.length === 0) {
    //return res.status(404).json({message: "Could not find a place for the provided user id."})
    return next(
      new HttpError("Could not find a place for the provided user id.", 404)
    );
  }

  res.json({ places });
};

const createPlace = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new HttpError("invalid input", 422));
  }

  //short form of ==> const title = req.body.title
  const { title, description, address, creator } = req.body;

  let coordinates;
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (error) {
    return next(error);
  }

  const createdPlace = new Place({
    title: title,
    description: description,
    location: coordinates,
    address: address,
    image:
      "https://images.unsplash.com/photo-1668342482782-582a821eaa59?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    creator: creator,
  });

  //DUMMY_PLACES.push(createdPlace);
  try {
    await createdPlace.save();
  } catch (error) {
    const err = new HttpError("creating place failed, please try again", 500);
    return next(err);
  }

  res.status(201).json({ place: createdPlace });
};

const updatePlaceByPlaceId = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    throw new HttpError("invalid input", 422);
  }

  const { title, description } = req.body;
  const placeID = req.params.pid;

  const updatePlace = { ...DUMMY_PLACES.find((p) => p.id === placeID) };
  const placeIndex = DUMMY_PLACES.findIndex((p) => p.id === placeID);
  updatePlace.title = title;
  updatePlace.description = description;

  DUMMY_PLACES[placeIndex] = updatePlace;

  res.status(200).json({ place: updatePlace });
};

const deletePlace = (req, res, next) => {
  const placeID = req.params.pid;

  if (!DUMMY_PLACES.find((p) => p.id === placeID)) {
    throw new HttpError("could not find a place for that id", 404);
  }

  DUMMY_PLACES = DUMMY_PLACES.filter((p) => p.id !== placeID); //keep unmatch place id

  res.status(200).json({ message: "place deleted successfully" });
};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlaceByPlaceId = updatePlaceByPlaceId;
exports.deletePlace = deletePlace;
