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
import { backendUrl } from "../../../shared/backendUrl";


export const registerTouristRequest = () => {
  return {
    type: REGISTER_TOURIST_REQUEST,
  };
};

export const registerTouristSuccess = (tourist) => {
  return {
    type: REGISTER_TOURIST_SUCCESS,
    payload: tourist,
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

export const loginTouristSuccess = (tourist) => {
  return {
    type: LOGIN_TOURIST_SUCCESS,
    payload: tourist,
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
      .post(backendUrl+"/user/tourist", params)
      .then((response) => {
        const tourist = response.data;
        dispatch(registerTouristSuccess(tourist));
        const status = response.status;

        if (status === 200) {
          ReactSession.set("username", tourist.username);
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
      .post(backendUrl+"/login/tourist", params)
      .then((response) => {
        const tourist = response.data;
        const token = response.data.token;
     
        const status = response.status;
     

        if (status === 200) {
          if(tourist){
            if (tourist.msg === 'success'){

              localStorage.setItem("token",token);
              dispatch(loginTouristSuccess(token));

      
              const title = postData.title;
              const checkIn = new Date(postData.checkIn);
              const checkOut = new Date(postData.checkOut);
              const guest = postData.guest;

              if (title && checkIn && checkOut && guest){

                const url = "/user-booking-2?title="+title+"&guest="+guest+"&checkIn="+checkIn+"&checkOut="+checkOut;
                window.location.href = url;

              }else{
                window.location = "/"
              }

              // ReactSession.set("username", tourist.username);

            }
          }
        
        }
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(loginTouristFailure(errorMsg));

        if(error.response){
          if(error.response.status===401){
            alert("Wrong username or password");
          }
        }else{
          alert(error.message);
        }
        
    
      });
  };
};
