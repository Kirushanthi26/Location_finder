import React from "react";
import { Link } from "react-router-dom";
import "./UserItem.css";
import Avatar from "../../shared/components/UIElements/Avatar";

const UserItem = (props) => {
  return (
    // 5
    <li className="user-item">
      <div className="user-item__content">
        <Link to={`/${props.id}/places}`}> {/* 7 */}
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} /> {/* 6 */}
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default UserItem;
