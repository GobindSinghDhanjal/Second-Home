import React, { useEffect } from "react";
import Header from "../subComponents/Header";
import { tourist } from "../../shared/data";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchSingleBooking } from "../../Redux";
import { format } from "date-fns";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function BookingDetails() {
  const numberFormat = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);

  const params = new URLSearchParams(window.location.search);
  const bookingId = params.get("booking-id");

  const { user, isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.bookings.booking);
  const bookingData = useSelector((state) => state.bookings);

  useEffect(() => {
    user && bookingId && dispatch(fetchSingleBooking({ bookingId, user }));
  }, [dispatch, bookingId, user]);

  return isLoading ? (
    <div>Loading</div>
  ) : bookingData.loading ? (
    <div>Loading</div>
  ) : bookingData.error ? (
    <div>Error</div>
  ) : (
    <div>
      <Header />
      <br />
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 col-xl-5 px-4 pb-4 ps-xl-5 pe-xl-5">
            <section className="mx-n4 mx-xl-n5 mb-4 mb-xl-5">
              {/* <!-- Slider main container--> */}
              <Swiper
                className="booking-detail-slider mySwiper"
                navigation={true}
                loop={true}
                slidesPerView={1.6}
                centeredSlides
                modules={[Navigation]}
              >

                {/* <!-- Slides--> */}
                <SwiperSlide>
                  <img
                    className="img-fluid"
                    src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1426122402199-be02db90eb90.jpg"
                    alt="Our street "
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid"
                    src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1512917774080-9991f1c4c750.jpg"
                    alt="Outside"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid"
                    src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1494526585095-c41746248156.jpg"
                    alt="Rear entrance"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid"
                    src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1484154218962-a197022b5858.jpg"
                    alt="Kitchen"
                  />
                </SwiperSlide>
                {/* <div className="swiper-slide">
                    <img
                      className="img-fluid"
                      src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1522771739844-6a9f6d5f14af.jpg"
                      alt="Bedroom"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      className="img-fluid"
                      src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1488805990569-3c9e1d76d51c.jpg"
                      alt="Bedroom"
                    />
                  </div> */}
              </Swiper>
            </section>
            {/* <!-- Breadcrumbs --> */}
            <ol className="breadcrumb ps-0  justify-content-start">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/all-bookings">Your trips</a>
              </li>
              <li className="breadcrumb-item active">
                Trip to {booking.home.location}{" "}
              </li>
            </ol>
            <div className="text-block">
              {/* <p className="subtitle">Monday Apr 17 - Tuesday Apr 18</p> */}
              <p className="subtitle">
                {format(new Date(booking.checkIn), "iiii MMM dd")} -{" "}
                {format(new Date(booking.checkOut), "iiii MMM dd")}
              </p>
              <h1 className="hero-heading mb-3">
                {/* {tourist.active_bookings.title}
                {console.log(booking.home.title)} */}
                {booking.home.title}
              </h1>
            </div>
            <div className="text-block">
              <h6 className="mb-4">
                {tourist.active_bookings.numOfNights} night in London
              </h6>
              <div className="row mb-3">
                <div className="col-md-6 d-flex align-items-center mb-3 mb-md-0">
                  <div className="date-tile me-3">
                    <div className="text-uppercase">
                      {" "}
                      <span className="text-sm">
                        {format(new Date(booking.checkIn), "MMM")}
                      </span>
                      <br />
                      <strong className="text-lg">
                        {format(new Date(booking.checkIn), "dd")}
                      </strong>
                    </div>
                  </div>
                  <p className="text-sm mb-0">
                    {format(new Date(booking.checkIn), "iiii")} check-in
                    <br />
                    3PM - 7PM
                  </p>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <div className="date-tile me-3">
                    <div className="text-uppercase">
                      {" "}
                      <span className="text-sm">
                        {format(new Date(booking.checkOut), "MMM")}
                      </span>
                      <br />
                      <strong className="text-lg">
                        {format(new Date(booking.checkOut), "dd")}
                      </strong>
                    </div>
                  </div>
                  <p className="text-sm mb-0">
                    {format(new Date(booking.checkOut), "iiii")} check-out
                    <br />
                    11AM
                  </p>
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="row">
                <div className="col-sm">
                  <h6>Address</h6>
                  <p className="text-muted">{booking.home.location}</p>
                </div>
                <div className="col-sm">
                  <h6>Phone</h6>
                  <p className="text-muted">
                    {booking.home.phone || "+91 111111111111"}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div>
                  <h6>{booking.home.type}</h6>
                  <p className="text-muted mb-0">
                    Hosted by{" "}
                    <a href="/profile" className="text-reset">
                      {/* {tourist.active_bookings.host} */}
                      {booking.home.name}
                    </a>
                  </p>
                </div>
                <a href="/profile">
                  <img
                    className="avatar avatar-lg p-1 flex-shrink-0 ms-4"
                    src={booking.home.profileImg}
                    alt="Jack London"
                  />
                </a>
              </div>
            </div>
            <div className="text-block">
              <h6 className="mb-3">Who's coming</h6>
              <div className="row mb-3">
                <div className="col-auto text-center text-sm">
                  <img
                    className="avatar avatar-border-white mb-1"
                    src={user.picture}
                    alt={user.name}
                  />
                  <br />
                  {user.nickname}
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="row">
                <div className="col">
                  <h6> Total cost</h6>
                  <p className="text-muted">
                    {/* {numberFormat(tourist.active_bookings.price)} */}
                    {numberFormat(booking.amount)}
                  </p>
                </div>
                <div className="col align-self-center">
                  <p className="text-end d-print-none">
                    <a className="btn btn-link text-muted" href="/invoice">
                      <i className="far fa-file me-2"></i>Your invoice
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="text-block">
              <h6 className="mb-4">Things to keep in mind</h6>
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
              <div className="collapse" id="moreRules">
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
              <button
                className="btn btn-link btn-collapse ps-0 text-muted"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#moreRules"
                aria-expanded="false"
                aria-controls="moreRules"
                data-expanded-text="Show less"
                data-collapsed-text="Show more"
              >
                Show more
              </button>
            </div>
            <div className="text-block d-print-none">
              <button className="btn btn-link ps-0" onClick={window.print}>
                <i className="fa fa-print me-2"></i>Print{" "}
              </button>
            </div>
          </div>
          <div className="col-lg-5 col-xl-7 map-side-lg px-lg-0">
            <div className="map-full shadow-left" id="detailSideMap"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
