import { TextField } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Neighbour from "./components/Neighbour";
import SubCategory from "./components/SubCategory";

function Category() {


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
                                        <div className="label-absolute"><i className="fa fa-search"></i></div>
                                        <TextField label="Keyword" variant="outlined" name="search" placeholder="Keywords" id="form_search" />
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
                                                <input className="form-check-input" type="checkbox" id="type_0" name="type[]" />
                                                <label className="form-check-label" for="type_0">Hipster</label>
                                            </div>
                                        </li>
                                        <li className="list-inline-item">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="type_1" name="type[]" />
                                                <label className="form-check-label" for="type_1">Music club</label>
                                            </div>
                                        </li>
                                        <li className="list-inline-item">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="type_2" name="type[]" />
                                                <label className="form-check-label" for="type_2">Bar</label>
                                            </div>
                                        </li>
                                        <li className="list-inline-item">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="type_3" name="type[]" />
                                                <label className="form-check-label" for="type_3">Pub</label>
                                            </div>
                                        </li>
                                        <li className="list-inline-item">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="type_4" name="type[]" />
                                                <label className="form-check-label" for="type_4">Deli</label>
                                            </div>
                                        </li>
                                        <li className="list-inline-item">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="type_5" name="type[]" />
                                                <label className="form-check-label" for="type_5">Bistro</label>
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
                                                        <input className="form-check-input" type="checkbox" id="cuisine_0" name="cuisine[]" />
                                                        <label className="form-check-label" for="cuisine_0">Fusion</label>
                                                    </div>
                                                </li>
                                                <li className="list-inline-item">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="cuisine_1" name="cuisine[]" />
                                                        <label className="form-check-label" for="cuisine_1">Indian</label>
                                                    </div>
                                                </li>
                                                <li className="list-inline-item">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="cuisine_2" name="cuisine[]" />
                                                        <label className="form-check-label" for="cuisine_2">French</label>
                                                    </div>
                                                </li>
                                                <li className="list-inline-item">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="cuisine_3" name="cuisine[]" />
                                                        <label className="form-check-label" for="cuisine_3">American</label>
                                                    </div>
                                                </li>
                                                <li className="list-inline-item">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="cuisine_4" name="cuisine[]" />
                                                        <label className="form-check-label" for="cuisine_4">Mexican</label>
                                                    </div>
                                                </li>
                                                <li className="list-inline-item">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="cuisine_5" name="cuisine[]" />
                                                        <label className="form-check-label" for="cuisine_5">Other</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6 mb-4">
                                                <label className="form-label">Price</label>
                                                <div className="text-primary" id="slider-snap"></div>
                                                <div className="nouislider-values">
                                                    <div className="min">From $<span id="slider-snap-value-from"></span></div>
                                                    <div className="max">To $<span id="slider-snap-value-to"></span></div>
                                                </div>
                                                <input type="hidden" name="pricefrom" id="slider-snap-input-from" value="40" />
                                                <input type="hidden" name="priceto" id="slider-snap-input-to" value="110" />
                                            </div>
                                            <div className="col-xl-6 mb-4">
                                                <label className="form-label">Vegetarians</label>
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" id="vegetarians_0" name="vegetarians" />
                                                            <label className="form-check-label" for="vegetarians_0">All</label>
                                                        </div>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" id="vegetarians_1" name="vegetarians" />
                                                            <label className="form-check-label" for="vegetarians_1">Vegetarian only</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 mb-4">
                                    <button className="btn btn-primary" type="submit"> <i className="fas fa-filter me-1"></i>Filter                </button>
                                </div>
                                <div className="col-6 mb-4 text-end">
                                    <button className="btn btn-link btn-collapse ps-0 text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#moreFilters" aria-expanded="false" aria-controls="moreFilters" data-expanded-text="Less filters" data-collapsed-text="More filters">More filters</button>
                                </div>
                            </div>
                        </form>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">
                            <div className="me-3">
                                <p className="mb-3 mb-md-0"><strong>12</strong> results found</p>
                            </div>
                            <div>
                                <label className="form-label me-2" for="form_sort">Sort by</label>
                                <select className="selectpicker" name="sort" id="form_sort" data-style="btn-selectpicker" title="">
                                    <option value="sortBy_0">Most popular   </option>
                                    <option value="sortBy_1">Recommended   </option>
                                    <option value="sortBy_2">Newest   </option>
                                    <option value="sortBy_3">Oldest   </option>
                                    <option value="sortBy_4">Closest   </option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            {/* <!-- venue item--> */}
                            <div className="col-sm-6 mb-5 hover-animate" data-marker-id="59c0c8e33b1527bfe2abaf92">
                                <div className="card h-100 border-0 shadow">
                                    <div className="card-img-top overflow-hidden dark-overlay bg-cover" style={{ backgroundImage: `url("https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1430931071372-38127bd472b8.jpg")`, minHeight: "200px" }}><a className="tile-link" href="detail.html"></a>
                                        <div className="card-img-overlay-bottom z-index-20">
                                            <h4 className="text-white text-shadow">Blue Hill</h4>
                                            <p className="mb-2 text-xs"><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-gray-300">                    </i>
                                            </p>
                                        </div>
                                        <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
                                            <div className="badge badge-transparent badge-pill px-3 py-2">Restaurants</div><a className="card-fav-icon position-relative z-index-40" href="javascript: void();">
                                                <svg className="svg-icon text-white">
                                                    <use xlinkHref="#heart-1"> </use>
                                                </svg></a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="text-sm text-muted mb-3"> Cupidatat excepteur non dolore laborum et quis nostrud veniam dolore deserunt. Pariatur dolore ut in elit id nulla. Irur...</p>
                                        <p className="text-sm text-muted text-uppercase mb-1">By <a href="#" className="text-dark">Matt Damon</a></p>
                                        <p className="text-sm mb-0"><a className="me-1" href="#">Restaurant,</a><a className="me-1" href="#">Contemporary</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- venue item--> */}
                            <div className="col-sm-6 mb-5 hover-animate" data-marker-id="59c0c8e322f3375db4d89128">
                                <div className="card h-100 border-0 shadow">
                                    <div className="card-img-top overflow-hidden dark-overlay bg-cover" style={{ backgroundImage: `url("https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1436018626274-89acd1d6ec9d.jpg")`, minHeight: "200px" }}><a className="tile-link" href="detail.html"></a>
                                        <div className="card-img-overlay-bottom z-index-20">
                                            <h4 className="text-white text-shadow">Plutorque</h4>
                                            <p className="mb-2 text-xs"><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i>
                                            </p>
                                        </div>
                                        <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
                                            <div className="badge badge-transparent badge-pill px-3 py-2">Restaurant</div><a className="card-fav-icon position-relative z-index-40" href="javascript: void();">
                                                <svg className="svg-icon text-white">
                                                    <use xlinkHref="#heart-1"> </use>
                                                </svg></a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="text-sm text-muted mb-3"> Proident irure eiusmod velit veniam consectetur id minim irure et nostrud mollit magna velit. Commodo amet proident aliq...</p>
                                        <p className="text-sm text-muted text-uppercase mb-1">By <a href="#" className="text-dark">Matt Damon</a></p>
                                        <p className="text-sm mb-0"><a className="me-1" href="#">Restaurant,</a><a className="me-1" href="#">Fusion</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- venue item--> */}
                            <div className="col-sm-6 mb-5 hover-animate" data-marker-id="59c0c8e3a31e62979bf147c9">
                                <div className="card h-100 border-0 shadow">
                                    <div className="card-img-top overflow-hidden dark-overlay bg-cover" style={{ backgroundImage: `url("https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1466978913421-dad2ebd01d17.jpg")`, minHeight: "200px" }}><a className="tile-link" href="detail.html"></a>
                                        <div className="card-img-overlay-bottom z-index-20">
                                            <h4 className="text-white text-shadow">Junipoor</h4>
                                            <p className="mb-2 text-xs"><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i>
                                            </p>
                                        </div>
                                        <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
                                            <div className="badge badge-transparent badge-pill px-3 py-2">Music club</div><a className="card-fav-icon position-relative z-index-40" href="javascript: void();">
                                                <svg className="svg-icon text-white">
                                                    <use xlinkHref="#heart-1"> </use>
                                                </svg></a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="text-sm text-muted mb-3"> Lorem amet ex duis in et fugiat consectetur laborum eiusmod labore. Quis cupidatat et do dolor in in magna. Eu sit quis ...</p>
                                        <p className="text-sm text-muted text-uppercase mb-1">By <a href="#" className="text-dark">Matt Damon</a></p>
                                        <p className="text-sm mb-0"><a className="me-1" href="#">Music,</a><a className="me-1" href="#">Techno,</a><a className="me-1" href="#">House</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- venue item--> */}
                            <div className="col-sm-6 mb-5 hover-animate" data-marker-id="59c0c8e3503eb77d487e8082">
                                <div className="card h-100 border-0 shadow">
                                    <div className="card-img-top overflow-hidden dark-overlay bg-cover" style={{ backgroundImage: `url("https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1477763858572-cda7deaa9bc5.jpg")`, minHeight: "200px" }}><a className="tile-link" href="detail.html"></a>
                                        <div className="card-img-overlay-bottom z-index-20">
                                            <h4 className="text-white text-shadow">Musix</h4>
                                            <p className="mb-2 text-xs"><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-gray-300">                    </i><i className="fa fa-star text-gray-300">                    </i>
                                            </p>
                                        </div>
                                        <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
                                            <div className="badge badge-transparent badge-pill px-3 py-2">Music club</div><a className="card-fav-icon position-relative z-index-40" href="javascript: void();">
                                                <svg className="svg-icon text-white">
                                                    <use xlinkHref="#heart-1"> </use>
                                                </svg></a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="text-sm text-muted mb-3"> Deserunt eiusmod Lorem proident consequat elit culpa laboris ea cupidatat. Consequat dolore proident ipsum qui sint enim...</p>
                                        <p className="text-sm text-muted text-uppercase mb-1">By <a href="#" className="text-dark">Matt Damon</a></p>
                                        <p className="text-sm mb-0"><a className="me-1" href="#">Music,</a><a className="me-1" href="#">Club,</a><a className="me-1" href="#">Rock</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- venue item--> */}
                            <div className="col-sm-6 mb-5 hover-animate" data-marker-id="59c0c8e39aa2eed0626e485d">
                                <div className="card h-100 border-0 shadow">
                                    <div className="card-img-top overflow-hidden dark-overlay bg-cover" style={{ backgroundImage: `url("https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1504087697492-238a6bf49ce8.jpg")`, minHeight: "200px" }}><a className="tile-link" href="detail.html"></a>
                                        <div className="card-img-overlay-bottom z-index-20">
                                            <h4 className="text-white text-shadow">Prosure</h4>
                                            <p className="mb-2 text-xs"><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i>
                                            </p>
                                        </div>
                                        <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
                                            <div className="badge badge-transparent badge-pill px-3 py-2">Restaurant</div><a className="card-fav-icon position-relative z-index-40" href="javascript: void();">
                                                <svg className="svg-icon text-white">
                                                    <use xlinkHref="#heart-1"> </use>
                                                </svg></a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="text-sm text-muted mb-3"> Cillum sunt reprehenderit ea non irure veniam dolore commodo labore fugiat est consequat velit. Cupidatat nisi qui ad si...</p>
                                        <p className="text-sm text-muted text-uppercase mb-1">By <a href="#" className="text-dark">Matt Damon</a></p>
                                        <p className="text-sm mb-0"><a className="me-1" href="#">Nisi,</a><a className="me-1" href="#">Ex,</a><a className="me-1" href="#">Eiusmod</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- venue item--> */}
                            <div className="col-sm-6 mb-5 hover-animate" data-marker-id="59c0c8e39aa2edasd626e485d">
                                <div className="card h-100 border-0 shadow">
                                    <div className="card-img-top overflow-hidden dark-overlay bg-cover" style={{ backgroundImage: `url("https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1505275350441-83dcda8eeef5.jpg")`, minHeight: "200px" }}><a className="tile-link" href="detail.html"></a>
                                        <div className="card-img-overlay-bottom z-index-20">
                                            <h4 className="text-white text-shadow">Take That</h4>
                                            <p className="mb-2 text-xs"><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-gray-300">                    </i>
                                            </p>
                                        </div>
                                        <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
                                            <div className="badge badge-transparent badge-pill px-3 py-2">Café</div><a className="card-fav-icon position-relative z-index-40" href="javascript: void();">
                                                <svg className="svg-icon text-white">
                                                    <use xlinkHref="#heart-1"> </use>
                                                </svg></a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="text-sm text-muted mb-3"> Cillum sunt reprehenderit ea non irure veniam dolore commodo labore fugiat est consequat velit. Cupidatat nisi qui ad si...</p>
                                        <p className="text-sm text-muted text-uppercase mb-1">By <a href="#" className="text-dark">Matt Damon</a></p>
                                        <p className="text-sm mb-0"><a className="me-1" href="#">Nisi,</a><a className="me-1" href="#">Ex,</a><a className="me-1" href="#">Eiusmod</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Pagination --> */}
                        <nav aria-label="Page navigation example">
                            <ul className="pagination pagination-template d-flex justify-content-center">
                                <li className="page-item"><a className="page-link" href="#"> <i className="fa fa-angle-left"></i></a></li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#"> <i className="fa fa-angle-right"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-6 map-side-lg pe-lg-0">
                        <div className="map-full shadow-left" id="categorySideMap"></div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Category;