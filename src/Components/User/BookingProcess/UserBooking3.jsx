import React from "react";
import Card4 from "../../subComponents/Card4";
import Header from "../../subComponents/Header";
import axios from "axios";
import { ReactSession }  from 'react-client-session';
import { places } from "../../../shared/data";

function UserBooking3() {
  //////////////   FINDING GUEST   ////////////////
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");
  const place = places.find((e) => {
    return e.title === title;
  });

  ////////////////////////  GETTING ALL THE PARAMS   //////////////////////////////
  const checkIn = new Date(params.get("checkIn"));
  const checkOut = new Date(params.get("checkOut"));
  const guest = params.get("NumOfGuests");



  const urlPrev =
    "/user-booking-2?title=" +
    title +
    "&checkIn=" +
    checkIn +
    "&checkOut=" +
    checkOut;

  const urlNext =
    "/user-booking-4?title=" +
    title +
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

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const params = new URLSearchParams();
    params.append("username",ReactSession.get("username"));
    params.append("place_id", place.id);
    params.append("checkIn",checkIn);
    params.append("checkOut",checkOut);


    // creating a new order
    const result = await axios
      .post("http://localhost:4000/payment/orders",params)
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
          amount: (amount/100)
        };


        const result = await axios.post(
          "http://localhost:4000/payment/success",
          data
        );

        if(result.data.msg==="success"){
          window.location.href=urlNext;
        }else{
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
              {/* <div className="text-block">
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
              </div> */}
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
                  <a className="btn btn-link text-muted" href={urlPrev}>
                    {" "}
                    <i className="fa-chevron-left fa me-2"></i>Back
                  </a>
                </div>
                <div className="col text-center text-sm-end">
                  <button
                    className="btn btn-primary px-3"
                    onClick={displayRazorpay}
                  >
                    {" "}
                    Pay Now<i className="fa-chevron-right fa ms-2"></i>
                  </button>
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

export default UserBooking3;
