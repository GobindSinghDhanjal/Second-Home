import React from "react";
import { ReactSession } from "react-client-session";

function Header() {
  const user = ReactSession.get("username");

  function clearSession() {
    ReactSession.remove("username");
  }

  // if (user) {
  //   console.log(user);
  // } else {
  //   console.log("user nhi hai");
  // }

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <a className="navbar-brand py-1" href="/">
              <img
                src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/logo.svg"
                alt="Directory logo"
              />
            </a>
            <form
              className="form-inline d-none d-sm-flex"
              action="#"
              id="search"
            >
              <div className="input-label-absolute input-label-absolute-left input-expand ms-lg-2 ms-xl-3">
                <label className="label-absolute" htmlFor="search_search">
                  <i className="fa fa-search"></i>
                  <span className="sr-only">What are you looking for?</span>
                </label>
                <input
                  className="form-control form-control-sm border-0 shadow-0 bg-gray-200"
                  id="search_search"
                  placeholder="Search"
                  aria-label="Search"
                  type="search"
                />
              </div>
            </form>
          </div>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <form
              className="form-inline mt-4 mb-2 d-sm-none"
              action="#"
              id="searchcollapsed"
            >
              <div className="input-label-absolute input-label-absolute-left w-100">
                <label
                  className="label-absolute"
                  htmlFor="searchcollapsed_search"
                >
                  <i className="fa fa-search"></i>
                  <span className="sr-only">What are you looking for?</span>
                </label>
                <input
                  className="form-control form-control-sm border-0 shadow-0 bg-gray-200"
                  id="searchcollapsed_search"
                  placeholder="Search"
                  aria-label="Search"
                  type="search"
                />
              </div>
            </form>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  id="homeDropdownMenuLink"
                  href="/"
                  data-bs-toggle="dropdown"
                >
                  Home
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="homeDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/real-estate">
                    Real Estate
                  </a>
                </div>
              </li>

              <li className="nav-item dropdown position-static">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  data-bs-toggle="dropdown"
                >
                  Template
                </a>
                <div className="dropdown-menu megamenu py-lg-0">
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="row p-3 pe-lg-0 ps-lg-5 pt-lg-5">
                        <div className="col-lg-3">
                          <h6 className="text-uppercase">Homepage</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item">
                              <a
                                className="megamenu-list-link"
                                href="/real-estate"
                              >
                                Real estate{" "}
                                <span className="badge badge-info-light ms-1">
                                  New
                                </span>{" "}
                              </a>
                            </li>
                          </ul>

                          <h6 className="text-uppercase">Rooms</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item">
                              <a
                                className="megamenu-list-link"
                                href="/category"
                              >
                                Category - Map on the right{" "}
                              </a>
                            </li>
                          </ul>
                          {/* <!-- Megamenu list--> */}
                          <h6 class="text-uppercase">Blog</h6>
                          <ul class="megamenu-list list-unstyled">
                            <li class="megamenu-list-item">
                              <a class="megamenu-list-link" href="/blog">
                                Blog{" "}
                              </a>
                            </li>
                            <li class="megamenu-list-item">
                              <a class="megamenu-list-link" href="/post">
                                Post{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          {/* <!-- Megamenu list--> */}
                          <h6 class="text-uppercase">Pages</h6>
                          <ul class="megamenu-list list-unstyled">
                            <li class="megamenu-list-item">
                              <a class="megamenu-list-link" href="/team">
                                Team{" "}
                              </a>
                            </li>
                            <li class="megamenu-list-item">
                              <a class="megamenu-list-link" href="/contact">
                                Contact{" "}
                              </a>
                            </li>
                            <li class="megamenu-list-item">
                              <a class="megamenu-list-link" href="/faq">
                                F.A.Q.s{" "}
                              </a>
                            </li>
                            <li class="megamenu-list-item">
                              <a
                                class="megamenu-list-link"
                                href="/coming-soon"
                              >
                                Coming soon{" "}
                              </a>
                            </li>
                            <li class="megamenu-list-item">
                              <a class="megamenu-list-link" href="/error-page">
                                404 page{" "}
                              </a>
                            </li>
                            <li class="megamenu-list-item">
                              <a class="megamenu-list-link" href="/terms">
                                Terms & Conditions{" "}
                                <span class="badge badge-info-light ms-1">
                                  New
                                </span>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <h6 className="text-uppercase">User</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item">
                              <a className="megamenu-list-link" href="/profile">
                                Owner Profile{" "}
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a className="megamenu-list-link" href="/account">
                                Account{" "}
                              </a>
                            </li>

                            {user ? (
                              <li className="megamenu-list-item">
                                <a
                                  className="megamenu-list-link"
                                  href="/"
                                  onClick={clearSession}
                                >
                                  Sign Out{" "}
                                </a>
                              </li>
                            ) : (
                              <li className="megamenu-list-item">
                                <a
                                  className="megamenu-list-link"
                                  href="/signin"
                                >
                                  Sign in{" "}
                                </a>
                              </li>
                            )}
                            {user ? null : (
                              <li className="megamenu-list-item">
                                <a
                                  className="megamenu-list-link"
                                  href="/signup"
                                >
                                  Sign up{" "}
                                </a>
                              </li>
                            )}
                            <li class="megamenu-list-item">
                              <a
                                class="megamenu-list-link"
                                href="/user-booking-1"
                              >
                                Booking process{" "}
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a
                                className="megamenu-list-link"
                                href="/booking-details"
                              >
                                Booking detail{" "}
                              </a>
                            </li>
                            <li class="megamenu-list-item">
                              <a
                                class="megamenu-list-link"
                                href="/messages"
                              >
                                Messages{" "}
                                <span class="badge badge-info-light ms-1">
                                  New
                                </span>{" "}
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a className="megamenu-list-link" href="/invoice">
                                Invoice{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="row megamenu-services d-none d-lg-flex ps-lg-5">
                        <div className="col-xl-3 col-lg-6 d-flex">
                          <div className="megamenu-services-item">
                            <svg className="svg-icon megamenu-services-icon">
                              <use xlinkHref="#destination-map-1" />
                            </svg>
                            <div>
                              <h6 className="text-uppercase">Best rentals</h6>
                              <p className="mb-0 text-muted text-sm">
                                Find the perfect place
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 d-flex">
                          <div className="megamenu-services-item">
                            <svg className="svg-icon megamenu-services-icon">
                              <use xlinkHref="#money-box-1"> </use>
                            </svg>
                            <div>
                              <h6 className="text-uppercase">Earn points</h6>
                              <p className="mb-0 text-muted text-sm">
                                And get great rewards
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 d-flex">
                          <div className="megamenu-services-item">
                            <svg className="svg-icon megamenu-services-icon">
                              <use xlinkHref="#customer-support-1"> </use>
                            </svg>
                            <div>
                              <h6 className="text-uppercase">
                                020-800-456-747
                              </h6>
                              <p className="mb-0 text-muted text-sm">
                                24/7 Available Support
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 d-flex">
                          <div className="megamenu-services-item">
                            <svg className="svg-icon megamenu-services-icon">
                              <use xlinkHref="#secure-payment-1"> </use>
                            </svg>
                            <div>
                              <h6 className="text-uppercase">Secure Payment</h6>
                              <p className="mb-0 text-muted text-sm">
                                Secure Payment
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 d-none d-lg-block position-relative">
                      <img
                        className="bg-image"
                        src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1521170665346-3f21e2291d8b.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>

              {user ? (
                <li className="nav-item">
                  <a className="nav-link" href="/" onClick={clearSession}>
                    Sign out
                  </a>
                </li>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="/signin">
                    Sign in
                  </a>
                </li>
              )}
              {user ? null : (
                <li className="nav-item">
                  <a className="nav-link" href="/signup">
                    Sign up
                  </a>
                </li>
              )}

              <li className="nav-item mt-3 mt-lg-0 ms-lg-3 d-lg-none d-xl-inline-block">
                <a className="btn btn-primary" href="/addListing">
                  Add a listing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
