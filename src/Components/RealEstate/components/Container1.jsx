import React from "react";
import Form1 from "./Form1";

function Container1() {
  return (
    <div className="container position-relative mt-n6 z-index-20">
      <ul className="nav nav-tabs search-bar-nav-tabs" role="tablist">
        <li className="nav-item me-2">
          <a
            className="nav-link active"
            href="#buy"
            data-bs-toggle="tab"
            role="tab"
          >
            Buy
          </a>
        </li>
        <li className="nav-item me-2">
          <a className="nav-link" href="#rent" data-bs-toggle="tab" role="tab">
            Rent
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#sell" data-bs-toggle="tab" role="tab">
            Sell
          </a>
        </li>
      </ul>
      <div className="search-bar search-bar-with-tabs p-3 p-lg-4">
        <div className="tab-content">
          <div className="tab-pane fade show active" id="buy" role="tabpanel">
            <Form1 />
          </div>
          <div className="tab-pane fade" id="rent" role="tabpanel">
            <Form1 />
          </div>
          <div className="tab-pane fade" id="sell" role="tabpanel">
            <Form1 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container1;
