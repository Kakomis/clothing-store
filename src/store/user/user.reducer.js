import { SIGN_IN_FAILED, SIGN_IN_SUCCESS, SIGN_UP_FAILED, SIGN_OUT_SUCCESS, SIGN_OUT_FAILED } from "./user.types"

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    
    switch (type) {
        case SIGN_IN_SUCCESS:
            return { 
                ...state, 
                isLoading: false,
                currentUser: payload 
            }
        case SIGN_UP_FAILED:    
        case SIGN_OUT_FAILED:    
        case SIGN_IN_FAILED:
            return { 
                ...state,
                isLoading: false, 
                error: payload 
            }   
        case SIGN_OUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentUser: null
            }     
        default:
            return state
    }
}