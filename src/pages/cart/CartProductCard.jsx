import { useWishlistContext, useCart } from '../../context/index'
import cartStyle from './Cart.module.css'
import {
  addWishlistItem,
  containsInWishlist,
} from '../../utils/wishlistUtils/index.jsx'
import axios from 'axios'
import { successToast, errorToast } from '../../components/toast/Toast'

function CartProductCard({ cartProduct: product }) {
  const { cartDispatch } = useCart()
  const { wishlistItems, setWishlistItems } = useWishlistContext()

  const { _id, title, img, price, oldPrice, discount, quantity } = product
  const encodedToken = localStorage.getItem('token')

  const removeFromCart = async product => {
    try {
      const id = _id
      const response = await axios.delete(`/api/user/cart/${product._id}`, {
        headers: { authorization: encodedToken },
      })

      response.status === 200 &&
        cartDispatch({ type: 'REMOVE_FROM_CART', payload: id })
      successToast(title + ' removed from cart')
    } catch (err) {
      errorToast('Could not remove product from cart')
    }
  }

  const quantityHandler = async (_id, action) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${_id}`,
        {
          action: {
            type: action,
          },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      )
      response.status === 200 &&
        action === 'increment' &&
        cartDispatch({ type: 'INCREASE_QUANTITY', payload: _id })
      response.status === 200 &&
        action === 'decrement' &&
        cartDispatch({ type: 'DECREASE_QUANTITY', payload: _id })
    } catch (err) {
      errorToast('could not update quantity, please try again!')
    }
  }
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
            onClick={() => quantityHandler(_id, 'increment')}>
            +
          </button>
          <div>{quantity}</div>
          <button
            className={cartStyle['quantity__btn']}
            onClick={() => quantityHandler(_id, 'decrement')}>
            -
          </button>
        </div>
        <hr />
        <div className={`card__buttons ${cartStyle['card__buttons']}`}>
          <button
            className={`btn btn__error__outlined ${cartStyle['btn']}`}
            onClick={() => removeFromCart(_id)}>
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
