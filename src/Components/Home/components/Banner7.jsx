import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

function Banner7() {
    return(
        <section>
        <div className="container-fluid px-0">
        <Swiper  slidesPerView={12}
        breakpoints={{
        0: { slidesPerView: 4},
        500: { slidesPerView: 4.5},
        750: { slidesPerView: 6},
        900: {sliderPerView: 12}
      }}
          loop={true}>
              <SwiperSlide><Link to="#"><img className="img-fluid hover-scale" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/instagram/instagram-1.jpg" alt=" "/></Link></SwiperSlide>
              <SwiperSlide><Link to="#"><img className="img-fluid hover-scale" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/instagram/instagram-2.jpg" alt=" "/></Link></SwiperSlide>
              <SwiperSlide><Link to="#"><img className="img-fluid hover-scale" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/instagram/instagram-3.jpg" alt=" "/></Link></SwiperSlide>
              <SwiperSlide><Link to="#"><img className="img-fluid hover-scale" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/instagram/instagram-4.jpg" alt=" "/></Link></SwiperSlide>
              <SwiperSlide><Link to="#"><img className="img-fluid hover-scale" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/instagram/instagram-5.jpg" alt=" "/></Link></SwiperSlide>
              <SwiperSlide><Link to="#"><img className="img-fluid hover-scale" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/instagram/instagram-6.jpg" alt=" "/></Link></SwiperSlide>
              <SwiperSlide><Link to="#"><img className="img-fluid hover-scale" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/instagram/instagram-7.jpg" alt=" "/></Link></SwiperSlide>
              <SwiperSlide><Link to="#"><img className="img-fluid hover-scale" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/instagram/instagram-8.jpg" alt=" "/></Link></SwiperSlide>
              <SwiperSlide><Link to="#"><img className="img-fluid hover-scale" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/instagram/instagram-9.jpg" alt=" "/></Link></SwiperSlide>
              <SwiperSlide><Link to="#"><img className="img-fluid hover-scale" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/instagram/instagram-10.jpg" alt=" "/></Link></SwiperSlide>
              <SwiperSlide><Link to="#"><img className="img-fluid hover-scale" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/instagram/instagram-11.jpg" alt=" "/></Link></SwiperSlide>
              <SwiperSlide><Link to="#"><img className="img-fluid hover-scale" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/instagram/instagram-12.jpg" alt=" "/></Link></SwiperSlide>
              <SwiperSlide><Link to="#"><img className="img-fluid hover-scale" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/instagram/instagram-13.jpg" alt=" "/></Link></SwiperSlide>
              <SwiperSlide><Link to="#"><img className="img-fluid hover-scale" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/instagram/instagram-14.jpg" alt=" "/></Link></SwiperSlide>
          </Swiper>
        </div>
      </section>
    );
}

export default Banner7;