import React from 'react'
import { CategoryTitle, CategoryItem } from './styles'
import ProductCard from '../../components/ProductCard'
import Spinner from '../../components/Spinner'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCategoriesMap, selectIsCategoriesLoading } from '../../store/categories/categories.selector'

type CategoryRouteParams = {
  category: string
}

const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams
  const categories = useSelector(selectCategoriesMap)
  const [products, setProducts] = React.useState(categories[category])  
  const isLoading = useSelector(selectIsCategoriesLoading)

  React.useEffect(() => {
    setProducts(categories[category])
  }, [category, categories])

  return (
    <>
      <CategoryTitle className="category-title">{category.toUpperCase()}</CategoryTitle>
      {
        isLoading ? <Spinner /> :
        <CategoryItem>
          {
            products && products.map(product => 
                <ProductCard key={product.id} product={product} />
            )
          }
        </CategoryItem>
      }
    </>
  )
}

export default Category