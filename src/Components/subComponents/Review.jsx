import React from "react";
import Rating from "./Rating";

function Review(props) {

  return (
    <div className="d-flex d-block d-sm-flex review">
      <div className="text-md-center flex-shrink-0 me-4 me-xl-5">
        <img
          className="d-block avatar avatar-xl p-2 mb-2"
          src={props.profileImg}
          alt={props.name}
        />
        <span className="text-uppercase text-muted text-sm">{props.date}</span>
      </div>
      <div>
        <h6 className="mt-2 mb-1">{props.name}</h6>
        <div className="mb-2">
          <Rating
            key={props.id}
            rating={props.rating}
            class1="fa fa-xs fa-star text-primary"
            class2="fa fa-xs fa-star text-gray-200"
          />
        </div>
        <p className="text-muted text-sm">{props.comment}</p>
      </div>
    </div>
  );
}

export default Review;
