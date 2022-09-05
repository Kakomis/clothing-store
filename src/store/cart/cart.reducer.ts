import { AnyAction } from "redux";
import { CartItem } from "./cart.types";
import { setCartItems, resetCart } from './cart.actions'

export type CartState = {
    readonly cartItems: CartItem[]
}

const CART_INITIAL_STATE: CartState = {
    cartItems: []
}

export const cartReducer = (
    state = CART_INITIAL_STATE, 
    action: AnyAction
): CartState => {
    if(setCartItems.match(action)) {
        return {...state, cartItems: action.payload }
    }

    if(resetCart.match(action)) {
        return { cartItems: [] }
    }

    return state
}


