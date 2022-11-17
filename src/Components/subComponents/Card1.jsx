import React from "react";
import Rating from "./Rating";
import {Link} from "react-router-dom";

function Card1(props) {

  const numberFormat = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits:0,
    maximumFractionDigits: 0,
  }).format(value);

  const url=`${props.nextUrl}?title=${props.title}`;


  return (

        <div className="card h-100 border-0 shadow" >
          <div className="card-img-top overflow-hidden gradient-overlay">
            {" "}
            <img
              className="img-fluid"
              src={props.placeImg}
              alt={props.title}
            />
            {/* <a className="tile-link" href={url}></a> */}
            <Link to={url}></Link>
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
                className="card-fav-icon position-relative z-index-40" href=" "
              >
                <i className="fa fa-heart" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="card-body d-flex align-items-center" >
            <div className="w-100">
              <h6 className="card-title" style={{minHeight: "45px"}}>
 
                <Link className="text-decoration-none text-dark" to={url}> {props.title}</Link>
 
              </h6>
              <div className="d-flex card-subtitle mb-3">
                <p className="flex-grow-1 mb-0 text-muted text-sm">
                  {props.type}
                </p>
                <div className="flex-shrink-1 mb-0 card-stars text-xs text-end">
                
                <Rating key={props.id} rating={props.rating} class1="fa fa-star text-warning" class2="fa fa-star text-gray-300"/>
                </div>
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
