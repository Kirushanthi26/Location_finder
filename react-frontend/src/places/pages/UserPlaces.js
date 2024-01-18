import React from "react";
import PlaceList from "../components/PlaceList";
import {useParams} from "react-router-dom"

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
    creator:'u1'
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
    creator:'u2'
  },
];

//one user -> places list
const UserPlaces = () => {

    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
