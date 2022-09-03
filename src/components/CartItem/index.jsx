import React from 'react'
import { CartItemContainer, ItemDetails, Image, Name, Price } from './styles.js'

const CartItem = ({ name, imageUrl, quantity, price }) => {
  return (
    <CartItemContainer>
       <Image src={imageUrl} alt={name} />
       <ItemDetails>
        <Name>{name}</Name>
        <Price>{quantity} x ${price}</Price>
       </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem