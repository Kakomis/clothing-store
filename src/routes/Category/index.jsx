import React from 'react'
import './styles.scss'
import ProductCard from '../../components/ProductCard'
import Spinner from '../../components/Spinner'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCategoriesMap, selectIsCategoriesLoading } from '../../store/categories/categories.selector'

const Category = () => {
  const { category } = useParams()
  const categories = useSelector(selectCategoriesMap)
  const [products, setProducts] = React.useState(categories[category])  
  const isLoading = useSelector(selectIsCategoriesLoading)

  React.useEffect(() => {
    setProducts(categories[category])
  }, [category, categories])

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {
        isLoading ? <Spinner /> :
        <div className='CategoryItem-container'>
          {
            products && products.map(product => 
                <ProductCard key={product.id} product={product} />
            )
          }
        </div>
      }
    </>
  )
}

export default Category