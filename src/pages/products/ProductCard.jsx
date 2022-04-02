import { Link } from 'react-router-dom'
import productStyle from './Products.module.css'
import { useWishlistContext, useCart } from '../../context/index'
import {
  addWishlistItem,
  containsInWishlist,
} from '../../utils/wishlistUtils/index.jsx'
import axios from 'axios'
export function ProductCard({ product }) {
  const { wishlistItems, setWishlistItems } = useWishlistContext()
  const { cartItems, cartDispatch } = useCart()
  const { _id, title, img, price, oldPrice, discount, categoryName, rating } =
    product
  const encodedToken = localStorage.getItem('token')

  const addToWishlist = async (product, wishlistItems, setWishlistItems) => {
    if (encodedToken) {
      try {
        const response = containsInWishlist(_id, wishlistItems)
          ? await axios.post(
              `/api/user/wishlist`,
              { product },
              {
                headers: {
                  authorization: encodedToken,
                },
              }
            )
          : await axios.delete(`/api/user/wishlist/${_id}`, {
              headers: {
                authorization: encodedToken,
              },
            })
        addWishlistItem(product, wishlistItems, setWishlistItems)
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log('Please Login First')
    }
  }

  return (
    <div className={`${productStyle['card']} card__shadow`}>
      <span
        className="card__icon right"
        onClick={() => addToWishlist(product, wishlistItems, setWishlistItems)}>
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
          {cartItems.products.some(item => item._id === _id) ? (
            <Link to="/cart">
              <button className={`btn btn__secondary ${productStyle['btn']}`}>
                Go to Cart
              </button>
            </Link>
          ) : (
            <button
              className={`btn btn__primary ${productStyle['btn']}`}
              onClick={() =>
                cartDispatch({ type: 'ADD_TO_CART', payload: product })
              }>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
