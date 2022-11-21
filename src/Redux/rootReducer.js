import { combineReducers } from "redux";
import touristAccountReducer from "./account/tourist/touristAccountReducer";
import bookingReducer from "./bookings/bookingReducers";
import homeReducer from "./home/homeReducers";
import touristReducer from "./user/tourist/touristReducer";

const rootReducer = combineReducers({
    tourist: touristReducer,
    touristAccount: touristAccountReducer,
    homes: homeReducer,
    bookings: bookingReducer
})

export default rootReducer;