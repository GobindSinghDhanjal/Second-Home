import {
    FETCH_ACCOUNT_REQUEST,
    FETCH_ACCOUNT_SUCCESS,
    FETCH_ACCOUNT_FAILURE,
  } from "../accountTypes";
  
  const initialState = {
    loading: false,
    touristAccount: [],
    error: "",
  };
  
  const touristAccountReducer = (state = initialState, action) => {
      switch (action.type) {
        case FETCH_ACCOUNT_REQUEST:
          return {
            ...state,
            loading: true,
          };
        case FETCH_ACCOUNT_SUCCESS:
          return {
            ...state,
            loading: false,
            touristAccount: action.payload,
            error: "",
          };
        case FETCH_ACCOUNT_FAILURE:
          return {
            ...state,
            loading: false,
            touristAccount: [],
            error: action.payload,
          };
    
        default:
          return state;
      }
    };
    
    export default touristAccountReducer;