import React from "react";

function Testimonial(props) {
  return (
    <div className="swiper-slide p-4">
      <div className="testimonial card rounded-3 shadow border-0">
        <div className="testimonial-avatar">
          <img
            className="avatar avatar-lg p-1"
            src={props.profileImg}
            alt="..."
          />
        </div>
        <div className="text">
          <div className="testimonial-quote">
            <i className="fas fa-quote-right"></i>
          </div>
          <p className="testimonial-text">
            {props.comment}
          </p>
          <strong>{props.name}</strong>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
