const { v4: uuidv4 } = require('uuid');
const HttpError = require("../models/http-error")

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

const getPlaceByUserId = (req, res, next) => {
  const userID = req.params.uid;
  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userID;
  });

  if (!place) {
    //return res.status(404).json({message: "Could not find a place for the provided user id."})
    return next(
      new HttpError("Could not find a place for the provided user id.", 404)
    );
  }

  res.json({ place });
};

const createPlace = (req, res, next) => {
    //short form of ==> const title = req.body.title
    const {title, description, coordinates, address, creator} = req.body;
    const createdPlace = {
        id: uuidv4(),
        title: title,
        description:description,
        location: coordinates,
        address:address,
        creator:creator
    }

    DUMMY_PLACES.push(createdPlace)

    res.status(201).json({place: createdPlace})
}

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId
exports.createPlace = createPlace

