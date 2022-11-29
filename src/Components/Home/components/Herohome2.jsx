import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import "react-datepicker/dist/react-datepicker.css";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useNavigate } from "react-router";
import { Autocomplete } from "@mui/material";

function Herohome2() {
  const [checkIn, setCheckIn] = React.useState(null);
  const [checkOut, setCheckOut] = React.useState(null);
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  function onSearch(e) {
    e.preventDefault();

    navigate("/category?location=" + location);
  }

  const cities = [
    { label: "Mumbai" },
    { label: "Delhi" },
    { label: "Goa" },
    { label: "Agra" },
    { label: "Chennai" },
  ];

  return (
    <section className="hero-home">
      <div className="swiper-container hero-slider">
        <div className="swiper-wrapper dark-overlay">
          <div
            className="swiper-slide"
            style={{
              backgroundImage: `url("https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1501621965065-c6e1cf6b53e2.jpg")`,
            }}
          ></div>
          <div
            className="swiper-slide"
            style={{
              backgroundImage: `url("https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1519974719765-e6559eac2575.jpg")`,
            }}
          ></div>
          <div
            className="swiper-slide"
            style={{
              backgroundImage: `url("https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1490578474895-699cd4e2cf59.jpg")`,
            }}
          ></div>
          <div
            className="swiper-slide"
            style={{
              backgroundImage: `url("https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1534850336045-c6c6d287f89e.jpg")`,
            }}
          ></div>
        </div>
      </div>
      <div className="container py-6 py-md-7 text-white z-index-20">
        <div className="row">
          <div className="col-xl-10">
            <div className="text-center text-lg-start">
              <p className="subtitle letter-spacing-4 mb-2 text-secondary text-shadow">
                The best holiday experience
              </p>
              <h1 className="display-3 fw-bold text-shadow">
                Stay like a local
              </h1>
            </div>
            <div className="search-bar mt-5 p-4 p-lg-1 ps-lg-4">
              <form onSubmit={onSearch}>
                <div className="row">
                  <div className="col-lg-4 d-flex align-items-center form-group no-divider">
                    <div className="input-label-absolute input-label-absolute-right w-100">
                      {/* <label className="label-absolute" htmlFor="location">
                        <i className="fa fa-crosshairs"></i>
                        <span className="sr-only">City</span>
                      </label> */}
                      {/* <input
                        className="form-control border-0 shadow-0"
                        type="text"
                        name="location"
                        placeholder="Location"
                        id="location"
                        value={location}
                        onChange={e=>setLocation(e.target.value)}
                      /> */}
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={cities}
                        renderInput={(params) => (
                          <TextField
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            {...params}
                            label="Location"
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 d-flex align-items-center form-group no-divider">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Check In"
                        className="datetime-picker-mobile"
                        inputFormat="DD MMM YYYY"
                        disableMaskedInput
                        value={checkIn}
                        disablePast
                        onChange={(newValue) => {
                          setCheckIn(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </div>
                  <div
                    className="col-lg-3 d-flex align-items-center form-group no-divider"
                    style={{ padding: "10px" }}
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Check Out"
                        value={checkOut}
                        className="datetime-picker-mobile"
                        inputFormat="DD MMM YYYY"
                        disableMaskedInput
                        minDate={checkIn}
                        disablePast
                        onChange={(newValue) => {
                          setCheckOut(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </div>
                  <div className="col-lg-2 d-grid">
                    <button
                      className="btn btn-primary rounded-pill h-100"
                      type="submit"
                    >
                      Search{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herohome2;
