import wishlist from './Wishlist.module.css'
import { useWishlistContext } from '../../context/index'

export function WishlistCard(product) {
  const { wishlistItems, setWishlistItems } = useWishlistContext()

  const { _id, title, img, price, oldPrice, discount, categoryName, rating } =
    product

  function addWishlistItem() {
    for (let i = 0; i < wishlistItems.length; i++) {
      if (product._id === wishlistItems[i]._id)
        return setWishlistItems(
          wishlistItems.filter(({ _id }) => _id !== product._id)
        )
    }
    setWishlistItems([...wishlistItems, product])
  }
  function containsInWishlist(_id) {
    return wishlistItems.some(product => product._id === _id)
  }
  return (
    <div className="card card__shadow">
      <span className="card__icon right" onClick={addWishlistItem}>
        {
          <i
            className={
              containsInWishlist(_id)
                ? 'fas fa-heart text__pink'
                : 'far fa-heart '
            }></i>
        }
      </span>
      <span className={wishlist['card__image']}>
        <img src={img} alt={title} />
      </span>
      <div className="card__footer">
        <span className="card__title">{title}</span>
        <span className="card__details">
          <span className="card__details__price__new">₹{price}</span>
          <span className="card__details__price__old">₹{oldPrice}</span>
          <span className="card__details__discount">{discount}% off</span>
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
