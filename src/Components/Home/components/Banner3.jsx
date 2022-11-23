import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card1 from "../../subComponents/Card1";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import Card1Group from "../../subComponents/Card1Group";

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
        <Card1Group/>
      </div>
    </section>
  );
}

export default Banner3;
