import {
  FETCH_HOMES_REQUEST,
  FETCH_HOMES_SUCCESS,
  FETCH_HOMES_FAILURE,
  FETCH_SINGLE_HOME_REQUEST,
  FETCH_SINGLE_HOME_SUCCESS,
  FETCH_SINGLE_HOME_FAILURE,
} from "./homeTypes";

import axios from "axios";
import { backendUrl } from "../../shared/backendUrl";

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

export const fetchHomes = (pageNumber) => {
  return async (dispatch) => {
    dispatch(fetchHomesRequest);
    await axios
      .get(backendUrl+"/homes/"+pageNumber.toString())
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
      .get(`${backendUrl}/home/${title}`)
      .then((response) => {
          const home = response.data;
          dispatch(fetchSingleHomeSuccess(home));
      })
      .catch((error) => {
        console.log("in error");
        const errorMsg = error.message;
        dispatch(fetchSingleHomeFailure(errorMsg));
      });
  };
};
