import productStyle from './Products.module.css'
import { useWishlistContext } from '../../context/index'
import {
  addWishlistItem,
  containsInWishlist,
} from '../../utils/wishlistUtils/index.jsx'
export function ProductCard({ product }) {
  const { wishlistItems, setWishlistItems } = useWishlistContext()
  const { _id, title, img, price, oldPrice, discount, categoryName, rating } =
    product

  return (
    <div className={`${productStyle['card']} card__shadow`}>
      <span
        className="card__icon right"
        onClick={() =>
          addWishlistItem(product, wishlistItems, setWishlistItems)
        }>
        {
          <i
            className={
              containsInWishlist(_id, wishlistItems)
                ? 'fas fa-heart text__pink'
                : 'far fa-heart '
            }></i>
        }
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
        <div className={`text__left text__md ${productStyle['card__info']}`}>
          <span className="font__bold">{categoryName}</span>
          <span>
            {rating}
            <i className={`fas fa-star ${productStyle['star']}`}></i>
          </span>
        </div>

        <div className={productStyle['card__buttons']}>
          <button className={`btn btn__primary ${productStyle['btn']}`}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
