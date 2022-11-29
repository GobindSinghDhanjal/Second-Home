import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { guides } from "../../../shared/data";
import Card5 from "../../subComponents/Card5";

function Banner2() {
    return(
        <section className="py-6">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8">
              <p className="subtitle text-primary">Stay and eat like a local</p>
              <h2>Our guides</h2>
            </div>
            <div className="col-md-4 d-lg-flex align-items-center justify-content-end"><Link className="text-muted text-sm" to="/category-1">
                 See all guides<i className="fas fa-angle-double-right ms-2"></i></Link></div>
          </div>

          <Swiper
         loop={true}

         breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 20},
        600: { slidesPerView: 2.2, spaceBetween: 20},
        940: {sliderPerView: 2.9, spaceBetween: 20},
        1100: {sliderPerView: 3.5, spaceBetween: 20},
      }}
      centeredSlides
      centeredSlidesBounds
      slidesPerView={4.5}
      spaceBetween={10}

        >

              {/* <!-- Slides--> */}

              {
                guides.map((guide,i)=>{
                  return(
                    <SwiperSlide key={i}>
                <div
                  key={i}
                  className="h-auto px-2"
                  style={{width: "250px", margin:"auto"}}
                >
                    <Card5 name={guide.name} imgUrl={guide.imgUrl} description={guide.description}/>
                    </div>
                    </SwiperSlide>
                  )
                })
              }
     
          </Swiper>
        </div>
      </section>
    );
}

export default Banner2;