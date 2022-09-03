import React from 'react'
import { ProductContainer, Image, AddButton, Footer, Name, Price }  from './styles.js'
import { BUTTON_TYPE_CLASSES } from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/cart/cart.actions'
import { selectCartProducts } from '../../store/cart/cart.selector'

const ProductCard = ({ product }) => {
  const {imageUrl, name, price} = product
  
  const dispatch = useDispatch()

  const cartProducts = useSelector(selectCartProducts)

  const addProductToCart = () => {
    dispatch(addToCart(cartProducts, product))
  }

  return (
    <ProductContainer>
        <Image src={imageUrl} alt={name}/>
        <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </Footer>
        <AddButton onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to cart</AddButton>
    </ProductContainer>
  )
}

export default ProductCard