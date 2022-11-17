import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";

function Header() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  // const token = localStorage.getItem("token");

  // function clearSession() {
  //   localStorage.clear();   ///////////////   Clearing the jwt token  ///////////////
  // }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  console.log("User : ");
  console.log(user);
  console.log("Authenticated : ");
  console.log(isAuthenticated);

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <Link className="navbar-brand py-1" to="/">
              <img
                src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/logo.svg"
                alt="Directory logo"
              />
            </Link>
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
                <Link
                  className="nav-link dropdown-toggle active"
                  id="homeDropdownMenuLink"
                  to="/"
                  data-bs-toggle="dropdown"
                >
                  Home
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="homeDropdownMenuLink"
                >
                  <Link className="dropdown-item" to="/real-estate">
                    Real Estate
                  </Link>
                </div>
              </li>

              <li className="nav-item dropdown position-static">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  data-bs-toggle="dropdown"
                >
                  Template
                </Link>
                <div
                  className="dropdown-menu megamenu py-lg-0"
                  style={{ marginTop: "-30px" }}
                >
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="row p-3 pe-lg-0 ps-lg-5 pt-lg-5">
                        <div className="col-lg-3">
                          <h6 className="text-uppercase">Homepage</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item">
                              <Link
                                className="megamenu-list-link"
                                to="/real-estate"
                              >
                                Real estate{" "}
                                <span className="badge badge-info-light ms-1">
                                  New
                                </span>{" "}
                              </Link>
                            </li>
                          </ul>

                          <h6 className="text-uppercase">Rooms</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item">
                              <Link
                                className="megamenu-list-link"
                                to="/category"
                              >
                                Category - Map on the right{" "}
                              </Link>
                            </li>
                          </ul>
                          {/* <!-- Megamenu list--> */}
                          <h6 className="text-uppercase">Blog</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item">
                              <Link className="megamenu-list-link" to="/blog">
                                Blog{" "}
                              </Link>
                            </li>
                            <li className="megamenu-list-item">
                              <Link className="megamenu-list-link" to="/post">
                                Post{" "}
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          {/* <!-- Megamenu list--> */}
                          <h6 className="text-uppercase">Pages</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item">
                              <Link className="megamenu-list-link" to="/team">
                                Team{" "}
                              </Link>
                            </li>
                            <li className="megamenu-list-item">
                              <Link
                                className="megamenu-list-link"
                                to="/contact"
                              >
                                Contact{" "}
                              </Link>
                            </li>
                            <li className="megamenu-list-item">
                              <Link className="megamenu-list-link" to="/faq">
                                F.A.Q.s{" "}
                              </Link>
                            </li>
                            <li className="megamenu-list-item">
                              <Link
                                className="megamenu-list-link"
                                to="/coming-soon"
                              >
                                Coming soon{" "}
                              </Link>
                            </li>
                            <li className="megamenu-list-item">
                              <Link
                                className="megamenu-list-link"
                                to="/error-page"
                              >
                                404 page{" "}
                              </Link>
                            </li>
                            <li className="megamenu-list-item">
                              <Link className="megamenu-list-link" to="/terms">
                                Terms & Conditions{" "}
                                <span className="badge badge-info-light ms-1">
                                  New
                                </span>{" "}
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <h6 className="text-uppercase">User</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item">
                              <Link
                                className="megamenu-list-link"
                                to="/profile"
                              >
                                Owner Profile{" "}
                              </Link>
                            </li>
                            <li className="megamenu-list-item">
                              <Link
                                className="megamenu-list-link"
                                to="/account"
                              >
                                Account{" "}
                              </Link>
                            </li>

                            {isAuthenticated ? (
                              <li className="megamenu-list-item">
                                <Link className="megamenu-list-link" to="/">
                                  <LogoutButton />
                                </Link>
                              </li>
                            ) : (
                              <li className="megamenu-list-item">
                                <Link className="megamenu-list-link">
                                  <LoginButton />
                                  {/* Sign in{" "} */}
                                </Link>
                              </li>
                            )}
                            <li className="megamenu-list-item">
                              <Link
                                className="megamenu-list-link"
                                to="/user-booking-1"
                              >
                                Booking process{" "}
                              </Link>
                            </li>
                            <li className="megamenu-list-item">
                              <Link
                                className="megamenu-list-link"
                                to="/booking-details"
                              >
                                Booking detail{" "}
                              </Link>
                            </li>
                            <li className="megamenu-list-item">
                              <Link
                                className="megamenu-list-link"
                                to="/messages"
                              >
                                Messages{" "}
                                <span className="badge badge-info-light ms-1">
                                  New
                                </span>{" "}
                              </Link>
                            </li>
                            <li className="megamenu-list-item">
                              <Link
                                className="megamenu-list-link"
                                to="/invoice"
                              >
                                Invoice{" "}
                              </Link>
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
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              {isAuthenticated ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <LogoutButton />
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link">
                    <LoginButton />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
