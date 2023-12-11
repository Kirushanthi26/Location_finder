import React, { useCallback } from "react";
import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators'

const NewPlace = () => {

  const titleInputHandler = useCallback((id, value, isValid) => {

  },[])
  const descriptionInputHandler = useCallback((id, value, isValid) => {

  },[])


  return (
    <form className="place-form">
      <Input
        id="title"
        type="text"
        label="Title"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={titleInputHandler}
      />
      <Input
        id="description"
        label="Description"
        element="textarea"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={descriptionInputHandler}
      />
    </form>
  );
};

export default NewPlace;
