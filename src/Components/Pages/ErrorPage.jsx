import React from "react";

function ErrorPage() {
    return(
        <div className="mh-full-screen d-flex align-items-center dark-overlay"><img className="bg-image" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/aron-visuals-3jBU9TbKW7o-unsplash.jpg" alt="Not found"/>
        <div className="container text-white text-lg overlay-content py-6 py-lg-0">
          <h1 className="display-3 fw-bold mb-5">Oops, that page is not here.</h1>
          <p className="fw-light mb-5">Elit adipisicing aliquip irure non consequat quis ex fugiat dolor in irure pariatur eu aute. Ea tempor nisi sit in Lorem exercitation mollit ut veniam in do eu excepteur. </p>
          <p className="mb-6"> <a className="btn btn-outline-light" href="/"><i className="fa fa-home me-2"></i>Start from the Homepage</a></p>
          <p className="h4 text-shadow">Error 404</p>
        </div>
      </div>
    )
}

export default ErrorPage;