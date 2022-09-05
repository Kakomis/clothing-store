import React from 'react'
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './styles'
import CheckoutItem from '../../components/CheckoutItem'
import { useSelector } from 'react-redux'
import { selectCartTotal, selectCartItems } from '../../store/cart/cart.selector'
import PaymentForm from '../../components/PaymentForm'

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <CheckoutContainer>
       <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {
        cartItems.map(item => <CheckoutItem key={item.id} product={item}/> )
      }
      <Total>
        {cartTotal > 0 && `TOTAL: $${cartTotal}`}
      </Total>
      { cartTotal > 0 && <PaymentForm /> }
    </CheckoutContainer>
  )
}

export { Checkout }
