import React from "react";

function BrandsSection() {
    return(
        <section class="py-6 bg-gray-100">
        <div class="container">
          <h5 class="text-center text-uppercase letter-spacing-3 mb-5">As seen on</h5>
          {/* <!-- Brands Slider--> */}
          <div class="swiper-container brands-slider">
            <div class="swiper-wrapper pb-5">
              {/* <!-- item--> */}
              <div class="swiper-slide h-auto d-flex align-items-center justify-content-center"><a href="#"><img class="img-fluid w-6rem opacity-5" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/brand/brand-1.svg" alt="Brand 1"/></a></div>
              {/* <!-- item--> */}
              <div class="swiper-slide h-auto d-flex align-items-center justify-content-center"><a href="#"><img class="img-fluid w-6rem opacity-5" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/brand/brand-2.svg" alt="Brand 2"/></a></div>
              {/* <!-- item--> */}
              <div class="swiper-slide h-auto d-flex align-items-center justify-content-center"><a href="#"><img class="img-fluid w-6rem opacity-5" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/brand/brand-3.svg" alt="Brand 3"/></a></div>
              {/* <!-- item--> */}
              <div class="swiper-slide h-auto d-flex align-items-center justify-content-center"><a href="#"><img class="img-fluid w-6rem opacity-5" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/brand/brand-4.svg" alt="Brand 4"/></a></div>
              {/* <!-- item--> */}
              <div class="swiper-slide h-auto d-flex align-items-center justify-content-center"><a href="#"><img class="img-fluid w-6rem opacity-5" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/brand/brand-5.svg" alt="Brand 5"/></a></div>
              {/* <!-- item--> */}
              <div class="swiper-slide h-auto d-flex align-items-center justify-content-center"><a href="#"><img class="img-fluid w-6rem opacity-5" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/brand/brand-6.svg" alt="Brand 6"/></a></div>
              {/* <!-- item--> */}
              <div class="swiper-slide h-auto d-flex align-items-center justify-content-center"><a href="#"><img class="img-fluid w-6rem opacity-5" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/brand/brand-1.svg" alt="Brand 1"/></a></div>
              {/* <!-- item--> */}
              <div class="swiper-slide h-auto d-flex align-items-center justify-content-center"><a href="#"><img class="img-fluid w-6rem opacity-5" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/brand/brand-2.svg" alt="Brand 2"/></a></div>
              {/* <!-- item--> */}
              <div class="swiper-slide h-auto d-flex align-items-center justify-content-center"><a href="#"><img class="img-fluid w-6rem opacity-5" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/brand/brand-3.svg" alt="Brand 3"/></a></div>
              {/* <!-- item--> */}
              <div class="swiper-slide h-auto d-flex align-items-center justify-content-center"><a href="#"><img class="img-fluid w-6rem opacity-5" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/brand/brand-4.svg" alt="Brand 4"/></a></div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default BrandsSection;