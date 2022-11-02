import React from "react";
import { venues } from "../../shared/data";
import Header from "../subComponents/Header";
import VenueItem from "../subComponents/VenueItem";

function Category1() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <section>
        <div className="map-wrapper-450">
          <div className="h-100" id="categoryMap"></div>
        </div>
      </section>
      <section className="py-5 bg-gray-100 shadow">
        <div className="container">
          <h1>New York</h1>
          <p className="lead mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
          <h5>City Quarters </h5>
          <ul className="nav nav-pills-custom">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Mount Vernon
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Johnstown
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Jamestown
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hudson
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Kingston
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">
            <div className="me-3">
              <p className="mb-3 mb-md-0">
                <strong>{venues.length}</strong> results found
              </p>
            </div>
            <div>
              <label className="form-label me-2" for="form_sort">
                Sort by
              </label>
              <select
                className="selectpicker"
                name="sort"
                id="form_sort"
                data-style="btn-selectpicker"
                title=""
              >
                <option value="sortBy_0">Most popular </option>
                <option value="sortBy_1">Recommended </option>
                <option value="sortBy_2">Newest </option>
                <option value="sortBy_3">Oldest </option>
                <option value="sortBy_4">Closest </option>
              </select>
            </div>
          </div>
          <div className="row">
            {/* <!-- venue item--> */}
            {venues.map((venue) => {
              return (
                <div
                  className="col-sm-6 col-lg-4 mb-5 hover-animate"
                  data-marker-id="59c0c8e322f3375db4d89128"
                >
                  <VenueItem
                    name={venue.name}
                    type={venue.type}
                    imgUrl={venue.imgUrl}
                    title={venue.title}
                    rating={venue.rating}
                    moreTypes={venue.moreTypes}
                    description={venue.description}
                  />
                </div>
              );
            })}
          </div>
          {/* <!-- Pagination --> */}
          <nav aria-label="Page navigation example">
            <ul className="pagination pagination-template d-flex justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#">
                  {" "}
                  <i className="fa fa-angle-left"></i>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  {" "}
                  <i className="fa fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default Category1;
