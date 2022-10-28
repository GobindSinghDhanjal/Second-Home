import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
} from "../profileTypes";

const initialState = {
  loading: false,
  touristProfile: [],
  error: "",
};

const touristProfileReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PROFILE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_PROFILE_SUCCESS:
        return {
          ...state,
          loading: false,
          touristProfile: action.payload,
          error: "",
        };
      case FETCH_PROFILE_FAILURE:
        return {
          ...state,
          loading: false,
          touristProfile: [],
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default touristProfileReducer;