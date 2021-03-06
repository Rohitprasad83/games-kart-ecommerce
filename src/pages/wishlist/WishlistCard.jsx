import wishlist from './Wishlist.module.css'
import { useWishlistContext, useCart, useAuth } from 'context/index'
import { Link } from 'react-router-dom'
import { containsInWishlist } from 'utils/wishlistUtils/index.jsx'
import { wishlistHandler, addToCart } from 'services'

export function WishlistCard(product) {
  const { wishlistItems, setWishlistItems } = useWishlistContext()
  const { cartItems, cartDispatch } = useCart()
  const { encodedToken } = useAuth()
  const { _id, title, img, price, oldPrice, discount, categoryName, rating } =
    product

  return (
    <div className="card card__shadow">
      <span
        className="card__icon right"
        onClick={() =>
          wishlistHandler(
            product,
            wishlistItems,
            setWishlistItems,
            encodedToken
          )
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
      <span>
        <Link to={`/products/${_id}`} className={wishlist['card__image']}>
          <img src={img} alt={title} />
        </Link>
      </span>
      <div className="card__footer">
        <span className="card__title">{title}</span>
        <span className="card__details">
          <span className="card__details__price__new">₹{price}</span>
          <span className="card__details__price__old">₹{oldPrice}</span>
          <span className="card__details__discount">{discount}% off</span>
        </span>

        <div className={`text__left text__md ${wishlist['card__info']}`}>
          <span className="font__bold">{categoryName}</span>
          <span>
            {rating}
            <i className={`fas fa-star ${wishlist['star']}`}></i>
          </span>
        </div>

        <div className="card__buttons">
          {cartItems.products.some(item => item._id === _id) ? (
            <Link
              to="/cart"
              className={`btn btn__secondary ${wishlist['btn']}`}>
              <button to="/cart">Go to Cart</button>
            </Link>
          ) : (
            <button
              className={`btn btn__primary ${wishlist['btn']}`}
              onClick={() => addToCart(product, cartDispatch, encodedToken)}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
