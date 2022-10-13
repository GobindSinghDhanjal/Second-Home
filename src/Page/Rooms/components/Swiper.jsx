import React from "react";

function Swiper() {
    return(
        <div className="swiper-container home-slider multi-slider">
        {/* <!-- Additional required wrapper--> */}
        <div className="swiper-wrapper">
          {/* <!-- Slides--> */}
          <div className="swiper-slide bg-cover dark-overlay" style={{backgroundImage: `url("https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1493976040374-85c8e12f0c0e.jpg")`}}>
            <div className="container h-100">
              <div className="d-flex h-100 text-white overlay-content align-items-center" data-swiper-parallax="-500">
                <div className="w-100">
                  <div className="row">
                    <div className="col-lg-6">
                      <p className="subtitle text-white letter-spacing-3 mb-3 font-weight-light">Blue &amp; White</p>
                      <h2 className="display-3 fw-bold mb-3" style={{lineHeight : "1"}} >Japan</h2>
                      <p className="mb-5">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.</p><a className="btn btn-outline-light d-none d-sm-inline-block" href="#">Start exploring Japan <i className="fa fa-angle-right ms-2"></i></a>
                    </div>
                    <div className="col-lg-6 ps-lg-5 my-3 my-md-5 my-lg-0"><a className="d-flex text-reset text-decoration-none hover-animate mb-2 mb-md-5" href="#">
                        <div className="icon-rounded bg-white opacity-7 flex-shrink-0 me-4">
                          <svg className="svg-icon text-dark w-2rem h-2rem">
                            <use xlinkHref="#airplane-mode-1"> </use>
                          </svg>
                        </div>
                        <div>
                          <h5>Flights</h5>
                          <div className="badge badge-light">from $345</div>
                        </div></a><a className="d-flex text-reset text-decoration-none hover-animate mb-2 mb-md-5" href="#">
                        <div className="icon-rounded bg-white opacity-7 flex-shrink-0 me-4">
                          <svg className="svg-icon text-dark w-2rem h-2rem">
                            <use xlinkHref="#suitcase-1"> </use>
                          </svg>
                        </div>
                        <div>
                          <h5>Holidays</h5>
                          <div className="badge badge-light">from $1,245</div>
                        </div></a><a className="d-flex text-reset text-decoration-none hover-animate" href="#">
                        <div className="icon-rounded bg-white opacity-7 flex-shrink-0 me-4">
                          <svg className="svg-icon text-dark w-2rem h-2rem">
                            <use xlinkHref="#image-gallery-1"> </use>
                          </svg>
                        </div>
                        <div>
                          <h5>Guide &amp; gallery</h5>
                          <p>See more  </p>
                        </div></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide bg-cover dark-overlay" style={{backgroundImage: `url('https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1558114965-eeb97aa84c3b.jpg')`}}>
            <div className="container h-100">
              <div className="d-flex h-100 text-white overlay-content align-items-center" data-swiper-parallax="-500">
                <div className="w-100">
                  <div className="row">
                    <div className="col-12">
                      <h2 className="display-3 fw-bold mb-5" style={{lineHeight: "1"}}>Morocco</h2>
                      <p className="mb-5">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before.</p>
                    </div>
                  </div><a className="d-md-none btn btn-outline-light" href="#">Start exploring</a>
                  <div className="row">
                    {/* <!-- place item--> */}
                    <div className="d-none d-md-block col-md-4 mb-5" data-marker-id="">
                      <div className="card h-100 border-0 shadow-lg bg-dark hover-animate">
                        <div className="card-img-top overflow-hidden gradient-overlay"> <img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/fez.jpg" alt="Fez"/><a className="tile-link" href="detail-rooms.html"></a>
                          <div className="card-img-overlay-top text-end"><a className="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                              <svg className="svg-icon text-white">
                                <use xlinkHref="#heart-1"> </use>
                              </svg></a></div>
                        </div>
                        <div className="card-body d-flex align-items-center">
                          <div className="w-100">
                            <h6 className="card-title"><a className="text-decoration-none text-white" href="detail-rooms.html">Fez</a></h6>
                            <div className="d-flex card-subtitle">
                              <p className="flex-grow-1 mb-0 text-muted text-sm">Central Morocco</p>
                              <p className="flex-shrink-1 mb-0 card-stars text-xs text-end"><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- place item--> */}
                    <div className="d-none d-md-block col-md-4 mb-5" data-marker-id="">
                      <div className="card h-100 border-0 shadow-lg bg-dark hover-animate">
                        <div className="card-img-top overflow-hidden gradient-overlay"> <img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/marrakech.jpg" alt="Marrakech"/><a className="tile-link" href="detail-rooms.html"></a>
                          <div className="card-img-overlay-top text-end"><a className="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                              <svg className="svg-icon text-white">
                                <use xlinkHref="#heart-1"> </use>
                              </svg></a></div>
                        </div>
                        <div className="card-body d-flex align-items-center">
                          <div className="w-100">
                            <h6 className="card-title"><a className="text-decoration-none text-white" href="detail-rooms.html">Marrakech</a></h6>
                            <div className="d-flex card-subtitle">
                              <p className="flex-grow-1 mb-0 text-muted text-sm">Central Morocco</p>
                              <p className="flex-shrink-1 mb-0 card-stars text-xs text-end"><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-gray-300">                                  </i>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- place item--> */}
                    <div className="d-none d-md-block col-md-4 mb-5" data-marker-id="">
                      <div className="card h-100 border-0 shadow-lg bg-dark hover-animate">
                        <div className="card-img-top overflow-hidden gradient-overlay"> <img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/essaouira.jpg" alt="Essaouira"/><a className="tile-link" href="detail-rooms.html"></a>
                          <div className="card-img-overlay-top text-end"><a className="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                              <svg className="svg-icon text-white">
                                <use xlinkHref="#heart-1"> </use>
                              </svg></a></div>
                        </div>
                        <div className="card-body d-flex align-items-center">
                          <div className="w-100">
                            <h6 className="card-title"><a className="text-decoration-none text-white" href="detail-rooms.html">Essaouira</a></h6>
                            <div className="d-flex card-subtitle">
                              <p className="flex-grow-1 mb-0 text-muted text-sm">Coast</p>
                              <p className="flex-shrink-1 mb-0 card-stars text-xs text-end"><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide bg-cover dark-overlay bg-cover-right" style={{backgroundImage: `url('https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1526392060635-9d6019884377.jpg')`}}>
            <div className="container h-100">
              <div className="d-flex h-100 text-white overlay-content align-items-center" data-swiper-parallax="-500">
                <div className="w-100">
                  <div className="row">
                    <div className="col-lg-6">
                      <p className="subtitle text-white letter-spacing-3 mb-3 font-weight-light">Discover South America</p>
                      <h2 className="display-3 fw-bold mb-3" style={{lineHeight: "1"}}>Peru</h2>
                      <p className="mb-5">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit</p>
                    </div>
                  </div>
                  <div className="row mt-3 mt-md-5">
                    <div className="col-md-4 mb-2 mb-md-0"><a className="d-flex text-reset text-decoration-none hover-animate" href="#">
                        <div className="icon-rounded bg-white opacity-7 flex-shrink-0 me-4">
                          <svg className="svg-icon text-dark w-2rem h-2rem">
                            <use xlinkHref="#airplane-mode-1"> </use>
                          </svg>
                        </div>
                        <div>
                          <h5>Flights</h5>
                          <div className="badge badge-light">from $345</div>
                        </div></a></div>
                    <div className="col-md-4 mb-2 mb-md-0"><a className="d-flex text-reset text-decoration-none hover-animate" href="#">
                        <div className="icon-rounded bg-white opacity-7 flex-shrink-0 me-4">
                          <svg className="svg-icon text-dark w-2rem h-2rem">
                            <use xlinkHref="#suitcase-1"> </use>
                          </svg>
                        </div>
                        <div>
                          <h5>Holidays</h5>
                          <div className="badge badge-light">from $1,245</div>
                        </div></a></div>
                    <div className="col-md-4 mb-2 mb-md-0"><a className="d-flex text-reset text-decoration-none hover-animate" href="#">
                        <div className="icon-rounded bg-white opacity-7 flex-shrink-0 me-4">
                          <svg className="svg-icon text-dark w-2rem h-2rem">
                            <use xlinkHref="#image-gallery-1"> </use>
                          </svg>
                        </div>
                        <div>
                          <h5>Guide &amp; gallery</h5>
                          <p>See more</p>
                        </div></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination swiper-pagination-white"></div>
        <div className="swiper-nav d-none d-lg-block">
          <div className="swiper-button-prev" id="homePrev"></div>
          <div className="swiper-button-next" id="homeNext"></div>
        </div>
      </div>
    );
}

export default Swiper;