import React from "react";
import { reviews, venues } from "../../shared/data";
import Header from "../subComponents/Header";
import Rating from "../subComponents/Rating";
import Review from "../subComponents/Review";
import VenueItem from "../subComponents/VenueItem";

function Detail() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <section
        className="pt-7 pb-5 d-flex align-items-end dark-overlay bg-cover"
        style={{
          backgroundImage: `url("https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1515164783716-8e6920f3e77c.jpg")`,
        }}
      >
        <div className="container overlay-content">
          <div className="d-flex justify-content-between align-items-start flex-column flex-lg-row align-items-lg-end">
            <div className="text-white mb-4 mb-lg-0">
              <div className="badge badge-pill badge-transparent px-3 py-2 mb-4">
                Eat &amp; Drink
              </div>
              <h1 className="text-shadow verified">Fifteen Restaurant & Bar</h1>
              <p>
                <i className="fa-map-marker-alt fas me-2"></i> 53 Broadway,
                Brooklyn, NY 1129
              </p>
              <p className="mb-0 d-flex align-items-center">
                <Rating
                  rating={4}
                  class1="fa fa-xs fa-star text-primary"
                  class2="fa fa-xs fa-star text-gray-200 me-4"
                />
                8 Reviews
              </p>
            </div>
            <div className="calltoactions">
              <a
                className="btn btn-primary"
                href="#leaveReview"
                onclick="$('#leaveReview').collapse('show')"
                data-smooth-scroll
              >
                Leave a Review
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* <!-- About Listing--> */}
              <div className="text-block">
                <h3 className="mb-3">About</h3>
                <p className="text-muted">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore.
                </p>
                <p className="text-muted">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="text-block">
                {/* <!-- Listing Location--> */}
                <h3 className="mb-4">Location</h3>
                <div className="map-wrapper-300 mb-3">
                  <div className="h-100" id="detailMap"></div>
                </div>
              </div>
              <div className="text-block">
                {/* <!-- Gallery--> */}
                <h3 className="mb-4">Gallery</h3>
                <div className="row gallery ms-n1 me-n1">
                  <div className="col-lg-4 col-6 px-1 mb-2">
                    <a href="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1515164783716-8e6920f3e77c.jpg">
                      <img
                        className="img-fluid"
                        src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1515164783716-8e6920f3e77c.jpg"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-lg-4 col-6 px-1 mb-2">
                    <a href="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1466978913421-dad2ebd01d17.jpg">
                      <img
                        className="img-fluid"
                        src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1466978913421-dad2ebd01d17.jpg"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-lg-4 col-6 px-1 mb-2">
                    <a href="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1477763858572-cda7deaa9bc5.jpg">
                      <img
                        className="img-fluid"
                        src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1477763858572-cda7deaa9bc5.jpg"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-lg-4 col-6 px-1 mb-2">
                    <a href="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1505275350441-83dcda8eeef5.jpg">
                      <img
                        className="img-fluid"
                        src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1505275350441-83dcda8eeef5.jpg"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-lg-4 col-6 px-1 mb-2">
                    <a href="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1508766917616-d22f3f1eea14.jpg">
                      <img
                        className="img-fluid"
                        src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1508766917616-d22f3f1eea14.jpg"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-lg-4 col-6 px-1 mb-2">
                    <a href="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1430931071372-38127bd472b8.jpg">
                      <img
                        className="img-fluid"
                        src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1430931071372-38127bd472b8.jpg"
                        alt="..."
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Amenities--> */}
              <div className="text-block">
                <h3 className="mb-4">Amenities</h3>
                <ul className="amenities-list list-inline">
                  <li className="list-inline-item mb-3">
                    <div className="d-flex align-items-center">
                      <div className="icon-circle bg-secondary me-2">
                        <i className="fa fa-check"></i>
                      </div>
                      <span>Elevator</span>
                    </div>
                  </li>
                  <li className="list-inline-item mb-3">
                    <div className="d-flex align-items-center">
                      <div className="icon-circle bg-secondary me-2">
                        <i className="fa fa-check"></i>
                      </div>
                      <span>Vegan friendly</span>
                    </div>
                  </li>
                  <li className="list-inline-item mb-3">
                    <div className="d-flex align-items-center">
                      <div className="icon-circle bg-secondary me-2">
                        <i className="fa fa-check"></i>
                      </div>
                      <span>Alcohol served</span>
                    </div>
                  </li>
                  <li className="list-inline-item mb-3">
                    <div className="d-flex align-items-center">
                      <div className="icon-circle bg-secondary me-2">
                        <i className="fa fa-check"></i>
                      </div>
                      <span>No smoking</span>
                    </div>
                  </li>
                  <li className="list-inline-item mb-3">
                    <div className="d-flex align-items-center">
                      <div className="icon-circle bg-secondary me-2">
                        <i className="fa fa-check"></i>
                      </div>
                      <span>Parking spaces (paid)</span>
                    </div>
                  </li>
                  <li className="list-inline-item mb-3">
                    <div className="d-flex align-items-center">
                      <div className="icon-circle bg-secondary me-2">
                        <i className="fa fa-check"></i>
                      </div>
                      <span>WiFi</span>
                    </div>
                  </li>
                </ul>
              </div>


      {/* /////////////////////  REVIEWS    //////////////////////// */}
              <div className="text-block">
                <p className="subtitle text-sm text-primary">Reviews </p>
                <h5 className="mb-4">Listing Reviews </h5>
                {reviews.map((review) => {
                  return (
                    <Review
                      name={review.name}
                      profileImg={review.profileImg}
                      rating={review.rating}
                      comment={review.comment}
                      date={review.date}
                    />
                  );
                })}
                <div className="py-5">
                  <button
                    className="btn btn-outline-primary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#leaveReview"
                    aria-expanded="false"
                    aria-controls="leaveReview"
                  >
                    Leave a review
                  </button>
                  <div className="collapse mt-4" id="leaveReview">
                    <h5 className="mb-4">Leave a review</h5>
                    <form
                      className="form"
                      id="contact-form"
                      method="get"
                      action="#"
                    >
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="mb-4">
                            <label className="form-label" for="name">
                              Your name *
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Enter your name"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb-4">
                            <label className="form-label" for="rating">
                              Your rating *
                            </label>
                            <select
                              className="form-select focus-shadow-0"
                              name="rating"
                              id="rating"
                            >
                              <option value="5">
                                &#9733;&#9733;&#9733;&#9733;&#9733; (5/5)
                              </option>
                              <option value="4">
                                &#9733;&#9733;&#9733;&#9733;&#9734; (4/5)
                              </option>
                              <option value="3">
                                &#9733;&#9733;&#9733;&#9734;&#9734; (3/5)
                              </option>
                              <option value="2">
                                &#9733;&#9733;&#9734;&#9734;&#9734; (2/5)
                              </option>
                              <option value="1">
                                &#9733;&#9734;&#9734;&#9734;&#9734; (1/5)
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="form-label" for="email">
                          Your email *
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your  email"
                          required="required"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="form-label" for="review">
                          Review text *
                        </label>
                        <textarea
                          className="form-control"
                          rows="4"
                          name="review"
                          id="review"
                          placeholder="Enter your review"
                          required="required"
                        ></textarea>
                      </div>
                      <button className="btn btn-primary" type="submit">
                        Post review
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ps-xl-4">
                {/* <!-- Opening Hours      --> */}
                <div className="card border-0 shadow mb-5">
                  <div className="card-header bg-gray-100 py-4 border-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <p className="subtitle text-sm text-primary">
                          Opening in 5 minutes
                        </p>
                        <h4 className="mb-0">Opening Hours </h4>
                      </div>
                      <svg className="svg-icon svg-icon svg-icon-light w-3rem h-3rem ms-3 text-muted flex-shrink-0">
                        <use xlinkHref="#wall-clock-1"> </use>
                      </svg>
                    </div>
                  </div>
                  <div className="card-body">
                    <table className="table text-sm mb-0">
                      <tr>
                        <th className="ps-0 border-0">Sunday</th>
                        <td className="pe-0 text-end border-0">
                          8:00 am - 6:00 pm
                        </td>
                      </tr>
                      <tr>
                        <th className="ps-0">Monday</th>
                        <td className="pe-0 text-end">8:00 am - 6:00 pm</td>
                      </tr>
                      <tr>
                        <th className="ps-0">Tuesday</th>
                        <td className="pe-0 text-end">8:00 am - 6:00 pm</td>
                      </tr>
                      <tr>
                        <th className="ps-0">Wednesday</th>
                        <td className="pe-0 text-end">8:00 am - 6:00 pm</td>
                      </tr>
                      <tr>
                        <th className="ps-0">Thursday</th>
                        <td className="pe-0 text-end">8:00 am - 6:00 pm</td>
                      </tr>
                      <tr>
                        <th className="ps-0">Friday</th>
                        <td className="pe-0 text-end">8:00 am - 6:00 pm</td>
                      </tr>
                      <tr>
                        <th className="ps-0">Saturday</th>
                        <td className="pe-0 text-end">Closed</td>
                      </tr>
                    </table>
                  </div>
                </div>
                {/* <!-- Contact--> */}
                <div className="card border-0 shadow mb-5">
                  <div className="card-header bg-gray-100 py-4 border-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <p className="subtitle text-sm text-primary">
                          Drop Us a Line
                        </p>
                        <h4 className="mb-0">Contact</h4>
                      </div>
                      <svg className="svg-icon svg-icon svg-icon-light w-3rem h-3rem ms-3 text-muted flex-shrink-0">
                        <use xlinkHref="#fountain-pen-1"> </use>
                      </svg>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        {" "}
                        <a
                          className="text-gray-00 text-sm text-decoration-none"
                          href="#"
                        >
                          <i className="fa fa-phone me-3"></i>
                          <span className="text-muted">(020) 123 456 789</span>
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a className=" text-sm text-decoration-none" href="#">
                          <i className="fa fa-envelope me-3"></i>
                          <span className="text-muted">info@example.com</span>
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a className=" text-sm text-decoration-none" href="#">
                          <i className="fa fa-globe me-3"></i>
                          <span className="text-muted">www.example.com</span>
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a
                          className="text-blue text-sm text-decoration-none"
                          href="#"
                        >
                          <i className="fab fa-facebook me-3"></i>
                          <span className="text-muted">Facebook</span>
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a className=" text-sm text-decoration-none" href="#">
                          <i className="fab fa-twitter me-3"></i>
                          <span className="text-muted">Twitter</span>
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a className=" text-sm text-decoration-none" href="#">
                          <i className="fab fa-instagram me-3"></i>
                          <span className="text-muted">Instagram</span>
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a className=" text-sm text-decoration-none" href="#">
                          <i className="fab fa-google-plus me-3"></i>
                          <span className="text-muted">Google+</span>
                        </a>
                      </li>
                    </ul>
                    <div className="d-grid text-center">
                      <a className="btn btn-outline-primary" href="#">
                        {" "}
                        <i className="far fa-paper-plane me-2"></i>Send a
                        Message
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p>
                    <a className="text-secondary" href="#">
                      {" "}
                      <i className="fa fa-heart"></i> Bookmark This Listing
                    </a>
                  </p>
                  <span>79 people bookmarked this place </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-6 bg-gray-100">
        <div className="container">
          <h5 className="mb-0">Similar places</h5>
          <p className="subtitle text-sm text-primary mb-4">
            You may also like{" "}
          </p>
          {/* <!-- Slider main container--> */}
          <div className="swiper-container swiper-container-mx-negative items-slider">
            {/* <!-- Additional required wrapper--> */}
            <div className="swiper-wrapper pb-5">
              {/* <!-- Slides--> */}

              {/* <!-- venue item--> */}
              {venues.map((venue) => {
                return (
                  <div className="swiper-slide h-auto px-2">
                    <div
                      className="w-100 h-100"
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
                  </div>
                );
              })}
            </div>
            {/* <!-- If we need pagination--> */}
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
