import React from "react";
import Form1 from "./Form1";

function Container1() {
    return(
        <div className="container position-relative mt-n6 z-index-20">
        <ul className="nav nav-tabs search-bar-nav-tabs" role="tablist">
          <li className="nav-item me-2"><a className="nav-link active" href="#buy" data-bs-toggle="tab" role="tab">Buy</a></li>
          <li className="nav-item me-2"><a className="nav-link" href="#rent" data-bs-toggle="tab" role="tab">Rent</a></li>
          <li className="nav-item"><a className="nav-link" href="#sell" data-bs-toggle="tab" role="tab">Sell</a></li>
        </ul>
        <div className="search-bar search-bar-with-tabs p-3 p-lg-4">
          <div className="tab-content">
            <div className="tab-pane fade show active" id="buy" role="tabpanel">
                 <Form1 />
                  {/* <form action="#">
                    <div className="row">
                      <div className="col-lg-4 d-flex align-items-center form-group no-divider">
                        <select className="selectpicker form-control" title="Location" data-style="btn-form-control" multiple data-selected-text-format="count &gt; 2">
                          <option value="city_0">San Francisco</option>
                          <option value="city_1">Los Angeles</option>
                          <option value="city_2">Santa Monica</option>
                          <option value="city_3">San Diego</option>
                          <option value="city_4">Fresno</option>
                        </select>
                      </div>
                      <div className="col-md-6 col-lg-3 d-flex align-items-center form-group no-divider">
                        <select className="selectpicker" title="Type" data-style="btn-form-control" multiple data-selected-text-format="count &gt; 2">
                          <option value="type_0">Duplex</option>
                          <option value="type_1">Appartment</option>
                          <option value="type_2">House</option>
                          <option value="type_3">Land</option>
                          <option value="type_4">Other</option>
                        </select>
                      </div>
                      <div className="col-md-6 col-lg-3 d-flex align-items-center form-group no-divider">
                        <select className="selectpicker" title="Max price" data-style="btn-form-control">
                          <option value="price_0">$5,000</option>
                          <option value="price_1">$10,000</option>
                          <option value="price_2">$25,000</option>
                          <option value="price_3">$50,000</option>
                        </select>
                      </div>
                      <div className="col-lg-2 d-grid form-group mb-0">
                        <button className="btn btn-primary h-100" type="submit">Search </button>
                      </div>
                    </div>
                  </form> */}
            </div>
            <div className="tab-pane fade" id="rent" role="tabpanel">
                <Form1 />
                  {/* <form action="#">
                    <div className="row">
                      <div className="col-lg-4 d-flex align-items-center form-group no-divider">
                        <select className="selectpicker form-control" title="Location" data-style="btn-form-control" multiple data-selected-text-format="count &gt; 2">
                          <option value="city_0">San Francisco</option>
                          <option value="city_1">Los Angeles</option>
                          <option value="city_2">Santa Monica</option>
                          <option value="city_3">San Diego</option>
                          <option value="city_4">Fresno</option>
                        </select>
                      </div>
                      <div className="col-md-6 col-lg-3 d-flex align-items-center form-group no-divider">
                        <select className="selectpicker" title="Type" data-style="btn-form-control" multiple data-selected-text-format="count &gt; 2">
                          <option value="type_0">Duplex</option>
                          <option value="type_1">Appartment</option>
                          <option value="type_2">House</option>
                          <option value="type_3">Land</option>
                          <option value="type_4">Other</option>
                        </select>
                      </div>
                      <div className="col-md-6 col-lg-3 d-flex align-items-center form-group no-divider">
                        <select className="selectpicker" title="Max price" data-style="btn-form-control">
                          <option value="price_0">$5,000</option>
                          <option value="price_1">$10,000</option>
                          <option value="price_2">$25,000</option>
                          <option value="price_3">$50,000</option>
                        </select>
                      </div>
                      <div className="col-lg-2 d-grid form-group mb-0">
                        <button className="btn btn-primary h-100" type="submit">Search </button>
                      </div>
                    </div>
                  </form> */}
            </div>
            <div className="tab-pane fade" id="sell" role="tabpanel">
                <Form1 />
                  {/* <form action="#">
                    <div className="row">
                      <div className="col-lg-4 d-flex align-items-center form-group no-divider">
                        <select className="selectpicker form-control" title="Location" data-style="btn-form-control" multiple data-selected-text-format="count &gt; 2">
                          <option value="city_0">San Francisco</option>
                          <option value="city_1">Los Angeles</option>
                          <option value="city_2">Santa Monica</option>
                          <option value="city_3">San Diego</option>
                          <option value="city_4">Fresno</option>
                        </select>
                      </div>
                      <div className="col-md-6 col-lg-3 d-flex align-items-center form-group no-divider">
                        <select className="selectpicker" title="Type" data-style="btn-form-control" multiple data-selected-text-format="count &gt; 2">
                          <option value="type_0">Duplex</option>
                          <option value="type_1">Appartment</option>
                          <option value="type_2">House</option>
                          <option value="type_3">Land</option>
                          <option value="type_4">Other</option>
                        </select>
                      </div>
                      <div className="col-md-6 col-lg-3 d-flex align-items-center form-group no-divider">
                        <select className="selectpicker" title="Max price" data-style="btn-form-control">
                          <option value="price_0">$5,000</option>
                          <option value="price_1">$10,000</option>
                          <option value="price_2">$25,000</option>
                          <option value="price_3">$50,000</option>
                        </select>
                      </div>
                      <div className="col-lg-2 d-grid form-group mb-0">
                        <button className="btn btn-primary h-100" type="submit">Search </button>
                      </div>
                    </div>
                  </form> */}
            </div>
          </div>
        </div>
      </div>

    );
}

export default Container1;