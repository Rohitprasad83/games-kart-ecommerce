import { useWishlistContext, useCart } from 'context/index'
import cartStyle from './Cart.module.css'
import { containsInWishlist } from 'utils/wishlistUtils/index.jsx'
import { removeFromCart, quantityHandler, wishlistHandler } from 'services'
import { useAuth } from 'context'

function CartProductCard({ cartProduct: product }) {
  const { cartDispatch } = useCart()
  const { wishlistItems, setWishlistItems } = useWishlistContext()
  const { encodedToken } = useAuth()

  const { _id, title, img, price, oldPrice, discount, quantity } = product
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
          <label htmlFor="quantity">Quantity:</label>
          <button
            className={cartStyle['quantity__btn']}
            onClick={() =>
              quantityHandler(_id, 'decrement', cartDispatch, encodedToken)
            }>
            -
          </button>
          <div>{quantity}</div>
          <button
            className={cartStyle['quantity__btn']}
            onClick={() =>
              quantityHandler(_id, 'increment', cartDispatch, encodedToken)
            }>
            +
          </button>
        </div>
        <hr />
        <div className={`card__buttons ${cartStyle['card__buttons']}`}>
          <button
            className={`btn btn__error__outlined ${cartStyle['btn']}`}
            onClick={() => removeFromCart(product, cartDispatch, encodedToken)}>
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
                wishlistHandler(
                  product,
                  wishlistItems,
                  setWishlistItems,
                  encodedToken
                )
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
