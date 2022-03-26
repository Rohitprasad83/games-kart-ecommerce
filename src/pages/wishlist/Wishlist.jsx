import { Navbar } from '../../components/navbar/Navbar.jsx'
import wishlist from './Wishlist.module.css'
import { WishlistCard } from './WishlistCard'
import { useWishlistContext } from '../../context/index.jsx'
import { Link } from 'react-router-dom'

export function Wishlist() {
  const { wishlistItems, setWishlistItems } = useWishlistContext()
  return (
    <div className="home__container">
      <Navbar />

      <div className={`main__container ${wishlist['main__container']}`}>
        <h3
          className={`text__center font__regular ${wishlist['wishlist__header']}`}>
          My Wishlist
        </h3>
        {
          <div className="text__lg font__bold text__center">
            {wishlistItems.length === 0 ? (
              <div className={wishlist['flex__column']}>
                <div>Your Wishlist is Empty</div>
                <div>Add Products to Your Wishlist</div>
                <Link to="/products" className="text__xl">
                  <button className="btn btn__primary text__lg">
                    Shop Now
                  </button>
                </Link>
              </div>
            ) : (
              <p className="text__lg font__bold text__center">
                No of items in wish List {wishlistItems.length}
              </p>
            )}
          </div>
        }

        <div className={wishlist['wishlist__container']}>
          {wishlistItems.map(product => (
            <WishlistCard key={product['id']} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}
