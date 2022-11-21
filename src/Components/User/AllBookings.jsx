import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBookings } from "../../Redux/bookings/bookingAction";
import { allBookings } from "../../shared/data";
import Card3 from "../subComponents/Card3";
import Header from "../subComponents/Header";

function AllBookings() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const dispatch = useDispatch();

  const bookings = useSelector((state) => state.bookings.bookings);
  const bookingData = useSelector((state) => state.bookings);

  const today = new Date();

  useEffect(() => {
    user && dispatch(fetchBookings(user));
  }, [dispatch, user]);

  return isLoading ? (
    <div>Loading</div>
  ) : bookingData.loading ? (
    <div>Loading</div>
  ) : (
    <div>
      <Header />
      <br />
      <br />
      <section className="py-5">
        <div className="container">
          {/* <!-- Breadcrumbs --> */}
          <ol className="breadcrumb ps-0  justify-content-start">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">Your trips </li>
          </ol>
          <h1 className="hero-heading mb-4">Your nearest bookings</h1>
          <p className="text-muted mb-5">
            You have no upcoming trips. Start exploring ideas for your next
            trip.
          </p>
          <p className="mb-6">
            {" "}
            <img
              className="img-fluid"
              src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/illustration/undraw_trip_dv9f.svg"
              alt=""
              style={{ width: "400px" }}
            />
          </p>
          <h2 className="mb-5">Your past bookings</h2>
          <div className="row">
            {/* <!-- place item--> */}
            {bookings.map((booking, i) => {
              const date = new Date(booking.bookingDate);
              return (
                <Card3
                  key={i}
                  bookingId={booking._id}
                  title={booking.home.title}
                  imageUrl={booking.home.placeImg}
                  type={booking.home.type}
                  rating={booking.rating || 4}
                  date={
                    date.toLocaleString("default", { month: "long" }) +
                    " " +
                    date.getFullYear()
                  }
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllBookings;
