import {
  FETCH_BOOKINGS_REQUEST,
  FETCH_BOOKINGS_SUCCESS,
  FETCH_BOOKINGS_FAILURE,
  FETCH_SINGLE_BOOKING_REQUEST,
  FETCH_SINGLE_BOOKING_SUCCESS,
  FETCH_SINGLE_BOOKING_FAILURE,
} from "./bookingTypes";

import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export const fetchBookingsRequest = () => {
  return {
    type: FETCH_BOOKINGS_REQUEST,
  };
};

export const fetchBookingsSuccess = (bookings) => {
  return {
    type: FETCH_BOOKINGS_SUCCESS,
    payload: bookings,
  };
};

export const fetchBookingsFailure = (error) => {
  return {
    type: FETCH_BOOKINGS_FAILURE,
    payload: error,
  };
};

export const fetchSingleBookingRequest = () => {
  return {
    type: FETCH_SINGLE_BOOKING_REQUEST,
  };
};

export const fetchSingleBookingSuccess = (booking) => {
  return {
    type: FETCH_SINGLE_BOOKING_SUCCESS,
    payload: booking,
  };
};

export const fetchSingleBookingFailure = (error) => {
  return {
    type: FETCH_SINGLE_BOOKING_FAILURE,
    payload: error,
  };
};

export const fetchBookings = (tourist) => {
  return async (dispatch) => {
    dispatch(fetchBookingsRequest);

    const touristEmail = tourist.email;

    await axios
      .post("http://localhost:4000/all-bookings", { touristEmail })
      .then((response) => {
        const bookings = response.data;
        dispatch(fetchBookingsSuccess(bookings));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchBookingsFailure(errorMsg));
      });
  };
};

export const fetchSingleBooking = (postData) => {
    return async (dispatch) => {
      dispatch(fetchSingleBookingRequest);
  
      const touristEmail = postData.user.email;
      const bookingId = postData.bookingId;

      await axios
        .post("http://localhost:4000/booking-detail", { touristEmail,bookingId })
        .then((response) => {
          const booking = response.data;
          dispatch(fetchSingleBookingSuccess(booking));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetchSingleBookingFailure(errorMsg));
        });
    };
  };