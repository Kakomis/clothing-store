import React from 'react'
import './styles.scss'
import CategoryPreviewElement from '../../components/CategoryPreviewElement'
import Spinner from '../../components/Spinner'
import { useSelector } from 'react-redux'
import { selectCategoriesMap, selectIsCategoriesLoading } from '../../store/categories/categories.selector'

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectIsCategoriesLoading)

  return (
    <div className='CategoriesPreview-container'>
      {
        isLoading ? <Spinner /> :
        Object.keys(categories).map((title) => {
          const products = categories[title]
          return <CategoryPreviewElement key={title} products={products} title={title} />
        })
      }
    </div>
  )
}

export { CategoriesPreview }
