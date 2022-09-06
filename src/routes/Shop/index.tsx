import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CategoriesPreview } from '../CategoriesPreview'
import { useDispatch } from 'react-redux'
import { fetchCategoriesStart } from '../../store/categories/categories.actions'
import Category from '../Category'


const Shop = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchCategoriesStart())
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop
