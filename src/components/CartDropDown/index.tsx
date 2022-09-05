import React from 'react'
import { CartDropDownContainer, CartItems, EmptyMessage } from  './styles'
import Button from '../Button'
import CartItem from '../CartItem'
import { useNavigate } from 'react-router-dom'
import { selectCartItems } from '../../store/cart/cart.selector'
import { useSelector } from 'react-redux'

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems)  

  const navigate = useNavigate()

  const goToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <CartDropDownContainer>
        <CartItems>
          {
            cartItems.length > 0 ?
            cartItems.map(product => <CartItem key={product.id} {...product} />) :
            <EmptyMessage>Tu bolsa está vacía</EmptyMessage>
          }
        </CartItems>
        <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  )
}

export default CartDropDown