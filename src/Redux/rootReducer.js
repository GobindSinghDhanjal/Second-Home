import { combineReducers } from "redux";
import touristAccountReducer from "./account/tourist/touristAccountReducer";
import touristReducer from "./user/tourist/touristReducer";

const rootReducer = combineReducers({
    tourist: touristReducer,
    touristAccount: touristAccountReducer
})

export default rootReducer;