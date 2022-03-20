import productStyle from './Products.module.css'
import { image } from '../../assets/images/index'

export function ProductCard({
  _id,
  title,
  img,
  price,
  oldPrice,
  discount,
  categoryName,
  rating,
}) {
  return (
    <div className={`${productStyle['card']} card__shadow`}>
      <span className="card__icon right">
        <i className="far fa-heart"></i>
      </span>
      <span className={productStyle['card__image']}>
        <img src={img} alt={title} />
      </span>
      <div className="card__footer">
        <span className="card__title">{title}</span>
        <span className="card__details">
          <span className="card__details__price__new">₹{price}</span>
          <span className="card__details__price__old">₹{oldPrice}</span>
          <span className="card__details__discount">{discount}off</span>
        </span>
        <div className={productStyle['card__buttons']}>
          <button className={`btn btn__primary ${productStyle['btn']}`}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
