import { Navbar, Footer } from 'components/index'
import product from './Products.module.css'
import { ProductCard } from './ProductCard'
import { Filters } from './Filters'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useProductFilter } from 'context/product-context'
import { useChangeTitle } from 'utils/changeDocumentTitle'
import {
  sortByPrice,
  filterProductsByCategory,
  filterByRange,
  filterProductsByRating,
} from 'utils/productUtils/index'
import empty from 'assets/images/emptycart.svg'

export function Products() {
  const [products, setProducts] = useState([])
  const { filters } = useProductFilter()
  const { category, rangeLimit, sortBy, rating } = filters

  const filteredRange = filterByRange(products, rangeLimit)
  const filteredProducts = filterProductsByCategory(filteredRange, category)
  const filteredRating = filterProductsByRating(filteredProducts, rating)
  const sortedData = sortByPrice(filteredRating, sortBy)

  useChangeTitle('Products')

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
            <ProductCard key={product._id} product={product} />
          ))}
          {sortedData && sortedData.length < 1 && (
            <div className="empty">
              <img src={empty} alt="empty" />
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  )
}
