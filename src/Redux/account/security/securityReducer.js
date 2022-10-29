import { CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE } from "./securityTypes";

const initialState = {
    loading: false,
    success: "",
    error: ""
}

export const securityReducer = (state=initialState, action)=>{
    switch (action.type) {
        case CHANGE_PASSWORD_REQUEST:
            return{
                ...state,
                loading:true
            }

            case CHANGE_PASSWORD_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    success: [true, action.payload],
                    error: ""
                }

                case CHANGE_PASSWORD_FAILURE:
                    return{
                        ...state,
                        loading: false,
                        success: false,
                        error: action.payload
                    }
    
        default:
            return state
    }
}
