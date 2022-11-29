import React, { useEffect, useState } from "react";
import { places, reviews } from "../../shared/data";
import Card1 from "../subComponents/Card1";
import Header from "../subComponents/Header";
import Review from "../subComponents/Review";
import { useSearchParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomes, fetchSingleHome } from "../../Redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import LocationMap from "../subComponents/LocationMap";
import Delayed from "../subComponents/Delayed";
import Card1Group from "../subComponents/Card1Group";

function DetailRoom() {

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");

  const[title2, setTitle] = useState(searchParams.get("title"));

  const navigate = useNavigate();

  const homeData = useSelector((state) => state.homes);
  const place = useSelector((state) => state.homes.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleHome(title));
    dispatch(fetchHomes());
    console.log(title2);
    setTitle(searchParams.get("title"));
    console.log(title2);
  }, [dispatch]);

  const today = new Date();
  var nextDay = new Date();
  nextDay.setDate(today.getDate() + 1);

  const [checkIn, setCheckIn] = React.useState(today);
  const [checkOut, setCheckOut] = React.useState(nextDay);

  const [NumOfGuests, setNumOfGuests] = React.useState();

  function onBooking(e) {
    e.preventDefault();

    const url =
      "/user-booking-1?title=" +
      title +
      "&guest=" +
      NumOfGuests +
      "&checkIn=" +
      checkIn +
      "&checkOut=" +
      checkOut;
    navigate(url);
  }

  const numberFormat = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);


    var price = Math.round(
      place.price *
        place.monthwise_season_factor)

  return homeData.loading ? (
    <h1>Loading</h1>
  ) : homeData.error ? (
    <h1>Error</h1>
  ) : !place ?(<div>Loading</div>):
  !(place.coordinates)?(<div>Loading</div>) :(
    <Delayed waitBeforeShow={200}>
    <div>
  
      {console.log(homeData)}
      <Header key="" />
      <br />
      <br />
      <section>
        {/* <!-- Slider main container--> */}
        <Swiper
          loop={true}
          className="pb-2"
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 0 },
            500: { slidesPerView: 1.3, spaceBetween: 0 },
            750: { slidesPerView: 2, spaceBetween: 0 },
            900: { sliderPerView: 3.5, spaceBetween: 0 },
          }}
          centeredSlides
          centeredSlidesBounds
          slidesPerView={3.5}
        >
          <SwiperSlide>
            <div className="swiper-slide">
              {" "}
              <a
                href="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1426122402199-be02db90eb90.jpg"
                data-toggle="gallery-top"
                title="Our street"
              >
                <img
                  className="img-fluid"
                  src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1426122402199-be02db90eb90.jpg"
                  alt="Our street"
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              {" "}
              <a
                href="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1426122402199-be02db90eb90.jpg"
                data-toggle="gallery-top"
                title="Our street"
              >
                <img
                  className="img-fluid"
                  src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1426122402199-be02db90eb90.jpg"
                  alt="Our street"
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              {" "}
              <a
                href="img/photo/photo-1512917774080-9991f1c4c750.jpg"
                data-toggle="gallery-top"
                title="Outside"
              >
                <img
                  className="img-fluid"
                  src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1512917774080-9991f1c4c750.jpg"
                  alt="Outside"
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              {" "}
              <a
                href="img/photo/photo-1494526585095-c41746248156.jpg"
                data-toggle="gallery-top"
                title="Rear entrance"
              >
                <img
                  className="img-fluid"
                  src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1494526585095-c41746248156.jpg"
                  alt="Rear entrance"
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              {" "}
              <a
                href="img/photo/photo-1488805990569-3c9e1d76d51c.jpg"
                data-toggle="gallery-top"
                title="Bedroom"
              >
                <img
                  className="img-fluid"
                  src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1488805990569-3c9e1d76d51c.jpg"
                  alt="Bedroom"
                />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="text-block">
              <p className="text-primary">
                <i className="fa-map-marker-alt fa me-1"></i>
                {place.location}
              </p>
              <h1>{place.title}</h1>
              <p className=" text-uppercase mb-4">{place.type} </p>
              <ul className="list-inline text-sm mb-4">
                <li className="list-inline-item me-3">
                  <i className="fa fa-users me-1 text-secondary"></i>{" "}
                  {place.guests} guests
                </li>
                <li className="list-inline-item me-3">
                  <i className="fa fa-door-open me-1 text-secondary"></i>{" "}
                  {place.bedroom} bedroom
                </li>
                <li className="list-inline-item me-3">
                  <i className="fa fa-bed me-1 text-secondary"></i> {place.bed}{" "}
                  beds
                </li>
                <li className="list-inline-item me-3">
                  <i className="fa fa-bath me-1 text-secondary"></i>{" "}
                  {place.washrooms} bath
                </li>
              </ul>
           {place.description}
  
      
            </div>
            <div className="text-block">
              <h4 className="mb-4">Amenities</h4>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled ">
                    <li className="mb-2">
                      {" "}
                      <i className="fa fa-wifi text-secondary w-1rem me-3 text-center"></i>
                      <span className="text-sm">Wifi</span>
                    </li>
                    <li className="mb-2">
                      {" "}
                      <i className="fa fa-tv text-secondary w-1rem me-3 text-center"></i>
                      <span className="text-sm">Cable TV</span>
                    </li>
                    <li className="mb-2">
                      {" "}
                      <i className="fa fa-snowflake text-secondary w-1rem me-3 text-center"></i>
                      <span className="text-sm">Air conditioning</span>
                    </li>
                    <li className="mb-2">
                      {" "}
                      <i className="fa fa-thermometer-three-quarters text-secondary w-1rem me-3 text-center"></i>
                      <span className="text-sm">Heating</span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled ">
                    <li className="mb-2">
                      {" "}
                      <i className="fa fa-bath text-secondary w-1rem me-3 text-center"></i>
                      <span className="text-sm">Toiletteries</span>
                    </li>
                    <li className="mb-2">
                      {" "}
                      <i className="fa fa-utensils text-secondary w-1rem me-3 text-center"></i>
                      <span className="text-sm">Equipped Kitchen</span>
                    </li>
                    <li className="mb-2">
                      {" "}
                      <i className="fa fa-laptop text-secondary w-1rem me-3 text-center"></i>
                      <span className="text-sm">Desk for work</span>
                    </li>
                    <li className="mb-2">
                      {" "}
                      <i className="fa fa-tshirt text-secondary w-1rem me-3 text-center"></i>
                      <span className="text-sm">Washing machine</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-block">
              <h4 className="mb-0">Amenities alternative</h4>
              <p className="subtitle text-sm text-grey-700 mb-4">
                Alternative amenities display
              </p>
              <ul className="list-inline">
              {place.amenities.map(amenity=>{
                return(
                  <li className="list-inline-item mb-2">
                  <span className="badge rounded-pill bg-primary p-3  fw-normal">
                    {amenity}
                  </span>
                </li>
                )
              })}
              </ul>
            </div>
            <div className="text-block">
              <h5 className="mb-4">Listing location</h5>
              <div className="map-wrapper-300 mb-3">
                <Delayed waitBeforeShow={1500}>
                  <LocationMap
                    center={{lat: place.coordinates.latitude, lng: place.coordinates.longitude}}
                  />
                </Delayed>
              </div>
            </div>
            <div className="text-block">
              <h5 className="mb-4">Gallery</h5>
              <div className="row gallery mb-3 ms-n1 me-n1">
                <div className="col-lg-4 col-6 px-1 mb-2">
                  <a
                    href="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1426122402199-be02db90eb90.jpg"
                    data-fancybox="gallery"
                    title="Our street"
                  >
                    <img
                      className="img-fluid"
                      src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1426122402199-be02db90eb90.jpg"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-6 px-1 mb-2">
                  <a
                    href="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1512917774080-9991f1c4c750.jpg"
                    data-fancybox="gallery"
                    title="Outside"
                  >
                    <img
                      className="img-fluid"
                      src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1512917774080-9991f1c4c750.jpg"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-6 px-1 mb-2">
                  <a
                    href="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1494526585095-c41746248156.jpg"
                    data-fancybox="gallery"
                    title="Rear entrance"
                  >
                    <img
                      className="img-fluid"
                      src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1494526585095-c41746248156.jpg"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-6 px-1 mb-2">
                  <a
                    href="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1484154218962-a197022b5858.jpg"
                    data-fancybox="gallery"
                    title="Kitchen"
                  >
                    <img
                      className="img-fluid"
                      src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1484154218962-a197022b5858.jpg"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-6 px-1 mb-2">
                  <a
                    href="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1522771739844-6a9f6d5f14af.jpg"
                    data-fancybox="gallery"
                    title="Bedroom"
                  >
                    <img
                      className="img-fluid"
                      src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1522771739844-6a9f6d5f14af.jpg"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-6 px-1 mb-2">
                  <a
                    href="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1488805990569-3c9e1d76d51c.jpg"
                    data-fancybox="gallery"
                    title="Bedroom"
                  >
                    <img
                      className="img-fluid"
                      src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1488805990569-3c9e1d76d51c.jpg"
                      alt="..."
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-block">
              <p className="subtitle text-sm text-primary">Reviews </p>
              <h5 className="mb-4">Listing Reviews </h5>
              {reviews.map((review, j) => {
                return (
                  <Review
                    key={j}
                    id={j}
                    name={review.name}
                    profileImg={review.profileImg}
                    rating={review.rating}
                    comment={review.comment}
                    date={review.date}
                  />
                );
              })}
              <div className="py-5">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#leaveReview"
                  aria-expanded="false"
                  aria-controls="leaveReview"
                >
                  Leave a review
                </button>
                <div className="collapse mt-4" id="leaveReview">
                  <h5 className="mb-4">Leave a review</h5>
                  <form
                    className="form"
                    id="contact-form"
                    method="get"
                    action="#"
                  >
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb-4">
                          <label className="form-label" htmlFor="name">
                            Your name *
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your name"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb-4">
                          <label className="form-label" htmlFor="rating">
                            Your rating *
                          </label>
                          <select
                            className="form-select focus-shadow-0"
                            name="rating"
                            id="rating"
                          >
                            <option value="5">
                              &#9733;&#9733;&#9733;&#9733;&#9733; (5/5)
                            </option>
                            <option value="4">
                              &#9733;&#9733;&#9733;&#9733;&#9734; (4/5)
                            </option>
                            <option value="3">
                              &#9733;&#9733;&#9733;&#9734;&#9734; (3/5)
                            </option>
                            <option value="2">
                              &#9733;&#9733;&#9734;&#9734;&#9734; (2/5)
                            </option>
                            <option value="1">
                              &#9733;&#9734;&#9734;&#9734;&#9734; (1/5)
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="form-label" htmlFor="email">
                        Your email *
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your  email"
                        required="required"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label" htmlFor="review">
                        Review text *
                      </label>
                      <textarea
                        className="form-control"
                        rows="4"
                        name="review"
                        id="review"
                        placeholder="Enter your review"
                        required="required"
                      ></textarea>
                    </div>
                    <button className="btn btn-primary" type="submit">
                      Post review
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="p-4 shadow ms-lg-4 rounded sticky-top"
              style={{ top: "100px" }}
            >
              <p className="">
                <span className="text-primary h2">
                  {numberFormat(price)}
                </span>
                &nbsp; per night
              </p>
              <hr className="my-4" />
              <form
                className="form"
                id="booking-form"
                method="get"
                action="#"
                autoComplete="off"
                onSubmit={onBooking}
              >
                <div className="mb-4">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      required
                      className="form-control"
                      inputFormat="DD MMM YYYY"
                      label="Check In"
                      disablePast
                      value={checkIn}
                      disableMaskedInput
                      onChange={(newValue) => {
                        nextDay.setDate(newValue.$d.getDate() + 1);
                        setCheckOut(nextDay);
                        setCheckIn(newValue.$d);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
                <div className="mb-4">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      required
                      className="form-control"
                      inputFormat="DD MMM YYYY"
                      label="Check Out"
                      disableMaskedInput
                      value={checkOut}
                      minDate={new Date(checkIn).setDate(checkIn.getDate() + 1)}
                      onChange={(newValue) => {
                        setCheckOut(newValue.$d);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
                <div className="mb-4">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Guests
                    </InputLabel>
                    <Select
                      defaultValue=""
                      required
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={NumOfGuests || ""}
                      label="Guests"
                      onChange={(e) => {
                        setNumOfGuests(e.target.value);
                      }}
                    >
                      <MenuItem value={1}>1 Guest</MenuItem>
                      <MenuItem value={2}>2 Guests</MenuItem>
                      <MenuItem value={3}>3 Guests</MenuItem>
                      <MenuItem value={4}>4 Guests</MenuItem>
                      <MenuItem value={5}>5 Guests</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="d-grid mb-4">
                  <button className="btn btn-primary" type="submit">
                    Book your stay
                  </button>
                </div>
              </form>
              <p className=" text-sm text-center">
                Some additional text can be also placed here.
              </p>
              <hr className="my-4" />
              <div className="text-center">
                <p>
                  {" "}
                  <a className="text-secondary text-sm" href="#">
                    {" "}
                    <i className="fa fa-heart"></i> Bookmark This Listing
                  </a>
                </p>
                <p className=" text-sm">
                  79 people bookmarked this place{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 bg-gray-100">
        <div className="container">
          <h5 className="mb-0">Similar places</h5>
          <p className="subtitle text-sm text-primary mb-4">
            You may also like{" "}
          </p>
          {/* <!-- Slider main container--> */}
          <Card1Group/>
        </div>
      </div>
   
    </div>
    </Delayed>
  );
}

export default DetailRoom;
