import React from 'react'
import { CartDropDownContainer, CartItems, EmptyMessage } from  './styles.js'
import Button from '../Button'
import CartItem from '../CartItem'
import { useNavigate } from 'react-router-dom'
import { selectCartProducts } from '../../store/cart/cart.selector'
import { useSelector } from 'react-redux'

const CartDropDown = () => {
  const cartProducts = useSelector(selectCartProducts)  

  const navigate = useNavigate()

  const goToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <CartDropDownContainer>
        <CartItems>
          {
            cartProducts.length > 0 ?
            cartProducts.map(product => <CartItem key={product.id} {...product} />) :
            <EmptyMessage>Tu bolsa está vacía</EmptyMessage>
          }
        </CartItems>
        <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  )
}

export default CartDropDown