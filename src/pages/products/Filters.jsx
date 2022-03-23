import { useProductFilter } from '../../context/product-context'
import productStyle from './Products.module.css'

function Filters() {
  const { filters, productDispatch } = useProductFilter()
  const { category, rangeLimit, sortBy, rating } = filters
  const { action, adventure, sports, strategy, arcade } = category
  return (
    <aside className={`${productStyle['filter']} text__md`}>
      <div className={productStyle['filter__header']}>
        <span className="font__bold">Filters</span>
        <button
          className={productStyle['filter__clear']}
          onClick={() => productDispatch({ type: 'ClearAllFilters' })}>
          Clear
        </button>
      </div>
      <div
        className={`filter__slider ${productStyle['flex__column']} text__md`}>
        <label for="slider">Select your Price</label>
        <div
          className={`${productStyle['slider__price']} text__md font__light`}>
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
          <span className={productStyle['text__primary']}>₹ {rangeLimit}</span>
        </div>
      </div>
      <div className={`filter__category ${productStyle['flex__column']}`}>
        <h5>Category</h5>

        <label className={productStyle['filter__names']}>
          <input
            type="checkbox"
            checked={action}
            onChange={() => productDispatch({ type: 'Action' })}
          />
          Action
        </label>
        <label className={productStyle['filter__names']}>
          <input
            type="checkbox"
            checked={arcade}
            onChange={() => productDispatch({ type: 'Arcade' })}
          />
          Arcade
        </label>
        <label className={productStyle['filter__names']}>
          <input
            type="checkbox"
            checked={strategy}
            onChange={() => productDispatch({ type: 'Strategy' })}
          />
          Strategy
        </label>
        <label className={productStyle['filter__names']}>
          <input
            type="checkbox"
            checked={adventure}
            onChange={() => productDispatch({ type: 'Adventure' })}
          />
          Adventure
        </label>
        <label className={productStyle['filter__names']}>
          <input
            type="checkbox"
            checked={sports}
            onChange={() => productDispatch({ type: 'Sports' })}
          />
          Sports
        </label>
      </div>
      <div className={`filter__rating ${productStyle['flex__column']}`}>
        <h5>Rating</h5>

        <label className={productStyle['filter__names']}>
          <input
            type="radio"
            name="rating"
            checked={rating === '4_STARS_ABOVE'}
            onClick={() => productDispatch({ type: '4_STARS_ABOVE' })}
          />
          4 Stars and above
        </label>
        <label className={productStyle['filter__names']}>
          <input
            type="radio"
            name="rating"
            checked={rating === '3_STARS_ABOVE'}
            onClick={() => productDispatch({ type: '3_STARS_ABOVE' })}
          />
          3 Stars and above
        </label>
        <label className={productStyle['filter__names']}>
          <input
            type="radio"
            name="rating"
            checked={rating === '2_STARS_ABOVE'}
            onClick={() => productDispatch({ type: '2_STARS_ABOVE' })}
          />
          2 Stars and above
        </label>
        <label className={productStyle['filter__names']}>
          <input
            type="radio"
            name="rating"
            checked={rating === '1_STARS_ABOVE'}
            onClick={() => productDispatch({ type: '1_STARS_ABOVE' })}
          />
          1 Stars and above
        </label>
      </div>
      <div className={`filter__sorting ${productStyle['flex__column']}`}>
        <h5>Sort By</h5>
        <label className={productStyle['filter__names']}>
          <input
            type="radio"
            name="sorting"
            checked={sortBy === 'LOW_TO_HIGH'}
            onChange={() => productDispatch({ type: 'LOW_TO_HIGH' })}
          />
          Price: Low to High
        </label>
        <label className={productStyle['filter__names']}>
          <input
            type="radio"
            name="sorting"
            checked={sortBy === 'HIGH_TO_LOW'}
            onClick={() => productDispatch({ type: 'HIGH_TO_LOW' })}
          />
          Price: High to Low
        </label>
      </div>
    </aside>
  )
}

export { Filters }
