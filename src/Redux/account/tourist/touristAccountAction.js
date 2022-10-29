import {
  FETCH_ACCOUNT_REQUEST,
  FETCH_ACCOUNT_SUCCESS,
  FETCH_ACCOUNT_FAILURE,
} from "../accountTypes";

import axios from "axios";
import { ReactSession } from "react-client-session";

export const fetchAccountRequest = () => {
  return {
    type: FETCH_ACCOUNT_REQUEST,
  };
};

export const fetchAccountSuccess = (touristAccount) => {
  return {
    type: FETCH_ACCOUNT_SUCCESS,
    payload: touristAccount,
  };
};

export const fetchAccountFailure = (error) => {
  return {
    type: FETCH_ACCOUNT_FAILURE,
    payload: error,
  };
};

export const fetchTourist = () => {
  return (dispatch) => {
    dispatch(fetchAccountRequest);

    const username = ReactSession.get("username");
    const url = "http://localhost:4000/user/tourist/" + username;
    axios
      .get(url)
      .then((response) => {
        const touristAccount = response.data;
        // console.log(touristAccount);
        dispatch(fetchAccountSuccess(touristAccount));
        const status = response.status;
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchAccountFailure(errorMsg));
      });
  };
};
