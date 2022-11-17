import React from "react";
import { Link } from "react-router-dom";

function Card5(props) {

  return (

      <div className="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0">
        <Link className="tile-link" to="/category-1">
          {" "}
        </Link>
        <img className="bg-image" src={props.imgUrl} alt="CardImage" />
        <div className="card-body overlay-content">
          <h6 className="card-title text-shadow text-uppercase">
            {props.name}
          </h6>
          <p className="card-text text-sm">{props.description}</p>
        </div>
      </div>
  );
}

export default Card5;
