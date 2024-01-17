const express = require("express");

const placesController = require("../controller/places-controller")

const router = express.Router();


router.get("/:pid", placesController.getPlaceById);

router.get("/user/:uid", placesController.getPlacesByUserId);

router.post("/", placesController.createPlace)

router.patch("/:pid", placesController.updatePlaceByPlaceId)

router.delete("/:pid", placesController.deletePlace)

module.exports = router;
