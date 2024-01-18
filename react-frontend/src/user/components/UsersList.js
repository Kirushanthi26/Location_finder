import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UsersList = (props) => {
  if (props.items.length === 0) { //1
    return (
      <div className="center">
        <Card>
        <h2>No User Found.</h2>
        </Card>
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
