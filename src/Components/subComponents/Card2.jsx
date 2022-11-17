import React from "react";
import { Link } from "react-router-dom";

function Card2(props) {
  return (
    
      <div
        className="w-100 mb-4 mt-4 h-100 hover-animate"
        data-marker-id="59c0c8e33b1527bfe2abaf92"
      >
        <div className="card h-100 border-0 shadow">
          <div className="card-img-top overflow-hidden gradient-overlay">
            {" "}
            <img
              className="img-fluid"
              src={props.placeImg}
              alt="Modern, Well-Appointed Room"
            />
            <Link className="tile-link" to="/detail-room"></Link>
            <div className="card-img-overlay-top text-end">
              <Link
                className="card-fav-icon position-relative z-index-40"
                to="javascript: void();"
              >
                <i class="fa fa-heart" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div className="card-body d-flex align-items-center">
            <div className="w-100">
              <h6 className="card-title"style={{height:"55px"}}>
                <Link
                  className="text-decoration-none text-dark"
                  to="/detail-room"
          
                >
                  {props.title}
                </Link>
              </h6>
              <p className="text-sm text-secondary card-subtitle mb-2">
                <i className="fa fa-map-marker text-secondary opacity-4 me-1"></i>
                {props.location}
              </p>
              <p className="text-sm text-muted text-uppercase">{props.type}</p>
              <p className="card-text d-flex justify-content-between text-gray-800 text-sm">
                <span className="me-1">
                  <i className="fa fa-ruler-combined text-primary opacity-4 text-xs me-1"></i>
                  {props.area}
                  <sup>2</sup>{" "}
                </span>
                <span className="me-1">
                  <i className="fa fa-bed text-primary opacity-4 text-xs me-1"></i>
                  {props.bed}
                </span>
                <span className="me-1">
                  <i className="fa fa-bath text-primary opacity-4 text-xs me-1"></i>
                  {props.washrooms}
                </span>
                <span>
                  <i className="fa fa-tag text-primary opacity-4 text-xs me-1"></i>
                  ${props.price}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default Card2;
