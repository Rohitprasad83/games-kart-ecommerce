import { Navbar } from '../../components/navbar/Navbar.jsx'
import product from './Products.module.css'
import { ProductCard } from './ProductCard'
import { Filters } from './Filters'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useProductFilter } from '../../context/product-context'
import {
  sortByPrice,
  filterProductsByCategory,
  filterByRange,
  filterProductsByRating,
} from '../../utils/productUtils/index'
export function Products() {
  const [products, setProducts] = useState([])
  const { filters } = useProductFilter()
  const { category, rangeLimit, sortBy, rating } = filters

  const filteredRange = filterByRange(products, rangeLimit)
  const filteredProducts = filterProductsByCategory(filteredRange, category)
  const filteredRating = filterProductsByRating(filteredProducts, rating)
  const sortedData = sortByPrice(filteredRating, sortBy)

  useEffect(() => {
    ;(async function getData() {
      const {
        data: { products },
      } = await axios.get('/api/products')
      setProducts(products)
    })()
  }, [])
  return (
    <div className="home__container">
      <Navbar />

      <div className={product['main__container']}>
        <Filters />
        <main className={product['products__container']}>
          {sortedData.map(product => (
            <ProductCard key={product['id']} {...product} />
          ))}
        </main>
      </div>
    </div>
  )
}
