import {
  FETCH_BOOKINGS_REQUEST,
  FETCH_BOOKINGS_SUCCESS,
  FETCH_BOOKINGS_FAILURE,
  FETCH_SINGLE_BOOKING_REQUEST,
  FETCH_SINGLE_BOOKING_SUCCESS,
  FETCH_SINGLE_BOOKING_FAILURE,
} from "./bookingTypes";

const initialState = {
  loading: true,
  bookings: [],
  booking: {},
  error: "",
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKINGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOOKINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        bookings: action.payload,
      };
    case FETCH_BOOKINGS_FAILURE:
      return {
        ...state,
        loading: false,
        bookings: "",
        error: action.payload,
      };
    case FETCH_SINGLE_BOOKING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SINGLE_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        booking: action.payload,
      };
    case FETCH_SINGLE_BOOKING_FAILURE:
      return {
        ...state,
        loading: false,
        booking: "",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bookingReducer;