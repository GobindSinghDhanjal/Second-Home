import { FETCH_HOMES_REQUEST, FETCH_HOMES_SUCCESS, FETCH_HOMES_FAILURE } from "./homeTypes";

import axios from "axios";

export const fetchHomesRequests = () =>{
    return{
        type: FETCH_HOMES_REQUEST
    }
}

export const fetchHomesSuccess = (homes) =>{
    return{
        type: FETCH_HOMES_SUCCESS,
        payload: homes
    }
}

export const fetchHomesFailure = (error) =>{
    return{
        type: FETCH_HOMES_FAILURE,
        payload: error
    }
}

export const fetchHomes = () =>{
    return (dispatch)=>{
        dispatch(fetchHomesRequests)
        axios.get("http://localhost:4000/homes")
        .then(response =>{
            const homes = response.data
            dispatch(fetchHomesSuccess(homes))
        })
        .catch(error=>{
            const errorMsg = error.message
            dispatch(fetchHomesFailure(errorMsg))
        })
    }
}