import { SET_CART_ITEMS, RESET_CART_ITEMS } from "./cart.types";

const CART_INITIAL_STATE = {
    cartProducts: []
}

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_CART_ITEMS:
            return {
                ...state,
                cartProducts: payload
            }
        case RESET_CART_ITEMS:
            return {
                cartProducts: []
            }
        default:
            return state
    }
}


