import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function VenueItem(props) {
  return (

      <div className="card h-100 border-0 shadow">
        <div
          className="card-img-top overflow-hidden dark-overlay bg-cover"
          style={{
            backgroundImage: `url(${props.imgUrl})`,
            minHeight: "200px",
          }}
        >
          <Link className="tile-link" to="/detail"></Link>
          <div className="card-img-overlay-bottom z-index-20">
            <h4 className="text-white text-shadow">{props.title}</h4>
            <p className="mb-2 text-xs">
              <Rating
                rating={props.rating}
                class1="fa fa-star text-warning"
                class2="fa fa-star text-gray-300"
              />
            </p>
          </div>
          <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
            <div className="badge badge-transparent badge-pill px-3 py-2">
              {props.type}
            </div>
            <Link
              className="card-fav-icon position-relative z-index-40"
              to="javascript: void();"
            >
              <svg className="svg-icon text-white">
                <use xlinkHref="#heart-1"> </use>
              </svg>
            </Link>
          </div>
        </div>
        <div className="card-body">
          <p className="text-sm text-muted mb-3"> {props.description}</p>
          <p className="text-sm text-muted text-uppercase mb-1">
            By{" "}
            <Link to="#" className="text-dark">
              {props.name}
            </Link>
          </p>
          <p className="text-sm mb-0">
            {props.moreTypes.map((type) => {
              return (
                <Link className="me-1" to="#">
                  {type}
                  {"  "}
                </Link>
              );
            })}
          </p>
        </div>
      </div>
  );
}

export default VenueItem;
