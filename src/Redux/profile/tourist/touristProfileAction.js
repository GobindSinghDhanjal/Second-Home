import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
} from "../profileTypes";

import axios from "axios";
import { ReactSession } from "react-client-session";

export const fetchProfileRequest = () => {
  return {
    type: FETCH_PROFILE_REQUEST,
  };
};

export const fetchProfileSuccess = (touristProfile) => {
  return {
    type: FETCH_PROFILE_SUCCESS,
    payload: touristProfile,
  };
};

export const fetchProfileFailure = (error) => {
  return {
    type: FETCH_PROFILE_FAILURE,
    payload: error,
  };
};

export const fetchTourist = () => {
    return (dispatch) => {
      dispatch(fetchProfileRequest);

      const username = ReactSession.get("username");
      const url = "http://localhost:4000/user/tourist/"+username
      axios
        .get(url)
        .then((response) => {
          const touristProfile = response.data;
          console.log(touristProfile);
          dispatch(fetchProfileSuccess(touristProfile));
          const status = response.status;
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetchProfileFailure(errorMsg));
        });
    };
  };
