import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";

const UsersList = (props) => {
  if (props.items.length === 0) { //1
    return (
      <div className="center">
        <h2>No User Found.</h2>
      </div>
    );
  }

  return (
    <ul className="users-list">
        {/* 2 - if we have users array obj */}
      {props.items.map((user) => ( 
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
