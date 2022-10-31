import React from "react";
import Header from "../../subComponents/Header";

function UserBooking2() {
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
              <div class="text-block">
                <h5>What's the main purpose of this trip?</h5>
                <p class="text-sm text-muted">
                  The bedding was hardly able to cover it and seemed ready to
                  slide off any moment. His many legs, pit.
                </p>
                <ul class="list-unstyled">
                  <li>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="purpose_0"
                        name="purpose"
                      />
                      <label class="form-check-label" for="purpose_0">
                        Personal travel{" "}
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="purpose_1"
                        name="purpose"
                      />
                      <label class="form-check-label" for="purpose_1">
                        Business travel{" "}
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="text-block">
                <div class="d-flex">
                  <div>
                    <h5>Say hello to your host</h5>
                    <p class="text-sm text-muted">
                      His room, a proper human room although a little too small,
                      lay peacefully between its four familiar .
                    </p>
                  </div>
                  <img
                    class="avatar avatar-md p-1 flex-shrink-0 ms-4"
                    src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-10.jpg"
                    alt="Jack London"
                  />
                </div>
                <textarea class="form-control" name="hello" rows="4"></textarea>
              </div>
              <div class="row form-block flex-column flex-sm-row">
                <div class="col text-center text-sm-start">
                  <a class="btn btn-link text-muted" href="/user-booking-1">
                    {" "}
                    <i class="fa-chevron-left fa me-2"></i>Back
                  </a>
                </div>
                <div class="col text-center text-sm-end">
                  <a class="btn btn-primary px-3" href="/user-booking-3">
                    {" "}
                    Next step<i class="fa-chevron-right fa ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-5 ps-xl-5">
              <div class="card border-0 shadow">
                <div class="card-body p-4">
                  <div class="text-block pb-3">
                    <div class="d-flex align-items-center">
                      <div>
                        <h6>
                          {" "}
                          <a class="text-reset" href="/detail-rooms">
                            Modern Apt - Vibrant Neighborhood
                          </a>
                        </h6>
                        <p class="text-muted text-sm mb-0">
                          Entire home in New York
                        </p>
                        <div class="mt-n1">
                          <i class="fa fa-xs fa-star text-primary"></i>
                          <i class="fa fa-xs fa-star text-primary"></i>
                          <i class="fa fa-xs fa-star text-primary"></i>
                          <i class="fa fa-xs fa-star text-primary"></i>
                          <i class="fa fa-xs fa-star text-gray-200"></i>
                        </div>
                      </div>
                      <a class="flex-shrink-0" href="/detail-rooms">
                        <img
                          class="ms-3 rounded"
                          src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1512917774080-9991f1c4c750.jpg"
                          alt=""
                          width="100"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="text-block py-3">
                    <ul class="list-unstyled mb-0">
                      <li class="mb-3">
                        <i class="fas fa-users fa-fw text-muted me-2"></i>3
                        guests
                      </li>
                      <li class="mb-0">
                        <i class="far fa-calendar fa-fw text-muted me-2"></i>Apr
                        17, 2019{" "}
                        <i class="fas fa-arrow-right fa-fw text-muted mx-3"></i>
                        Apr 18, 2019
                      </li>
                    </ul>
                  </div>
                  <div class="text-block pt-3 pb-0">
                    <table class="w-100">
                      <tbody>
                        <tr>
                          <th class="fw-normal py-2">$432.02 x 1 night</th>
                          <td class="text-end py-2">$432.02</td>
                        </tr>
                        <tr>
                          <th class="fw-normal pt-2 pb-3">Service fee</th>
                          <td class="text-end pt-2 pb-3">$67.48</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr class="border-top">
                          <th class="pt-3">Total</th>
                          <td class="fw-bold text-end pt-3">$499.50</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <div class="card-footer bg-primary-light py-4 border-0">
                  <div class="d-flex align-items-center">
                    <div>
                      <h6 class="text-primary">Flexible – free cancellation</h6>
                      <p class="text-sm text-primary opacity-8 mb-0">
                        Cancel within 48 hours of booking to get a full refund.{" "}
                        <a href="#" class="text-reset ms-3">
                          More details
                        </a>
                      </p>
                    </div>
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

export default UserBooking2;
