import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    //4 - dummy value
  const USERS = [
    {
      id: "u1",
      name: "kirushanthi",
      image:
        "https://images.unsplash.com/photo-1616766098946-e4fabb7d6da0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHwxfDB8fHww",

      places: 3
    },
  ];

  return (
    <>
      <UsersList items={USERS} /> {/* 3 - insert that compoent into users page*/}
    </>
  );
};

export default Users;
