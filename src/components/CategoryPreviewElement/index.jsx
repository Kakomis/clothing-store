import React from 'react'
import './styles.scss'
import ProductCard from '../ProductCard'
import { useNavigate } from 'react-router-dom'

const CategoryPreviewElement = ({ title, products }) => {
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate(`/shop/${title}`)
  }

  return (
    <div className='Category-preview-container'>
        <h2>
            <span onClick={handleNavigation} className="title">{title.toUpperCase()}</span>
        </h2>
        <div className="preview">
            {
              products
              .filter((_, idx) => idx < 4)
              .map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            }
        </div>
    </div>
  )
}

export default CategoryPreviewElement