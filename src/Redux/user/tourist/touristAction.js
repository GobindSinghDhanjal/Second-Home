import {
  REGISTER_TOURIST_REQUEST,
  REGISTER_TOURIST_SUCCESS,
  REGISTER_TOURIST_FAILURE,
  LOGIN_TOURIST_REQUEST,
  LOGIN_TOURIST_SUCCESS,
  LOGIN_TOURIST_FAILURE,
} from "./touristTypes";
import axios from "axios";
import { ReactSession }  from 'react-client-session';



export const registerTouristRequest = () => {
  return {
    type: REGISTER_TOURIST_REQUEST,
  };
};

export const registerTouristSuccess = (tourists) => {
  return {
    type: REGISTER_TOURIST_SUCCESS,
    payload: tourists,
  };
};

export const registerTouristFailure = (error) => {
  return {
    type: REGISTER_TOURIST_FAILURE,
    payload: error,
  };
};

export const loginTouristRequest = () => {
  return {
    type: LOGIN_TOURIST_REQUEST,
  };
};

export const loginTouristSuccess = (tourists) => {
  return {
    type: LOGIN_TOURIST_SUCCESS,
    payload: tourists,
  };
};

export const loginTouristFailure = (error) => {
  return {
    type: LOGIN_TOURIST_FAILURE,
    payload: error,
  };
};

export const registerTourist = (postData) => {
  return (dispatch) => {
    dispatch(registerTouristRequest);

    const params = new URLSearchParams();
    params.append("username", postData.username);
    params.append("email", postData.email);
    params.append("password", postData.password);
    axios
      .post("http://localhost:4000/user/tourist", params)
      .then((response) => {
        const tourist = response.data;
        console.log(tourist);
        dispatch(registerTouristSuccess(tourist));
        const status = response.status;

        if (status === 200) {
          window.location = "/";
        }
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(registerTouristFailure(errorMsg));
      });
  };
};

export const loginTourist = (postData) => {
  return (dispatch) => {
    dispatch(registerTouristRequest);

    const params = new URLSearchParams();
    params.append("username", postData.username);
    params.append("password", postData.password);

    axios
      .post("http://localhost:4000/login/tourist", params)
      .then((response) => {
        const tourist = response.data;

        dispatch(loginTouristSuccess(tourist));
        const status = response.status;
        console.log(tourist);

        if (status === 200) {
          if(tourist){
            if (tourist.msg === 'success'){
              ReactSession.set("username", tourist.username);
              // window.location = "/";
            }
          }
        
        }
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(loginTouristFailure(errorMsg));
      });
  };
};
