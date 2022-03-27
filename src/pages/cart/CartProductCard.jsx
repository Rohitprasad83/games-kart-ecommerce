import { useWishlistContext, useCart } from '../../context/index'
import cartStyle from './Cart.module.css'
import {
  addWishlistItem,
  containsInWishlist,
} from '../../utils/wishlistUtils/index.jsx'
function CartProductCard({ cartProduct: product }) {
  const { cartDispatch } = useCart()
  const { wishlistItems, setWishlistItems } = useWishlistContext()

  const { _id, title, img, price, oldPrice, discount } = product
  return (
    <div
      className={`card card__horizontal card__shadow ${cartStyle['card__horizontal']}`}>
      <span className={`card__image ${cartStyle['card__image']}`}>
        <img src={img} alt="{title}" />
      </span>
      <div className={`card__footer ${cartStyle['card__footer']}`}>
        <span className="card__title">{title}</span>
        <div className="card__details">
          <span className="card__details__price__new">{price}</span>
          <span className="card__details__price__old">₹{oldPrice}</span>
          <span className="card__details__discount">{discount} off</span>
        </div>
        <div className={`${cartStyle['card__quantity']} text__md`}>
          <label for="quantity">Quantity:</label>
          <select id="cars" name="cars">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <hr />
        <div className={`card__buttons ${cartStyle['card__buttons']}`}>
          <button
            className={`btn btn__error__outlined ${cartStyle['btn']}`}
            onClick={() =>
              cartDispatch({ type: 'REMOVE_FROM_CART', payload: _id })
            }>
            Remove from Cart
          </button>
          {containsInWishlist(_id, wishlistItems) ? (
            <button className={`btn btn__primary ${cartStyle['btn']}`}>
              Added to WishList
            </button>
          ) : (
            <button
              className={`btn btn__primary ${cartStyle['btn']}`}
              onClick={() =>
                addWishlistItem(product, wishlistItems, setWishlistItems)
              }>
              Move to WishList
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export { CartProductCard }
