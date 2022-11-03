import React from "react";
import { allBookings } from "../../shared/data";
import Card3 from "../subComponents/Card3";
import Header from "../subComponents/Header";

function AllBookings() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <section class="py-5">
        <div class="container">
          {/* <!-- Breadcrumbs --> */}
          <ol class="breadcrumb ps-0  justify-content-start">
            <li class="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li class="breadcrumb-item active">Your trips </li>
          </ol>
          <h1 class="hero-heading mb-4">Your nearest bookings</h1>
          <p class="text-muted mb-5">
            You have no upcoming trips. Start exploring ideas for your next
            trip.
          </p>
          <p class="mb-6">
            {" "}
            <img
              class="img-fluid"
              src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/illustration/undraw_trip_dv9f.svg"
              alt=""
              style={{ width: "400px" }}
            />
          </p>
          <h2 class="mb-5">Your past bookings</h2>
          <div class="row">

          
            {/* <!-- place item--> */}
            {allBookings.map((booking) => {
              return (
                <Card3
                  title={booking.title}
                  imageUrl={booking.imageUrl}
                  rating={booking.rating}
                  type={booking.type}
                  date={booking.date}
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
