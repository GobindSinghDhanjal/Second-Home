import React from "react";

function Banner2() {
    return(
        <section className="py-6">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8">
              <p className="subtitle text-primary">Stay and eat like a local</p>
              <h2>Our guides</h2>
            </div>
            <div className="col-md-4 d-lg-flex align-items-center justify-content-end"><a className="text-muted text-sm" href="category.html">
                 See all guides<i className="fas fa-angle-double-right ms-2"></i></a></div>
          </div>
          <div className="swiper-container guides-slider mx-n2 pt-3">
            {/* <!-- Additional required wrapper--> */}
            <div className="swiper-wrapper pb-5">
              {/* <!-- Slides--> */}
              <div className="swiper-slide h-auto px-2">
                <div className="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><a className="tile-link" href="category.html"></a><img className="bg-image" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/new-york.jpg" alt="Card image"/>
                  <div className="card-body overlay-content">
                    <h6 className="card-title text-shadow text-uppercase">New York</h6>
                    <p className="card-text text-sm">The big apple</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-auto px-2">
                <div className="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><a className="tile-link" href="category.html"></a><img className="bg-image" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/paris.jpg" alt="Card image"/>
                  <div className="card-body overlay-content">
                    <h6 className="card-title text-shadow text-uppercase">Paris</h6>
                    <p className="card-text text-sm">Artist capital of Europe</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-auto px-2">
                <div className="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><a className="tile-link" href="category.html"></a><img className="bg-image" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/barcelona.jpg" alt="Card image"/>
                  <div className="card-body overlay-content">
                    <h6 className="card-title text-shadow text-uppercase">Barcelona</h6>
                    <p className="card-text text-sm">Dalí, Gaudí, Barrio Gotico</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-auto px-2">
                <div className="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><a className="tile-link" href="category.html"></a><img className="bg-image" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/prague.jpg" alt="Card image"/>
                  <div className="card-body overlay-content">
                    <h6 className="card-title text-shadow text-uppercase">Prague</h6>
                    <p className="card-text text-sm">City of hundred towers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination d-md-none"> </div>
          </div>
        </div>
      </section>
    );
}

export default Banner2;