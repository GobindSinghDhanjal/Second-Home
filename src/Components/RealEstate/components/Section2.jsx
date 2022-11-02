import React from "react";
import Card2 from "../../subComponents/Card2";
import { listings } from "../../../shared/data";

function Section2() {
  return (
    <section className="py-6">
      <div className="container">
        <div className="row mb-lg-6">
          <div className="col-md-8">
            <p className="subtitle text-secondary">Find your home today</p>
            <h2 className="mb-md-0">Featured listings around you</h2>
          </div>
          <div className="col-md-4 d-md-flex align-items-center justify-content-end">
            <a className="text-muted text-sm" href="/category-1">
              See all featured listings
              <i className="fas fa-angle-double-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        {/* <!-- Slider main container--> */}
        <div className="swiper-container swiper-container-mx-negative items-slider-full px-lg-5 pt-3">
          {/* <!-- Additional required wrapper--> */}
          <div className="swiper-wrapper pb-5">
            {/* <!-- Slides--> */}

            {listings.map((listing) => {
              return (
                <Card2
                  title={listing.title}
                  type={listing.type}
                  bed={listing.bed}
                  area={listing.area}
                  location={listing.location}
                  price={listing.price}
                  washrooms={listing.washrooms}
                  placeImg={listing.placeImg}
                />
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

export default Section2;
