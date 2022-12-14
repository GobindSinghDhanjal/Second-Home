import React from "react";

function Section3() {
    return(

        <section className="py-6 bg-gray-100">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8">
              <p className="subtitle text-primary">Most popular cities</p>
              <h2>What's on our radar</h2>
            </div>
            <div className="col-md-4 d-md-flex align-items-center justify-content-end"><a className="text-muted text-sm" href="/category-1">
                 See all cities<i className="fas fa-angle-double-right ms-2"></i></a></div>
          </div>
          <div className="row">
            <div className="d-flex align-items-lg-stretch mb-4 col-lg-8">
              <div className="card shadow-lg border-0 w-100 border-0 hover-animate" style={{background: `center center url('https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1449034446853-66c86144b0ad.jpg') no-repeat`, backgroundSize: 'cover'}}><a className="tile-link" href="/category"> </a>
                <div className="d-flex align-items-center h-100 text-white justify-content-center py-6 py-lg-7">
                  <h3 className="text-shadow text-uppercase mb-0">San Francisco</h3>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-lg-stretch mb-4 col-lg-4">
              <div className="card shadow-lg border-0 w-100 border-0 hover-animate" style={{background: `center center url('https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1429554429301-1c7d5ae2d42e.jpg') no-repeat`, backgroundSize: 'cover'}}><a className="tile-link" href="/category"> </a>
                <div className="d-flex align-items-center h-100 text-white justify-content-center py-6 py-lg-7">
                  <h3 className="text-shadow text-uppercase mb-0">Los Angeles</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="d-flex align-items-lg-stretch mb-4 col-lg-4">
              <div className="card shadow-lg border-0 w-100 border-0 hover-animate" style={{background: `center center url('https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1523430410476-0185cb1f6ff9.jpg') no-repeat`, backgroundSize: 'cover'}}><a className="tile-link" href="/category"> </a>
                <div className="d-flex align-items-center h-100 text-white justify-content-center py-6 py-lg-7">
                  <h3 className="text-shadow text-uppercase mb-0">Santa Monica</h3>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-lg-stretch mb-4 col-lg-4">
              <div className="card shadow-lg border-0 w-100 border-0 hover-animate" style={{background: `center center url('https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1505245208761-ba872912fac0.jpg') no-repeat`, backgroundSize: 'cover'}}><a className="tile-link" href="/category"> </a>
                <div className="d-flex align-items-center h-100 text-white justify-content-center py-6 py-lg-7">
                  <h3 className="text-shadow text-uppercase mb-0">San Diego</h3>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-lg-stretch mb-4 col-lg-4">
              <div className="card shadow-lg border-0 w-100 border-0 hover-animate" style={{background: `center center url('https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1519867850-74775a87e783.jpg') no-repeat`, backgroundSize: 'cover'}}><a className="tile-link" href="/category"> </a>
                <div className="d-flex align-items-center h-100 text-white justify-content-center py-6 py-lg-7">
                  <h3 className="text-shadow text-uppercase mb-0">Fresno</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
}

export default Section3;