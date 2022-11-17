import React from "react";
import Card2 from "../../subComponents/Card2";
import { listings } from "../../../shared/data";
import { Swiper, SwiperSlide } from "swiper/react";

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
        <Swiper
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            500: { slidesPerView: 1, spaceBetween: 20 },
            750: { slidesPerView: 3, spaceBetween: 20 },
            900: { sliderPerView: 5.5, spaceBetween: 20 },
          }}
          centeredSlides
          centeredSlidesBounds
          slidesPerView={5.5}
        >
    
              {/* <!-- Slides--> */}

              {listings.map((listing,i) => {
                return (
                  <SwiperSlide key={i}>
                <div
                  key={i}
                  className="h-auto px-2"
                  style={{
                    width: "250px"
                  }}
                >
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
                  </div>
                  </SwiperSlide>
                );
              })}
     
        </Swiper>
      </div>
    </section>
  );
}

export default Section2;
