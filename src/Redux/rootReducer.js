import { combineReducers } from "redux";
import touristAccountReducer from "./account/tourist/touristAccountReducer";
import homeReducer from "./home/homeReducers";
import touristReducer from "./user/tourist/touristReducer";

const rootReducer = combineReducers({
    tourist: touristReducer,
    touristAccount: touristAccountReducer,
    homes: homeReducer
})

export default rootReducer;