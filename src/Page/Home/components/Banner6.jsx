import React from "react";

function Banner6() {
    return(
        <section className="py-6 bg-gray-100"> 
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8">
              <p className="subtitle text-secondary">Stories from around the globe</p>
              <h2>From our travel blog</h2>
            </div>
            <div className="col-md-4 d-md-flex align-items-center justify-content-end"><a className="text-muted text-sm" href="blog.html">
                 See all articles<i className="fas fa-angle-double-right ms-2"></i></a></div>
          </div>
          <div className="row">
            {/* <!-- blog item--> */}
            <div className="col-lg-4 col-sm-6 mb-4 hover-animate">
              <div className="card shadow border-0 h-100"><a href="post.html"><img className="img-fluid card-img-top" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="..."/></a>
                <div className="card-body"><a className="text-uppercase text-muted text-sm letter-spacing-2" href="#">Travel </a>
                  <h5 className="my-2"><a className="text-dark" href="post.html">Autumn fashion tips and tricks          </a></h5>
                  <p className="text-gray-500 text-sm my-3"><i className="far fa-clock me-2"></i>January 16, 2016</p>
                  <p className="my-2 text-muted text-sm">Pellentesque habitant morbi tristique senectus. Vestibulum tortor quam, feugiat vitae, ultricies ege...</p><a className="btn btn-link ps-0" href="post.html">Read more<i className="fa fa-long-arrow-alt-right ms-2"></i></a>
                </div>
              </div>
            </div>
            {/* <!-- blog item--> */}
            <div className="col-lg-4 col-sm-6 mb-4 hover-animate">
              <div className="card shadow border-0 h-100"><a href="post.html"><img className="img-fluid card-img-top" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1522771739844-6a9f6d5f14af.jpg" alt="..."/></a>
                <div className="card-body"><a className="text-uppercase text-muted text-sm letter-spacing-2" href="#">Living </a>
                  <h5 className="my-2"><a className="text-dark" href="post.html">Newest photo apps          </a></h5>
                  <p className="text-gray-500 text-sm my-3"><i className="far fa-clock me-2"></i>January 16, 2016</p>
                  <p className="my-2 text-muted text-sm">ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibu...</p><a className="btn btn-link ps-0" href="post.html">Read more<i className="fa fa-long-arrow-alt-right ms-2"></i></a>
                </div>
              </div>
            </div>
            {/* <!-- blog item--> */}
            <div className="col-lg-4 col-sm-6 mb-4 hover-animate">
              <div className="card shadow border-0 h-100"><a href="post.html"><img className="img-fluid card-img-top" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1482463084673-98272196658a.jpg" alt="..."/></a>
                <div className="card-body"><a className="text-uppercase text-muted text-sm letter-spacing-2" href="#">Travel </a>
                  <h5 className="my-2"><a className="text-dark" href="post.html">Best books about Photography          </a></h5>
                  <p className="text-gray-500 text-sm my-3"><i className="far fa-clock me-2"></i>January 16, 2016</p>
                  <p className="my-2 text-muted text-sm">Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.  Mauris placerat eleif...</p><a className="btn btn-link ps-0" href="post.html">Read more<i className="fa fa-long-arrow-alt-right ms-2"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Banner6;