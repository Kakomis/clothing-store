import React, { MouseEvent, FC } from 'react'
import shopping from '../../assets/shoppingBag.svg'
import { CartIconContainer, ShoppingIcon, ItemCount } from './styles'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../../store/cart/cart.selector'

type CartIconProps = {
  toogleOpen: () => void
}

const CartIcon: FC<CartIconProps>  = ({ toogleOpen }) => {
  const cartCount = useSelector(selectCartCount)  
  
  return (
    <CartIconContainer onClick={toogleOpen} >
        <ShoppingIcon src={shopping} alt='Cart Icon' />
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon