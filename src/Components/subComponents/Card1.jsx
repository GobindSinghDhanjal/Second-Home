import React from "react";
import Rating from "./Rating";

function Card1(props) {

  const numberFormat = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits:0,
    maximumFractionDigits: 0,
  }).format(value);

  const url=`detail-room?title=${props.title}`;

  return (

        <div className="card h-100 border-0 shadow">
          <div className="card-img-top overflow-hidden gradient-overlay">
            {" "}
            <img
              className="img-fluid"
              src={props.placeImg}
              alt={props.title}
            />
            <a className="tile-link" href={url}></a>
            <div className="card-img-overlay-bottom z-index-20">
              <div className="d-flex text-white text-sm align-items-center">
                <img
                  className="avatar avatar-border-white flex-shrink-0 me-2"
                  src={props.profileImg}
                  alt={props.name}
                />
                <div>{props.name}</div>
              </div>
            </div>
            <div className="card-img-overlay-top text-end">
              <a
                className="card-fav-icon position-relative z-index-40"
                href="javascript: void();"
              >
                <i class="fa fa-heart" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="card-body d-flex align-items-center">
            <div className="w-100">
              <h6 className="card-title">
                <a
                  className="text-decoration-none text-dark"
                  href={url}
                >
                  {props.title}
                </a>
              </h6>
              <div className="d-flex card-subtitle mb-3">
                <p className="flex-grow-1 mb-0 text-muted text-sm">
                  {props.type}
                </p>
                <p className="flex-shrink-1 mb-0 card-stars text-xs text-end">
                <Rating rating={props.rating} class1="fa fa-star text-warning" class2="fa fa-star text-gray-300"/>
                </p>
              </div>
              <p className="card-text text-muted">
                <span className="h4 text-primary">{numberFormat(props.price)}</span>&nbsp; per night
              </p>
            </div>
          </div>
        </div>
  );
}

export default Card1;
