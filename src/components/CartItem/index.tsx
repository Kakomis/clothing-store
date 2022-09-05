import React, { FC } from 'react'
import { CartItemContainer, ItemDetails, Image, Name, Price } from './styles'
import { CartItem } from '../../store/cart/cart.types'


const CartItem: FC<CartItem> = ({ name, imageUrl, quantity, price }) => {
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