import { Navbar } from '../../components/navbar/Navbar.jsx'
import product from './Products.module.css'
import { ProductCard } from './ProductCard'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function Products() {
  const [state, setState] = useState([])
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
            <label for="slider">Select your Price Range</label>
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
              value="5500"
              className="slider"
            />
            <div className="slider__output text__md"></div>
          </div>
          <div className={`filter__category ${product['flex__column']}`}>
            <h5>Category</h5>

            <label className={product['filter__names']}>
              <input type="checkbox" />
              Action
            </label>
            <label className={product['filter__names']}>
              <input type="checkbox" />
              Arcade
            </label>
            <label className={product['filter__names']}>
              <input type="checkbox" />
              Strategy
            </label>
            <label className={product['filter__names']}>
              <input type="checkbox" />
              Casual
            </label>
            <label className={product['filter__names']}>
              <input type="checkbox" />
              Sports
            </label>
          </div>
          <div className={`filter__rating ${product['flex__column']}`}>
            <h5>Rating</h5>

            <label className={product['filter__names']}>
              <input type="radio" name="rating" />4 Stars and above
            </label>
            <label className={product['filter__names']}>
              <input type="radio" name="rating" />3 Stars and above
            </label>
            <label className={product['filter__names']}>
              <input type="radio" name="rating" />2 Stars and above
            </label>
            <label className={product['filter__names']}>
              <input type="radio" name="rating" />1 Stars and above
            </label>
          </div>
          <div className={`filter__sorting ${product['flex__column']}`}>
            <h5>Sort By</h5>
            <label className={product['filter__names']}>
              <input type="radio" name="sorting" />
              Price: Low to High
            </label>
            <label className={product['filter__names']}>
              <input type="radio" name="sorting" />
              Price: High to Low
            </label>
          </div>
        </aside>
        <main className={product['products__container']}>
          {state.map(product => (
            <ProductCard {...product} />
          ))}
        </main>
      </div>
    </div>
  )
}
