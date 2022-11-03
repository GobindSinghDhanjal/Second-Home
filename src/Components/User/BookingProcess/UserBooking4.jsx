import React from "react";
import Card4 from "../../subComponents/Card4";
import Header from "../../subComponents/Header";

function UserBooking4() {
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
          style={{ width: "100%" }}
          aria-valuenow="100"
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
                Booking placed{" "}
                <span className="text-muted float-end">Step 4</span>{" "}
              </h1>
              <div className="text-block">
                <p className="text-muted">
                  Thank you for your booking, Ondrej.{" "}
                </p>
                <p className="text-muted mb-5">
                  Samsa was a travelling salesman - and above it there hung a
                  picture that he had recently cut out of an illustrated
                  magazine and housed in a nice, gilded frame.
                </p>
                <p className="text-center mb-5">
                  <a
                    className="btn btn-primary mx-2 mb-2"
                    href="/booking-details"
                  >
                    {" "}
                    <i className="far fa-file me-2"></i>View your order
                  </a>
                  <a className="btn btn-outline-muted mb-2" href="#">
                    Or something else
                  </a>
                </p>
                <p className="mb-5 text-center">
                  <img
                    className="img-fluid"
                    src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/illustration/undraw_celebration_0jvk.svg"
                    alt=""
                    style={{ width: "400px" }}
                  />
                </p>
              </div>
            </div>
            <Card4/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserBooking4;
