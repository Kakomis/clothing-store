import { createSelector } from 'reselect'

const selectCartReducer = state => state.cart

export const selectCartProducts = createSelector(
    [selectCartReducer],
    (cart) => cart.cartProducts
)

export const selectCartCount = createSelector(
    [selectCartProducts],
    (cartProducts) => {
        const reducerCount = (accumulator, currentValue) => accumulator + currentValue.quantity;
        return cartProducts.reduce(reducerCount, 0);
    }
)

export const selectCartTotal = createSelector(
    [selectCartProducts],
    (cartProducts) => {
        const reducerTotal = (accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price);
        return cartProducts.reduce(reducerTotal, 0);
    }
)
