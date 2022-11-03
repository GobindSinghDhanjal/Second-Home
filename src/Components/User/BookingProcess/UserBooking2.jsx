import React from "react";
import { places } from "../../../shared/data";
import Card4 from "../../subComponents/Card4";
import Header from "../../subComponents/Header";

function UserBooking2() {
  //////////////   FINDING GUEST   ////////////////
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");

  ////////////////////////  GETTING ALL THE PARAMS   //////////////////////////////
  const checkIn = new Date(params.get("checkIn"));
  const checkOut = new Date(params.get("checkOut"));
  const guest = params.get("NumOfGuests");

  const urlPrev =
    "/user-booking-1?title=" +
    title +
    "&checkIn=" +
    checkIn +
    "&checkOut=" +
    checkOut;

  const urlNext =
    "/user-booking-3?title=" +
    title +
    "&checkIn=" +
    checkIn +
    "&checkOut=" +
    checkOut;

  return (
    <div>
      <Header />
      <br />
      <br />
      <div
        class="progress rounded-0 sticky-top"
        style={{ height: "8px", top: "72px" }}
      >
        <div
          class="progress-bar"
          role="progressbar"
          style={{ width: "50%" }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <p class="subtitle text-primary">Book your holiday home</p>
              <h1 class="h2 mb-5">
                {" "}
                Who's coming? <span class="text-muted float-end">
                  Step 2
                </span>{" "}
              </h1>
              <div class="text-block">
                <div class="alert alert-warning text-sm mb-3">
                  <div class="d-flex align-items-center">
                    <svg class="svg-icon svg-icon svg-icon-light w-2rem h-2rem me-3 text-reset flex-shrink-0">
                      <use xlinkHref="#heart-1"> </use>
                    </svg>
                    <div>
                      <strong>This home is on people’s minds.</strong> It’s been
                      viewed 43 times in the past week.
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-block">
                <label class="h5" for="form_guests">
                  Guests
                </label>
                <p class="text-sm text-muted">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed in.
                </p>
                <div class="row">
                  <div class="col-lg-6 mb-3">
                    <select
                      class="selectpicker form-control"
                      name="guests"
                      id="form_guests"
                      data-style="btn-selectpicker"
                      title=" "
                    >
                      <option value="guests_0">1</option>
                      <option value="guests_1">2</option>
                      <option value="guests_2" selected>
                        3
                      </option>
                      <option value="guests_3">4</option>
                      <option value="guests_4">5</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row form-block flex-column flex-sm-row">
                <div class="col text-center text-sm-start">
                  <a class="btn btn-link text-muted" href={urlPrev}>
                    {" "}
                    <i class="fa-chevron-left fa me-2"></i>Back
                  </a>
                </div>
                <div class="col text-center text-sm-end">
                  <a class="btn btn-primary px-3" href={urlNext}>
                    {" "}
                    Next step<i class="fa-chevron-right fa ms-2"></i>
                  </a>
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

export default UserBooking2;
