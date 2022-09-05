import { CategoryItem } from "../categories/categories.types";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { createAction, withMatcher, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems: CartItem[], product: CategoryItem): CartItem[] => {
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index < 0) {
        return [...cartItems, { ...product, quantity: 1 }];
    }

    return cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
};

const subtractCartItem = (cartItems: CartItem[], product: CartItem): CartItem[] => {
    const selectedProduct = cartItems.find((item) => item.id === product.id);
    if (selectedProduct && selectedProduct.quantity === 1) {
        return cartItems.filter(item => item.id !== product.id)
    }
    return cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );
}

const clearCartItem = (cartItems: CartItem[], product: CartItem): CartItem[] => {
    return cartItems.filter(item => item.id !== product.id)
}

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>

export type ResetCartItems = Action<CART_ACTION_TYPES.RESET_CART_ITEMS>


export const addToCart = (cartItems: CartItem[], product: CategoryItem) => {
    const newCart = addCartItem(cartItems, product)
    return setCartItems(newCart)
}

export const subtractFromCart = (cartItems: CartItem[], product: CartItem) => {
    const newCart = subtractCartItem(cartItems, product)
    return setCartItems(newCart)
}

export const removeFromCart = (cartItems: CartItem[], product: CartItem) => {
    const newCart = clearCartItem(cartItems, product)
    return setCartItems(newCart)
}

export const resetCart = withMatcher(() => 
    createAction(CART_ACTION_TYPES.RESET_CART_ITEMS))

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems))

