import product from './Products.module.css'
import { image } from '../../assets/images/index'

export function ProductCard({ type }) {
  return (
    <div className={`${product['card']} card__shadow`}>
      <span className="card__icon right">
        <i
          class={`${
            type === 'wishlist' ? 'fas fa-heart text__pink' : 'far fa-heart'
          }`}></i>
      </span>
      <span className={product['card__image']}>
        <img src={image} alt="Product Image" />
      </span>
      <div className="card__footer">
        <span className="card__title">Super Mario</span>
        <span className="card__details">
          <span className="card__details__price__new">₹2999</span>
          <span className="card__details__price__old">₹3999</span>
          <span className="card__details__discount">25% off</span>
        </span>
        <div className={product['card__buttons']}>
          <button className={`btn btn__primary ${product['btn']}`}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
