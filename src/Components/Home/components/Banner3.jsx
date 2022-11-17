import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card1 from "../../subComponents/Card1";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

function Banner3() {
  const homeData = useSelector((state) => state.homes);
  const homes = useSelector((state) => state.homes.homes);

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
            <Link className="text-muted text-sm" to="/category-1">
              See all deals<i className="fas fa-angle-double-right ms-2"></i>
            </Link>
          </div>
        </div>
        {/* <!-- Slider main container--> */}
        <Swiper
         loop={true}

        className="pb-2"
         breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 30},
        500: { slidesPerView: 1.3, spaceBetween: 30},
        750: { slidesPerView: 2, spaceBetween: 30},
        900: {sliderPerView: 3.5, spaceBetween: 30}
      }}
      centeredSlides
      centeredSlidesBounds
      slidesPerView={3.5}

        >
          {homes.map((place, i) => {
            return (
              <SwiperSlide key={i}>
                <div
                  key={i}
                  className="swiper-slide h-auto px-2"
                  style={{
                    width: "344px",
                    marginRight: "20px",
                  }}
                >
                  {/* <!-- place item--> */}
                  <div
                    key={i}
                    className="w-100 h-100 hover-animate"
                    data-marker-id="59c0c8e3a31e62979bf147c9"
                  >
                    <Card1
                      key={i}
                      id={place._id}
                      name={place.name}
                      nextUrl="detail-room"
                      title={place.title}
                      placeImg={place.placeImg}
                      profileImg={place.profileImg}
                      type={place.type}
                      price={place.price}
                      rating={place.rating}
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Banner3;
