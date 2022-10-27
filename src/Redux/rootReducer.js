import { combineReducers } from "redux";
import touristReducer from "./user/tourist/touristReducer";

const rootReducer = combineReducers({
    tourist: touristReducer
})

export default rootReducer;