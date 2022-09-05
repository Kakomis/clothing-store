import React, { FC } from 'react'
import { CategoryPreviewContainer, CategoryTitle, Preview } from './styles'
import ProductCard from '../ProductCard'
import { useNavigate } from 'react-router-dom'
import { CategoryItem } from '../../store/categories/categories.types'

type CategoryPreviewProps = {
  title: string
  products: CategoryItem[]
}

const CategoryPreviewElement: FC<CategoryPreviewProps> = ({ title, products }) => {
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate(`/shop/${title}`)
  }

  return (
    <CategoryPreviewContainer>
        <CategoryTitle onClick={handleNavigation}>
           {title.toUpperCase()}
        </CategoryTitle>
        <Preview>
            {
              products
              .filter((_, idx) => idx < 4)
              .map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            }
        </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreviewElement