import React from "react";
import Header from "../../subComponents/Header";

function UserBooking3() {
  return (
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
          style={{ width: "75%" }}
          aria-valuenow="75"
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
                Confirm and pay{" "}
                <span className="text-muted float-end">Step 3</span>{" "}
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
                <form action="#">
                  <div className="d-flex justify-content-between align-items-end mb-4">
                    <h5 className="mb-0">Pay with your card</h5>
                    <div className="text-muted">
                      <i className="fab fa-cc-amex fa-2x me-2"> </i>
                      <i className="fab fa-cc-visa fa-2x me-2"> </i>
                      <i className="fab fa-cc-mastercard fa-2x"></i>
                    </div>
                  </div>
                  <select
                    className="selectpicker form-control mb-3"
                    name="payment"
                    id="form_payment"
                    data-style="btn-selectpicker"
                  >
                    <option value="">Visa •••• 5687</option>
                    <option value="">Mastercard •••• 4569</option>
                  </select>
                  <button
                    className="btn btn-link btn-collapse ps-0 text-muted"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#addNewCard"
                    aria-expanded="false"
                    aria-controls="addNewCard"
                    data-expanded-text="Close"
                    data-collapsed-text="Add a new card"
                  >
                    Add a new card
                  </button>
                  <div className="row collapse" id="addNewCard">
                    <div className="mb-4 col-md-6">
                      <label className="form-label" for="card-name">
                        Name on Card
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="card-name"
                        placeholder="Name on card"
                        id="card-name"
                      />
                    </div>
                    <div className="mb-4 col-md-6">
                      <label className="form-label" for="card-number">
                        Card Number
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="card-number"
                        placeholder="Card number"
                        id="card-number"
                      />
                    </div>
                    <div className="mb-4 col-md-4">
                      <label className="form-label" for="expiry-date">
                        Expiry Date
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="expiry-date"
                        placeholder="MM/YY"
                        id="expiry-date"
                      />
                    </div>
                    <div className="mb-4 col-md-4">
                      <label className="form-label" for="cvv">
                        CVC/CVV
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="cvv"
                        placeholder="123"
                        id="cvv"
                      />
                    </div>
                    <div className="mb-4 col-md-4">
                      <label className="form-label" for="zip">
                        ZIP
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="zip"
                        placeholder="123"
                        id="zip"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="text-block">
                <h6>Cancellation policy</h6>
                <p className="text-sm text-muted">
                  Samsa was a travelling salesman - and above it there hung a
                  picture that he had recently cut out of .
                </p>
                <p className="text-sm text-muted">
                  He must have tried it a hundred times, shut his eyes so that
                  he wouldn't have to look at the flounde.
                </p>
              </div>
              <div className="row form-block flex-column flex-sm-row">
                <div className="col text-center text-sm-start">
                  <a
                    className="btn btn-link text-muted"
                    href="/user-booking-2"
                  >
                    {" "}
                    <i className="fa-chevron-left fa me-2"></i>Back
                  </a>
                </div>
                <div className="col text-center text-sm-end">
                  <a
                    className="btn btn-primary px-3"
                    href="/user-booking-4"
                  >
                    {" "}
                    Next step<i className="fa-chevron-right fa ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 ps-xl-5">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <div className="text-block pb-3">
                    <div className="d-flex align-items-center">
                      <div>
                        <h6>
                          {" "}
                          <a className="text-reset" href="/detail-rooms">
                            Modern Apt - Vibrant Neighborhood
                          </a>
                        </h6>
                        <p className="text-muted text-sm mb-0">
                          Entire home in New York
                        </p>
                        <div className="mt-n1">
                          <i className="fa fa-xs fa-star text-primary"></i>
                          <i className="fa fa-xs fa-star text-primary"></i>
                          <i className="fa fa-xs fa-star text-primary"></i>
                          <i className="fa fa-xs fa-star text-primary"></i>
                          <i className="fa fa-xs fa-star text-gray-200"></i>
                        </div>
                      </div>
                      <a className="flex-shrink-0" href="/detail-rooms">
                        <img
                          className="ms-3 rounded"
                          src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1512917774080-9991f1c4c750.jpg"
                          alt=""
                          width="100"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="text-block py-3">
                    <ul className="list-unstyled mb-0">
                      <li className="mb-3">
                        <i className="fas fa-users fa-fw text-muted me-2"></i>3
                        guests
                      </li>
                      <li className="mb-0">
                        <i className="far fa-calendar fa-fw text-muted me-2"></i>
                        Apr 17, 2019{" "}
                        <i className="fas fa-arrow-right fa-fw text-muted mx-3"></i>
                        Apr 18, 2019
                      </li>
                    </ul>
                  </div>
                  <div className="text-block pt-3 pb-0">
                    <table className="w-100">
                      <tbody>
                        <tr>
                          <th className="fw-normal py-2">$432.02 x 1 night</th>
                          <td className="text-end py-2">$432.02</td>
                        </tr>
                        <tr>
                          <th className="fw-normal pt-2 pb-3">Service fee</th>
                          <td className="text-end pt-2 pb-3">$67.48</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="border-top">
                          <th className="pt-3">Total</th>
                          <td className="fw-bold text-end pt-3">$499.50</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <div className="card-footer bg-primary-light py-4 border-0">
                  <div className="d-flex align-items-center">
                    <div>
                      <h6 className="text-primary">
                        Flexible – free cancellation
                      </h6>
                      <p className="text-sm text-primary opacity-8 mb-0">
                        Cancel within 48 hours of booking to get a full refund.{" "}
                        <a href="#" className="text-reset ms-3">
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

export default UserBooking3;
