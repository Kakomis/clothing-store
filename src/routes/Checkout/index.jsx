import React from 'react'
import './styles.scss'
import CheckoutItem from '../../components/CheckoutItem'
import { useSelector } from 'react-redux'
import { selectCartTotal, selectCartProducts } from '../../store/cart/cart.selector'
import PaymentForm from '../../components/PaymentForm'

const Checkout = () => {
  const cartProducts = useSelector(selectCartProducts)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <div className='Checkout-container'>
       <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartProducts.map(item => <CheckoutItem key={item.id} product={item}/> )
      }
      <span className='total'>
        {cartTotal > 0 && `TOTAL: $${cartTotal}`}
      </span>
      { cartTotal > 0 && <PaymentForm /> }
    </div>
  )
}

export { Checkout }
