import React from "react";
import { testimonials } from "../../../shared/data";
import Testimonial from "../../subComponents/Testimonial";

function Banner5() {
  return (
    <section className="py-7">
      <div className="container">
        <div className="text-center">
          <p className="subtitle text-primary">Testimonials</p>
          <h2 className="mb-5">Our dear customers said about us</h2>
        </div>
        {/* <!-- Slider main container--> */}
        <div className="swiper-container testimonials-slider testimonials">
          {/* <!-- Additional required wrapper--> */}
          <div className="swiper-wrapper pt-2 pb-5">
            {/* <!-- Slides--> */}
            {testimonials.map((testimonial, i) => {
              return (
                <Testimonial
                  key={i}
                  name={testimonial.name}
                  comment={testimonial.comment}
                  profileImg={testimonial.profileImg}
                />
              );
            })}
          </div>
          <div className="swiper-pagination"> </div>
        </div>
      </div>
    </section>
  );
}

export default Banner5;
