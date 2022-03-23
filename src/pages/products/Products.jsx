import { Navbar } from '../../components/navbar/Navbar.jsx'
import product from './Products.module.css'
import { ProductCard } from './ProductCard'
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
  const [state, setState] = useState([])
  const { filters, productDispatch } = useProductFilter()
  const { category, rangeLimit, sortBy, rating } = filters
  const filteredRange = filterByRange(state, rangeLimit)
  const filteredProducts = filterProductsByCategory(filteredRange, category)
  const filteredRating = filterProductsByRating(filteredProducts, rating)
  const sortedData = sortByPrice(filteredRating, sortBy)

  useEffect(() => {
    ;(async function getData() {
      const {
        data: { products },
      } = await axios.get('/api/products')
      setState(products)
    })()
  }, [])
  return (
    <div className="home__container">
      <Navbar />

      <div className={product['main__container']}>
        <aside className={`${product['filter']} text__md`}>
          <div className={product['filter__header']}>
            <span className="font__bold">Filters</span>
            <button className={product['filter__clear']}>Clear</button>
          </div>
          <div className={`filter__slider ${product['flex__column']} text__md`}>
            <label for="slider">Select your Price</label>
            <div className={`${product['slider__price']} text__md font__light`}>
              <span>1000</span>
              <span>5500</span>
              <span>10000</span>
            </div>
            <input
              id="slider"
              type="range"
              min="1000"
              max="10000"
              value={rangeLimit}
              className="slider"
              onChange={e =>
                productDispatch({
                  type: 'PRICE_RANGE',
                  payload: e.target.value,
                })
              }
            />
            <div className="slider__output text__md">
              Selected Price is{' '}
              <span className={product['text__primary']}>₹ {rangeLimit}</span>
            </div>
          </div>
          <div className={`filter__category ${product['flex__column']}`}>
            <h5>Category</h5>

            <label className={product['filter__names']}>
              <input
                type="checkbox"
                onClick={() => productDispatch({ type: 'Action' })}
              />
              Action
            </label>
            <label className={product['filter__names']}>
              <input
                type="checkbox"
                onClick={() => productDispatch({ type: 'Arcade' })}
              />
              Arcade
            </label>
            <label className={product['filter__names']}>
              <input
                type="checkbox"
                onClick={() => productDispatch({ type: 'Strategy' })}
              />
              Strategy
            </label>
            <label className={product['filter__names']}>
              <input
                type="checkbox"
                onClick={() => productDispatch({ type: 'Adventure' })}
              />
              Adventure
            </label>
            <label className={product['filter__names']}>
              <input
                type="checkbox"
                onClick={() => productDispatch({ type: 'Sports' })}
              />
              Sports
            </label>
          </div>
          <div className={`filter__rating ${product['flex__column']}`}>
            <h5>Rating</h5>

            <label className={product['filter__names']}>
              <input
                type="radio"
                name="rating"
                onClick={() => productDispatch({ type: '4_STARS_ABOVE' })}
              />
              4 Stars and above
            </label>
            <label className={product['filter__names']}>
              <input
                type="radio"
                name="rating"
                onClick={() => productDispatch({ type: '3_STARS_ABOVE' })}
              />
              3 Stars and above
            </label>
            <label className={product['filter__names']}>
              <input
                type="radio"
                name="rating"
                onClick={() => productDispatch({ type: '2_STARS_ABOVE' })}
              />
              2 Stars and above
            </label>
            <label className={product['filter__names']}>
              <input
                type="radio"
                name="rating"
                onClick={() => productDispatch({ type: '1_STARS_ABOVE' })}
              />
              1 Stars and above
            </label>
          </div>
          <div className={`filter__sorting ${product['flex__column']}`}>
            <h5>Sort By</h5>
            <label className={product['filter__names']}>
              <input
                type="radio"
                name="sorting"
                onClick={() => productDispatch({ type: 'LOW_TO_HIGH' })}
              />
              Price: Low to High
            </label>
            <label className={product['filter__names']}>
              <input
                type="radio"
                name="sorting"
                onClick={() => productDispatch({ type: 'HIGH_TO_LOW' })}
              />
              Price: High to Low
            </label>
          </div>
        </aside>
        <main className={product['products__container']}>
          {sortedData.map(product => (
            <ProductCard key={product['id']} {...product} />
          ))}
        </main>
      </div>
    </div>
  )
}
