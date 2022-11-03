import React from "react";
import Rating from "./Rating";

function Card3(props) {
  return (
    <div
      className="col-xl-3 col-md-4 col-sm-6 mb-5"
      data-marker-id="59c0c8e33b1527bfe2abaf92"
    >
      <div className="card hover-animate h-100 border-0 shadow">
        <div className="card-img-top overflow-hidden">
          <a href="user-booking-detail.html">
            <img className="img-fluid" src={props.imageUrl} alt={props.title} />
          </a>
        </div>
        <div className="card-body d-flex align-items-center">
          <div className="w-100">
            <p className="subtitle fw-normal text-sm mb-2">{props.date}</p>
            <h6 className="card-title">
              <a
                className="text-decoration-none text-dark"
                href="user-booking-detail.html"
              >
                {props.title}
              </a>
            </h6>
            <div className="d-flex card-subtitle">
              <p className="flex-grow-1 mb-0 text-muted text-sm">
                {props.type}
              </p>
              <p className="flex-shrink-1 mb-0 card-stars text-xs text-end">
              <Rating rating={props.rating} class1="fa fa-star text-warning" class2="fa fa-star text-gray-300" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card3;
