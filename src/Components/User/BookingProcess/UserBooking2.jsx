import React, { useEffect } from "react";
import { places } from "../../../shared/data";
import Card4 from "../../subComponents/Card4";
import Header from "../../subComponents/Header";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";

import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleHome } from "../../../Redux";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function UserBooking2() {
  const { loginWithRedirect } = useAuth0();

  const { user, isAuthenticated, isLoading } = useAuth0();

  //////////////////GETTING TOKEN /////////////////////

  const token = localStorage.getItem("token");

  //////////////   FINDING GUEST   ////////////////
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");


  const homeData = useSelector((state) => state.homes);
  const place = useSelector((state) => state.homes.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleHome(title));
  }, []);

  ////////////////////////  GETTING ALL THE PARAMS   //////////////////////////////
  const checkIn = new Date(params.get("checkIn"));
  const checkOut = new Date(params.get("checkOut"));
  const guest = params.get("guest");

  const urlPrev =
    "/user-booking-1?title=" +
    title +
    "&guest=" +
    guest +
    "&checkIn=" +
    checkIn +
    "&checkOut=" +
    checkOut;

  const urlNext =
    "/user-booking-4?title=" +
    title +
    "&guest=" +
    guest +
    "&checkIn=" +
    checkIn +
    "&checkOut=" +
    checkOut;

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay(e) {
    e.preventDefault();

    if (!isAuthenticated) {
      const url =
        "/user-booking-2?title=" +
        title +
        "&guest=" +
        guest +
        "&checkIn=" +
        checkIn +
        "&checkOut=" +
        checkOut;
      loginWithRedirect({ appState: { targetUrl: url } });

      return;
    }

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    console.log(user);

    const params = new URLSearchParams();
    // params.append("token", token);
    params.append("user", user.email);
    params.append("place_id", place._id);
    params.append("checkIn", checkIn);
    params.append("checkOut", checkOut);

    // creating a new order
    const result = await axios
      .post("http://localhost:4000/payment/orders", params)
      .catch((err) => {
        console.log(err);
      });

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency, notes } = result.data;

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Stay Alohas",
      description: "Test Transaction",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          notes: notes,
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
          amount: amount / 100,
        };

        const result = await axios.post(
          "http://localhost:4000/payment/success",
          data
        );

        if (result.data.msg === "success") {
          window.location.href = urlNext;
        } else {
          alert("Transaction failed , Please Retry");
        }
      },
      prefill: {
        name: "Soumya Dey",
        email: "SoumyaDey@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);

    paymentObject.open();
  }

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
          style={{ width: "66.66%" }}
          aria-valuenow="50"
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
                Who's coming?{" "}
                <span className="text-muted float-end">Step 2</span>{" "}
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

              <form onSubmit={displayRazorpay}>
                <div className="text-block">
                  <label className="h5" htmlFor="form_guests">
                    {guest} Guests
                  </label>
                  <p className="text-sm text-muted">
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed in.
                  </p>

                  {Array.from({ length: guest }, (_, i) => (
                    <div key={i} className="row">
                      <div className="col-lg-4 mb-3">
                        <TextField
                          required
                          id="outlined-basic"
                          label={`Guest ${i + 1} Name`}
                          variant="outlined"
                        />
                      </div>
                      <div className="col-lg-2 mb-3">
                        <TextField
                          required
                          id="outlined-basic"
                          label="Age"
                          variant="outlined"
                          type="number"
                          InputProps={{
                            inputProps: {
                              max: 100,
                              min: 10,
                            },
                          }}
                        />
                      </div>
                    </div>
                  ))}
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
                    <Link className="btn btn-link text-muted" to={urlPrev}>
                      {" "}
                      <i className="fa-chevron-left fa me-2"></i>Back
                    </Link>
                  </div>
                  <div className="col text-center text-sm-end">
                    <button className="btn btn-primary px-3" type="submit">
                      {" "}
                      Pay Now<i className="fa-chevron-right fa ms-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <Card4 />
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserBooking2;
