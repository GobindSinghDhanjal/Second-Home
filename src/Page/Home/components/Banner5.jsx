import React from "react";

function Banner5() {
    return(
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
              <div className="swiper-slide p-4">
                <div className="testimonial card rounded-3 shadow border-0">
                  <div className="testimonial-avatar"><img className="avatar avatar-lg p-1" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-3.jpg" alt="..."/></div>
                  <div className="text">
                    <div className="testimonial-quote"><i className="fas fa-quote-right"></i></div>
                    <p className="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
                  </div>
                </div>
              </div>
              <div className="swiper-slide p-4">
                <div className="testimonial card rounded-3 shadow border-0">
                  <div className="testimonial-avatar"><img className="avatar avatar-lg p-1" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-3.jpg" alt="..."/></div>
                  <div className="text">
                    <div className="testimonial-quote"><i className="fas fa-quote-right"></i></div>
                    <p className="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
                  </div>
                </div>
              </div>
              <div className="swiper-slide p-4">
                <div className="testimonial card rounded-3 shadow border-0">
                  <div className="testimonial-avatar"><img className="avatar avatar-lg p-1" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-3.jpg" alt="..."/></div>
                  <div className="text">
                    <div className="testimonial-quote"><i className="fas fa-quote-right"></i></div>
                    <p className="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
                  </div>
                </div>
              </div>
              <div className="swiper-slide p-4">
                <div className="testimonial card rounded-3 shadow border-0">
                  <div className="testimonial-avatar"><img className="avatar avatar-lg p-1" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-3.jpg" alt="..."/></div>
                  <div className="text">
                    <div className="testimonial-quote"><i className="fas fa-quote-right"></i></div>
                    <p className="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
                  </div>
                </div>
              </div>
              <div className="swiper-slide p-4">
                <div className="testimonial card rounded-3 shadow border-0">
                  <div className="testimonial-avatar"><img className="avatar avatar-lg p-1" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-3.jpg" alt="..."/></div>
                  <div className="text">
                    <div className="testimonial-quote"><i className="fas fa-quote-right"></i></div>
                    <p className="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
                  </div>
                </div>
              </div>
              <div className="swiper-slide p-4">
                <div className="testimonial card rounded-3 shadow border-0">
                  <div className="testimonial-avatar"><img className="avatar avatar-lg p-1" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-3.jpg" alt="..."/></div>
                  <div className="text">
                    <div className="testimonial-quote"><i className="fas fa-quote-right"></i></div>
                    <p className="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination">     </div>
          </div>
        </div>
      </section>
    );
}

export default Banner5;