import { useEffect } from 'react'
import { Navbar } from '../../components/navbar/Navbar.jsx'
import { WishlistCard } from './WishlistCard'
import { useWishlistContext } from '../../context/index.jsx'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../context/index.jsx'
import wishlist from './Wishlist.module.css'
import axios from 'axios'

export function Wishlist() {
  const { wishlistItems } = useWishlistContext()
  const { users } = useAuth()
  const navigation = useNavigate()

  const encodedToken = localStorage.getItem('token')
  useEffect(() => {
    // !token && navigation('/login')
    if (encodedToken) {
      ;(async () => {
        try {
          const response = await axios.get('/api/user/wishlist', {
            headers: {
              authorization: encodedToken, // passing token as an authorization header
            },
          })
          console.log(response)
        } catch (err) {
          console.log(err)
        }
      })()
    } else {
      navigation('/login')
    }
  }, [])
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
              <p
                className={`text__lg font__bold text__center ${wishlist['items__count']}`}>
                No of items in wish List {wishlistItems.length}
              </p>
            )}
          </div>
        }

        <div className={wishlist['wishlist__container']}>
          {wishlistItems.map(product => (
            <WishlistCard key={product._id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}
