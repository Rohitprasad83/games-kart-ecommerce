import { Navbar } from '../../components/navbar/Navbar.jsx'
import product from './Products.module.css'
import { ProductCard } from './ProductCard'
import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'

export function Products() {
  const [state, setState] = useState([])
  function reduceFn(state, action) {
    if (action.type === 'Action')
      return {
        ...state,
        category: { ...state.category, action: !state.category.action },
      }
    if (action.type === 'Adventure')
      return {
        ...state,
        category: { ...state.category, adventure: !state.category.adventure },
      }
    if (action.type === 'Strategy')
      return {
        ...state,
        category: { ...state.category, strategy: !state.category.strategy },
      }
    if (action.type === 'Arcade')
      return {
        ...state,
        category: { ...state.category, arcade: !state.category.arcade },
      }
    if (action.type === 'Sports')
      return {
        ...state,
        category: { ...state.category, sports: !state.category.sports },
      }
    if (action.type === 'PRICE_RANGE') {
      return { ...state, rangeLimit: parseInt(action.payload, 10) }
    }

    switch (action.type) {
      case 'LOW_TO_HIGH':
        return { ...state, sortBy: 'LOW_TO_HIGH' }
      case 'HIGH_TO_LOW':
        return { ...state, sortBy: 'HIGH_TO_LOW' }
      case '4_STARS_ABOVE':
        return { ...state, rating: '4_STARS_ABOVE' }
      case '3_STARS_ABOVE':
        return { ...state, rating: '3_STARS_ABOVE' }
      case '2_STARS_ABOVE':
        return { ...state, rating: '2_STARS_ABOVE' }
      case '1_STARS_ABOVE':
        return { ...state, rating: '1_STARS_ABOVE' }
      default:
        return { ...state }
    }
  }
  const [{ category, sortBy, rangeLimit, rating }, dispatch] = useReducer(
    reduceFn,
    {
      category: {
        action: false,
        adventure: false,
        arcade: false,
        strategy: false,
        sports: false,
      },
      sortBy: null,
      rangeLimit: 10000,
      rating: null,
    }
  )
  function sortFn(products, sortBy) {
    switch (sortBy) {
      case 'LOW_TO_HIGH':
        return [...products].sort(
          (firstItem, secondItem) => firstItem['price'] - secondItem['price']
        )
      case 'HIGH_TO_LOW':
        return [...products].sort(
          (firstItem, secondItem) => secondItem['price'] - firstItem['price']
        )
      default:
        return products
    }
  }

  function filterByRating(products, filterRating) {
    switch (filterRating) {
      case '4_STARS_ABOVE':
        return [...products].filter(product => product.rating >= 4)
      case '3_STARS_ABOVE':
        return [...products].filter(product => product.rating >= 3)
      case '2_STARS_ABOVE':
        return [...products].filter(product => product.rating >= 2)
      case '1_STARS_ABOVE':
        return [...products].filter(product => product.rating >= 1)
      default:
        return products
    }
  }

  function filterProducts(products, category) {
    let filteredProducts = []
    const categoryArray = Object.keys(category)
    let flag = false
    for (const catName of categoryArray) {
      if (category[catName]) {
        flag = true
        const temp = products.filter(
          ({ categoryName }) =>
            categoryName.toLowerCase() === catName.toLowerCase()
        )
        filteredProducts = [...filteredProducts, ...temp]
      }
    }
    return flag ? filteredProducts : products
  }

  function filterRange(products, rangeLimit) {
    return products.filter(product =>
      product['price'] <= rangeLimit ? product : false
    )
  }
  const filteredRange = filterRange(state, rangeLimit)
  const filteredProducts = filterProducts(filteredRange, category)
  const filteredRating = filterByRating(filteredProducts, rating)
  const sortedData = sortFn(filteredRating, sortBy)

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
                dispatch({ type: 'PRICE_RANGE', payload: e.target.value })
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
                onClick={() => dispatch({ type: 'Action' })}
              />
              Action
            </label>
            <label className={product['filter__names']}>
              <input
                type="checkbox"
                onClick={() => dispatch({ type: 'Arcade' })}
              />
              Arcade
            </label>
            <label className={product['filter__names']}>
              <input
                type="checkbox"
                onClick={() => dispatch({ type: 'Strategy' })}
              />
              Strategy
            </label>
            <label className={product['filter__names']}>
              <input
                type="checkbox"
                onClick={() => dispatch({ type: 'Adventure' })}
              />
              Adventure
            </label>
            <label className={product['filter__names']}>
              <input
                type="checkbox"
                onClick={() => dispatch({ type: 'Sports' })}
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
                onClick={() => dispatch({ type: '4_STARS_ABOVE' })}
              />
              4 Stars and above
            </label>
            <label className={product['filter__names']}>
              <input
                type="radio"
                name="rating"
                onClick={() => dispatch({ type: '3_STARS_ABOVE' })}
              />
              3 Stars and above
            </label>
            <label className={product['filter__names']}>
              <input
                type="radio"
                name="rating"
                onClick={() => dispatch({ type: '2_STARS_ABOVE' })}
              />
              2 Stars and above
            </label>
            <label className={product['filter__names']}>
              <input
                type="radio"
                name="rating"
                onClick={() => dispatch({ type: '1_STARS_ABOVE' })}
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
                onClick={() => dispatch({ type: 'LOW_TO_HIGH' })}
              />
              Price: Low to High
            </label>
            <label className={product['filter__names']}>
              <input
                type="radio"
                name="sorting"
                onClick={() => dispatch({ type: 'HIGH_TO_LOW' })}
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
