import React,{ FC } from 'react'
import { 
  CheckoutItemContainer, 
  ImageContainer,
  Name,
  Price,
  Quantity,
  Arrow,
  Value,
  RemoveButton
} from  './styles'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, subtractFromCart } from '../../store/cart/cart.actions'
import { selectCartItems } from '../../store/cart/cart.selector'
import { CartItem } from '../../store/cart/cart.types'

type CheckoutItemProps = {
  product: CartItem
}

const CheckoutItem: FC<CheckoutItemProps> = ({ product }) => {
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
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={name} />
        </ImageContainer>
        <Name>{name}</Name>
        <Quantity>
          <Arrow onClick={subtractItemFromCart}>
            &#10094;
          </Arrow>
          <Value>{quantity}</Value>
          <Arrow onClick={addItemToCart} >
            &#10095;
          </Arrow>
        </Quantity>
        <Price>${price}</Price>
        <RemoveButton onClick={removeItemFromCart}>
          &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem