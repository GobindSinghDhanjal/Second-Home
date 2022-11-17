import React, { useEffect } from "react";
import Header from "../subComponents/Header";
import CheckIcon from "@mui/icons-material/Check";
import ReviewsIcon from "@mui/icons-material/Reviews";
import Card1 from "../subComponents/Card1";
import { reviews } from "../../shared/data";
import Review from "../subComponents/Review";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomes } from "../../Redux";

function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomes());
  }, []);

  const places = useSelector((state) => state.homes.homes);
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 me-lg-auto">
              <div className="card border-0 shadow mb-6 mb-lg-0">
                <div className="card-header bg-gray-100 py-4 border-0 text-center">
                  <a className="d-inline-block" href="/">
                    <img
                      className="d-block avatar avatar-xxl p-2 mb-2"
                      src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-10.jpg"
                      alt=""
                    />
                  </a>
                  <h5>Jack London</h5>
                  <p className="text-muted text-sm mb-0">Los Angeles, CA </p>
                </div>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-rounded icon-rounded-sm bg-primary-light flex-shrink-0 me-2">
                      <ReviewsIcon color="primary" />
                    </div>
                    <div>
                      <p className="mb-0">2877 reviews</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-rounded icon-rounded-sm bg-primary-light flex-shrink-0 me-2">
                      <CheckIcon color="primary" />
                    </div>
                    <div>
                      <p className="mb-0">Verified</p>
                    </div>
                  </div>
                  <hr />
                  <h6>Jack provided</h6>
                  <ul className="card-text text-muted">
                    <li>Government ID</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9 ps-lg-5">
              <h1 className="hero-heading mb-0">Hello, I'm Jack!</h1>
              <div className="text-block">
                <p>
                  {" "}
                  <span className="badge badge-secondary-light">
                    Joined in 2011
                  </span>
                </p>
                <p className="text-muted">
                  Samsa was a travelling salesman - and above it there hung a
                  picture that he had recently cut out of an illustrated
                  magazine and housed in a nice, gilded frame.{" "}
                </p>
                <p className="text-muted">
                  He must have tried it a hundred times, shut his eyes so that
                  he wouldn't have to look at the floundering legs, and only
                  stopped when he began to feel a mild, dull pain there that he
                  had never felt before.{" "}
                </p>
              </div>
              <div className="text-block">
                <h4 className="mb-5">Jack's Listings</h4>
                <div className="row">
                  {/* <!-- place item--> */}
                  {places.map((place, i) => {
                    return (
                      <div
                        className="col-sm-6 col-lg-4 mb-30px hover-animate"
                        data-marker-id="59c0c8e322f3375db4d89128"
                      >
                        <Card1
                          key={i}
                          name={place.name}
                          nextUrl="/detail-room"
                          title={place.title}
                          placeImg={place.placeImg}
                          profileImg={place.profileImg}
                          type={place.type}
                          price={place.price}
                          rating={place.rating}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>


{/* /////////////////////////       REVIEWS        /////////////////// */}

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
                            <label className="form-label" htmlFor="name">
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
                            <label className="form-label" htmlFor="rating">
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
                        <label className="form-label" htmlFor="email">
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
                        <label className="form-label" htmlFor="review">
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
