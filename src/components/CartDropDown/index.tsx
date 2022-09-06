import React, { useState } from 'react'
import { CartDropDownContainer, CartItems, EmptyMessage } from  './styles'
import Button from '../Button'
import CartItem from '../CartItem'
import { useNavigate } from 'react-router-dom'
import { selectCartItems } from '../../store/cart/cart.selector'
import { useSelector } from 'react-redux'

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems)  
  const navigate = useNavigate()

  const goToCheckout = React.useCallback(() => {
    navigate('/checkout')
  },[])


  return (
    <CartDropDownContainer>
        <CartItems>
          {
            cartItems.length > 0 ?
            cartItems.map(product => <CartItem key={product.id} {...product} />) :
            <EmptyMessage>Your bag is empty</EmptyMessage>
          }
        </CartItems>
        <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  )
}

export default CartDropDown