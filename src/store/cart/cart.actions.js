import { SET_CART_ITEMS, RESET_CART_ITEMS } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartProducts, product) => {
    const index = cartProducts.findIndex((item) => item.id === product.id);
    if (index < 0) {
        return [...cartProducts, { ...product, quantity: 1 }];
    }

    return cartProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
};

const subtractCartItem = (cartProducts, product) => {
    const selectedProduct = cartProducts.find((item) => item.id === product.id);
    if (selectedProduct.quantity === 1) {
        return cartProducts.filter(item => item.id !== product.id)
    }
    return cartProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );
}

const clearCartItem = (cartProducts, product) => {
    return cartProducts.filter(item => item.id !== product.id)
}

export const addToCart = (cartProducts, product) => {
    const newCart = addCartItem(cartProducts, product)
    return setCartItems(newCart)
}

export const subtractFromCart = (cartProducts, product) => {
    const newCart = subtractCartItem(cartProducts, product)
    return setCartItems(newCart)
}

export const removeFromCart = (cartProducts, product) => {
    const newCart = clearCartItem(cartProducts, product)
    return setCartItems(newCart)
}

export const resetCart = () => 
    createAction(RESET_CART_ITEMS)

const setCartItems = (payload) => 
    createAction(SET_CART_ITEMS, payload)

