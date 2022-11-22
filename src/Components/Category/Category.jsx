import { TextField } from "@mui/material";
import React, { useState } from "react";
import { venues } from "../../shared/data";
import Header from "../subComponents/Header";
import LocationMap from "../subComponents/LocationMap";
import VenueItem from "../subComponents/VenueItem";
import Neighbour from "./components/Neighbour";
import SortBy from "./components/SortBy";
import SubCategory from "./components/SubCategory";

function Category() {
  const [center, setCenter] = useState({
    lat: 28.535517,
    lng: 77.391029,
  });
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 py-5 p-xl-5">
            <h1 className="text-serif mb-4">Eat in Manhattan, NY</h1>
            <hr className="my-4" />
            <form action="#">
              <div className="row">
                <div className="col-xl-4 col-md-6 mb-4">
                  {/* <label className="form-label" for="form_search">Keyword</label> */}
                  <div className="input-label-absolute input-label-absolute-right">
                    <div className="label-absolute">
                      <i className="fa fa-search"></i>
                    </div>
                    <TextField
                      label="Keyword"
                      variant="outlined"
                      name="search"
                      placeholder="Keywords"
                      id="form_search"
                    />
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 mb-4">
                  <Neighbour />
                </div>
                <div className="col-xl-4 col-md-6 mb-4">
                  <SubCategory />
                </div>
                <div className="col-12 mb-4">
                  <label className="form-label">Tag</label>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="type_0"
                          name="type[]"
                        />
                        <label className="form-check-label" for="type_0">
                          Hipster
                        </label>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="type_1"
                          name="type[]"
                        />
                        <label className="form-check-label" for="type_1">
                          Music club
                        </label>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="type_2"
                          name="type[]"
                        />
                        <label className="form-check-label" for="type_2">
                          Bar
                        </label>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="type_3"
                          name="type[]"
                        />
                        <label className="form-check-label" for="type_3">
                          Pub
                        </label>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="type_4"
                          name="type[]"
                        />
                        <label className="form-check-label" for="type_4">
                          Deli
                        </label>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="type_5"
                          name="type[]"
                        />
                        <label className="form-check-label" for="type_5">
                          Bistro
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-12 pb-4">
                  <div className="collapse" id="moreFilters">
                    <div className="mb-4">
                      <label className="form-label">Cuisine</label>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="cuisine_0"
                              name="cuisine[]"
                            />
                            <label className="form-check-label" for="cuisine_0">
                              Fusion
                            </label>
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="cuisine_1"
                              name="cuisine[]"
                            />
                            <label className="form-check-label" for="cuisine_1">
                              Indian
                            </label>
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="cuisine_2"
                              name="cuisine[]"
                            />
                            <label className="form-check-label" for="cuisine_2">
                              French
                            </label>
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="cuisine_3"
                              name="cuisine[]"
                            />
                            <label className="form-check-label" for="cuisine_3">
                              American
                            </label>
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="cuisine_4"
                              name="cuisine[]"
                            />
                            <label className="form-check-label" for="cuisine_4">
                              Mexican
                            </label>
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="cuisine_5"
                              name="cuisine[]"
                            />
                            <label className="form-check-label" for="cuisine_5">
                              Other
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 mb-4">
                        <label className="form-label">Price</label>
                        <div className="text-primary" id="slider-snap"></div>
                        <div className="nouislider-values">
                          <div className="min">
                            From $<span id="slider-snap-value-from"></span>
                          </div>
                          <div className="max">
                            To $<span id="slider-snap-value-to"></span>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="pricefrom"
                          id="slider-snap-input-from"
                          value="40"
                        />
                        <input
                          type="hidden"
                          name="priceto"
                          id="slider-snap-input-to"
                          value="110"
                        />
                      </div>
                      <div className="col-xl-6 mb-4">
                        <label className="form-label">Vegetarians</label>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="vegetarians_0"
                                name="vegetarians"
                              />
                              <label
                                className="form-check-label"
                                for="vegetarians_0"
                              >
                                All
                              </label>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="vegetarians_1"
                                name="vegetarians"
                              />
                              <label
                                className="form-check-label"
                                for="vegetarians_1"
                              >
                                Vegetarian only
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <button className="btn btn-primary" type="submit">
                    {" "}
                    <i className="fas fa-filter me-1"></i>Filter{" "}
                  </button>
                </div>
                <div className="col-6 mb-4 text-end">
                  <button
                    className="btn btn-link btn-collapse ps-0 text-secondary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#moreFilters"
                    aria-expanded="false"
                    aria-controls="moreFilters"
                    data-expanded-text="Less filters"
                    data-collapsed-text="More filters"
                  >
                    More filters
                  </button>
                </div>
              </div>
            </form>
            <hr className="my-4" />
            <div className="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">
              <div className="me-3">
                <p className="mb-3 mb-md-0">
                  <strong>{venues.length}</strong> results found
                </p>
              </div>
              <div>
                <SortBy />
                {/* <label className="form-label me-2" for="form_sort">Sort by</label>
                                <select className="selectpicker" name="sort" id="form_sort" data-style="btn-selectpicker" title="">
                                    <option value="sortBy_0">Most popular   </option>
                                    <option value="sortBy_1">Recommended   </option>
                                    <option value="sortBy_2">Newest   </option>
                                    <option value="sortBy_3">Oldest   </option>
                                    <option value="sortBy_4">Closest   </option>
                                </select> */}
              </div>
            </div>
            <div className="row">
                        {/* <!-- venue item--> */}
                        {venues.map((venue) => {
              return (
                <div
                className="col-sm-6 mb-5 hover-animate"
                data-marker-id="59c0c8e39aa2edasd626e485d"
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
          <div className="col-lg-6 map-side-lg px-lg-0">
            <div className="map-full shadow-right" id="categorySideMap">
            <LocationMap zoom={15} center={center}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
