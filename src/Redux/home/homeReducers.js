import { FETCH_HOMES_REQUEST, FETCH_HOMES_SUCCESS, FETCH_HOMES_FAILURE } from "./homeTypes";
  
const initialState = {
    loading: false,
    homes: [],
    error: "",
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_HOMES_REQUEST:
        return {
          ...state,
          loading: true,
        }
      case FETCH_HOMES_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.payload,
          error: ""
        }
        case FETCH_HOMES_FAILURE:
          return{
              ...state,
              loading:false,
              users: "",
              error: action.payload
          }
      default: return state
    }
};
  
export default homeReducer;