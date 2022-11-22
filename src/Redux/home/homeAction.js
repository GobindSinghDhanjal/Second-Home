import {
  FETCH_HOMES_REQUEST,
  FETCH_HOMES_SUCCESS,
  FETCH_HOMES_FAILURE,
  FETCH_SINGLE_HOME_REQUEST,
  FETCH_SINGLE_HOME_SUCCESS,
  FETCH_SINGLE_HOME_FAILURE,
} from "./homeTypes";

import axios from "axios";

export const fetchHomesRequest = () => {
  return {
    type: FETCH_HOMES_REQUEST,
  };
};

export const fetchHomesSuccess = (homes) => {
  return {
    type: FETCH_HOMES_SUCCESS,
    payload: homes,
  };
};

export const fetchHomesFailure = (error) => {
  return {
    type: FETCH_HOMES_FAILURE,
    payload: error,
  };
};

export const fetchSingleHomeRequest = () => {
  return {
    type: FETCH_SINGLE_HOME_REQUEST,
  };
};

export const fetchSingleHomeSuccess = (home) => {
  return {
    type: FETCH_SINGLE_HOME_SUCCESS,
    payload: home,
  };
};

export const fetchSingleHomeFailure = (error) => {
  return {
    type: FETCH_SINGLE_HOME_FAILURE,
    payload: error,
  };
};

export const fetchHomes = () => {
  return async (dispatch) => {
    dispatch(fetchHomesRequest);
    await axios
      .get("http://localhost:4000/homes")
      .then((response) => {
        const homes = response.data;
        dispatch(fetchHomesSuccess(homes));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchHomesFailure(errorMsg));
      });
  };
};

export const fetchSingleHome = (title) => {
  return (dispatch) => {
    dispatch(fetchSingleHomeRequest);
    axios
      .get(`http://localhost:4000/home/${title}`)
      .then((response) => {
        if (response.data.foundHome) {
          const home = response.data.foundHome;
          dispatch(fetchSingleHomeSuccess(home));
        } else {
          const home = response.data;
          dispatch(fetchSingleHomeSuccess(home));
        }
      })
      .catch((error) => {
        console.log("in error");
        const errorMsg = error.message;
        dispatch(fetchSingleHomeFailure(errorMsg));
      });
  };
};
