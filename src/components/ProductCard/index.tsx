import React, { FC } from 'react'
import { ProductContainer, Image, AddButton, Footer, Name, Price }  from './styles'
import { BUTTON_TYPE_CLASSES } from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/cart/cart.actions'
import { selectCartItems } from '../../store/cart/cart.selector'
import { CategoryItem } from '../../store/categories/categories.types'

type ProductCardProps = {
  product: CategoryItem
}

const ProductCard: FC<ProductCardProps>  = ({ product }) => {
  const {imageUrl, name, price} = product
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => dispatch(addToCart(cartItems, product))


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