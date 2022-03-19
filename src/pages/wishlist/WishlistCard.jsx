import wishlist from './Wishlist.module.css'
import { image } from '../../assets/images/index'

export function WishlistCard() {
  return (
    <div className="card card__shadow">
      <span className="card__icon right">
        <i className="fas fa-heart heart"></i>
      </span>
      <span className={wishlist['card__image']}>
        <img src={image} alt="card Image" />
      </span>
      <div className="card__footer">
        <span className="card__title">Super Mario</span>
        <span className="card__details">
          <span className="card__details__price__new">₹2999</span>
          <span className="card__details__price__old">₹3999</span>
          <span className="card__details__discount">25% off</span>
        </span>
        <div className="card__buttons">
          <button className={`btn btn__primary ${wishlist['btn']}`}>
            Move to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
