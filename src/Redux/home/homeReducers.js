import {
  FETCH_HOMES_REQUEST,
  FETCH_HOMES_SUCCESS,
  FETCH_HOMES_FAILURE,
  FETCH_SINGLE_HOME_REQUEST,
  FETCH_SINGLE_HOME_SUCCESS,
  FETCH_SINGLE_HOME_FAILURE,
} from "./homeTypes";

const initialState = {
  loading: true,
  homes: [],
  home:{},
  error: "",
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOMES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HOMES_SUCCESS:
      return {
        ...state,
        loading: false,
        homes: action.payload,
      };
    case FETCH_HOMES_FAILURE:
      return {
        ...state,
        loading: false,
        homes: "",
        error: action.payload,
      };
    case FETCH_SINGLE_HOME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SINGLE_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        home: action.payload,
      };
    case FETCH_SINGLE_HOME_FAILURE:
      return {
        ...state,
        loading: false,
        home: "",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
