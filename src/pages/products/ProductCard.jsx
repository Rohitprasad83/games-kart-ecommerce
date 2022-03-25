import { useEffect } from 'react'
import productStyle from './Products.module.css'
import { useWishlistContext } from '../../context/index'

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
  const { wishlistItems, setWishlistItems } = useWishlistContext()
  useEffect(() => {
    console.log(wishlistItems)
  }, [wishlistItems])
  const item = {
    _id,
    title,
    img,
    price,
    oldPrice,
    discount,
    categoryName,
    rating,
  }
  function addWishlistItem() {
    for (let i = 0; i < wishlistItems.length; i++) {
      if (item._id === wishlistItems[i]._id)
        return setWishlistItems(
          wishlistItems.filter(product => item._id !== product._id)
        )
    }
    setWishlistItems([...wishlistItems, item])
  }
  return (
    <div className={`${productStyle['card']} card__shadow`}>
      <span className="card__icon right">{<i className></i>}</span>

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
          <button
            className={`btn btn__primary ${productStyle['btn']}`}
            onClick={addWishlistItem}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
