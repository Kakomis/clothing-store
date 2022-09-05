import { UserData } from "../../utils/firebase";
import { 
    signInSuccess,
    signOutFailed,
    signOutSuccess,
    signUpFailed,
    signInFailed
 } from "./user.actions";
import { AnyAction } from "redux";

export type UserState = {
    readonly currentUser: UserData | null;
    readonly isLoading: boolean;
    readonly error: Error | null
}

const INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (
    state = INITIAL_STATE, 
    action: AnyAction
): UserState => {
    if(signInSuccess.match(action)) {
        return { ...state, isLoading: false, currentUser: action.payload }
    }

    if(signUpFailed.match(action) || signOutFailed.match(action) || signInFailed.match(action)) {
        return {...state, isLoading: false, error: action.payload}
    }

    if(signOutSuccess.match(action)) {
        return {...state, isLoading: false, currentUser: null}
    }

    return state
}