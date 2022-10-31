import {
  REGISTER_TOURIST_REQUEST,
  REGISTER_TOURIST_SUCCESS,
  REGISTER_TOURIST_FAILURE,
  LOGIN_TOURIST_REQUEST,
  LOGIN_TOURIST_SUCCESS,
  LOGIN_TOURIST_FAILURE,
} from "./touristTypes";

const initialState = {
  loading: false,
  tourist: [],
  error: "",
};

const touristReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_TOURIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_TOURIST_SUCCESS:
      return {
        ...state,
        loading: false,
        tourist: action.payload,
        error: "",
      };
    case REGISTER_TOURIST_FAILURE:
      return {
        ...state,
        loading: false,
        tourist: [],
        error: action.payload,
      };
      case LOGIN_TOURIST_REQUEST:
        return {
          ...state,
          loading: true,
        };
        case LOGIN_TOURIST_SUCCESS:
      return {
        ...state,
        loading: false,
        tourist: action.payload,
        error: "",
      };
      case LOGIN_TOURIST_FAILURE:
        return {
          ...state,
          loading: false,
          tourist: [],
          error: action.payload,
        };

    default:
      return state;
  }
};

export default touristReducer;
