import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import "./PlaceForm.css";
import { useForm } from "../../shared/hooks/form-hook.js";

const DUMMY_PLACES = [
  {
    id: 'p1',
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
    id: 'p2',
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

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: identifiedPlace.title,
        isValid: true
      },
      description: {
        value: identifiedPlace.description,
        isValid: true
      }
    },
    true
  );


  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };


  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Couldn't find place!</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        type="text"
        label="Title"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        label="Description"
        element="textarea"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>UPDATE PLACE</Button>
    </form>
  );
};

export default UpdatePlace;
