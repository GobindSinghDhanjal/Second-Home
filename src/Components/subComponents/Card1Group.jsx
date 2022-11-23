import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card1 from "./Card1";

function Card1Group() {

    const homes = useSelector((state) => state.homes.homes);

    return(
        <Swiper
        loop={true}
        className="pb-2"
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 30 },
          500: { slidesPerView: 1.3, spaceBetween: 30 },
          750: { slidesPerView: 2, spaceBetween: 30 },
          900: { sliderPerView: 3.5, spaceBetween: 30 },
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
                    nextUrl="/detail-room"
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
    )
}

export default Card1Group;