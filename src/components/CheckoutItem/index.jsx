import React from 'react'
import './styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, subtractFromCart } from '../../store/cart/cart.actions'
import { selectCartItems } from '../../store/cart/cart.selector'

const CheckoutItem = ({ product }) => {
  const { imageUrl, name, quantity, price } = product

  const dispatch = useDispatch()

  const cartItems = useSelector(selectCartItems)

  const addItemToCart = () => {
    dispatch(addToCart(cartItems,product))
  }

  const subtractItemFromCart = () => {
    dispatch(subtractFromCart(cartItems,product))
  }

  const removeItemFromCart = () => {
    dispatch(removeFromCart(cartItems,product))
  }

  return (
    <div className='CheckoutItem-container'>
        <div className="image-container">
            <img src={imageUrl} alt={name} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
          <div className='arrow' onClick={subtractItemFromCart}>
            &#10094;
          </div>
          <span className='value'>{quantity}</span>
          <div className='arrow' onClick={addItemToCart} >
            &#10095;
          </div>
        </span>
        <span className='price'>${price}</span>
        <div className='remove-button' onClick={removeItemFromCart}>
          &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem