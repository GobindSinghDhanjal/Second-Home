import React from "react";
import { places } from "../../../shared/data";
import Card1 from "../../subComponents/Card1";

function Banner3() {
  return (
    <section className="py-6 bg-gray-100">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-8">
            <p className="subtitle text-secondary">
              Hurry up, these are expiring soon.{" "}
            </p>
            <h2>Last minute deals</h2>
          </div>
          <div className="col-md-4 d-lg-flex align-items-center justify-content-end">
            <a className="text-muted text-sm" href="/category-1">
              See all deals<i className="fas fa-angle-double-right ms-2"></i>
            </a>
          </div>
        </div>
        {/* <!-- Slider main container--> */}
        <div
          className="swiper-container swiper-container-mx-negative swiper-init pt-3"
          data-swiper='{"slidesPerView":4,"spaceBetween":20,"loop":true,"roundLengths":true,"breakpoints":{"1200":{"slidesPerView":3},"991":{"slidesPerView":2},"565":{"slidesPerView":1}},"pagination":{"el":".swiper-pagination","clickable":true,"dynamicBullets":true}}'
        >
          {/* <!-- Additional required wrapper--> */}
          <div className="swiper-wrapper pb-5">
            {/* <!-- Slides--> */}

            {places.map((place, i) => {
              return (
                <div className="swiper-slide h-auto px-2">
                  {/* <!-- place item--> */}
                  <div
                    className="w-100 h-100 hover-animate"
                    data-marker-id="59c0c8e3a31e62979bf147c9"
                  >
                    <Card1
                      key={i}
                      name={place.name}
                      title={place.title}
                      placeImg={place.placeImg}
                      profileImg={place.profileImg}
                      type={place.type}
                      price={place.price}
                      rating={place.rating}
                    />
                  </div>
                </div>
              );
            })}
            
          </div>
          {/* <!-- If we need pagination--> */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Banner3;
