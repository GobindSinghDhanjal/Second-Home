import React, { useEffect } from "react";
import Header from "../../subComponents/Header";
import { places } from "../../../shared/data";
import Rating from "../../subComponents/Rating";
import Card4 from "../../subComponents/Card4";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleHome } from "../../../Redux";
import { Link } from "react-router-dom";

function UserBooking1() {
  //////////////   FINDING GUEST   ////////////////
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");

  const homeData = useSelector(state=>state.homes)
  const place = useSelector(state=>state.homes.home)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleHome(title));
  }, []);

  ////////////////////////  GETTING ALL THE PARAMS   //////////////////////////////
  const checkIn = new Date(params.get("checkIn"));
  const checkOut = new Date(params.get("checkOut"));
  const guest = params.get("guest");

  const numOfNights = Math.floor((checkOut - checkIn) / (1000 * 60 * 60 * 24));

  const url = "/user-booking-2?title="+title+"&guest="+guest+"&checkIn="+checkIn+"&checkOut="+checkOut;

  return homeData.loading ? ( <h1>Loading</h1> ) : homeData.error ? ( <h1>Error</h1> ) : (
    <div>
      <Header />
      <br />
      <br />
      <div
        className="progress rounded-0 sticky-top"
        style={{ height: "8px", top: "72px" }}
      >
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "33.33%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <p className="subtitle text-primary">Book your holiday home</p>
              <h1 className="h2 mb-5">
                {" "}
                Review house rules{" "}
                <span className="text-muted float-end">Step 1</span>{" "}
              </h1>
              <div className="text-block">
                <div className="alert alert-warning text-sm mb-3">
                  <div className="d-flex align-items-center">
                    <svg className="svg-icon svg-icon svg-icon-light w-2rem h-2rem me-3 text-reset flex-shrink-0">
                      <use xlinkHref="#heart-1"> </use>
                    </svg>
                    <div>
                      <strong>This home is on people’s minds.</strong> It’s been
                      viewed 43 times in the past week.
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-block">
                <h5 className="mb-4">
                  {numOfNights} night in {place.location}
                </h5>
                <div className="row mb-3">
                  <div className="col-md-6 d-flex align-items-center mb-3 mb-md-0">
                    <div className="date-tile me-3">
                      <div className="text-uppercase">
                        {" "}
                        <span className="text-sm">
                          {checkIn.toLocaleString("default", {
                            month: "short",
                          })}
                        </span>
                        <br />
                        <strong className="text-lg">{checkIn.getDate()}</strong>
                      </div>
                    </div>
                    <p className="text-sm mb-0">
                      {checkIn.toLocaleDateString("en-IN", { weekday: "long" })}{" "}
                      check-in
                      <br />
                      3PM - 7PM
                    </p>
                  </div>
                  <div className="col-md-6 d-flex align-items-center">
                    <div className="date-tile me-3">
                      <div className="text-uppercase">
                        {" "}
                        <span className="text-sm">
                          {checkOut.toLocaleString("default", {
                            month: "short",
                          })}
                        </span>
                        <br />
                        <strong className="text-lg">
                          {checkOut.getDate()}
                        </strong>
                      </div>
                    </div>
                    <p className="text-sm mb-0">
                      {checkOut.toLocaleDateString("en-IN", {
                        weekday: "long",
                      })}{" "}
                      check-out
                      <br />
                      11AM
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-block">
                <h5 className="mb-4">Things to keep in mind</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-rounded icon-rounded-sm bg-secondary-light flex-shrink-0 me-4">
                        <i className="fa fas fa-child text-secondary fa-fw text-center"></i>
                      </div>
                      <div>
                        <span className="text-sm">
                          Not suitable for children and infants - The entrance
                          staircase doesn't have handrails
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="mb-2">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-rounded icon-rounded-sm bg-secondary-light flex-shrink-0 me-4">
                        <i className="fa fas fa-glass-cheers text-secondary fa-fw text-center"></i>
                      </div>
                      <div>
                        <span className="text-sm">No parties or events</span>
                      </div>
                    </div>
                  </li>
                  <li className="mb-2">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-rounded icon-rounded-sm bg-secondary-light flex-shrink-0 me-4">
                        <i className="fa fa-smoking-ban text-secondary fa-fw text-center"></i>
                      </div>
                      <div>
                        <span className="text-sm">No smoking</span>
                      </div>
                    </div>
                  </li>
                  <li className="mb-2">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-rounded icon-rounded-sm bg-secondary-light flex-shrink-0 me-4">
                        <i className="fa fa-cat text-secondary fa-fw text-center"></i>
                      </div>
                      <div>
                        <span className="text-sm">No pets</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="row form-block flex-column flex-sm-row">
                <div className="col text-center text-sm-start"></div>
                <div className="col text-center text-sm-end">
                  <Link className="btn btn-primary px-3" to={url}>
                    {" "}
                    Next step<i className="fa-chevron-right fa ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <Card4 />
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserBooking1;
