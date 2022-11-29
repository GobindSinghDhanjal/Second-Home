import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card1 from "./Card1";
import axios from "axios";
import { backendUrl } from "../../shared/backendUrl";

function Card1Group() {

    // const homes = useSelector((state) => state.homes.homes);

    const [homes, setHomes] = useState([]);

    useEffect(()=>{

      axios
      .get(backendUrl+"/featuredHomes")
      .then((response) => {
        setHomes(response.data);
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(errorMsg);
      });
     
    },[])

    return(
        <Swiper
        loop={true}
        className="pb-2"
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 30 },
          550: { slidesPerView: 1.5, spaceBetween: 30 },
          950: { slidesPerView: 2.2, spaceBetween: 30 },
          1200: { sliderPerView: 2.8, spaceBetween: 30 },
        }}
        centeredSlides
        centeredSlidesBounds
        slidesPerView={3.3}
      >
        {homes.map((place, i) => {
          return (
            <SwiperSlide key={i}>
              <div
                key={i}
                className=" h-auto px-2"
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
                    monthwise_season_factor={place.monthwise_season_factor}
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