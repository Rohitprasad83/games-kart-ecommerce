import { Navbar } from '../../components/navbar/Navbar.jsx'
import wishlist from './Wishlist.module.css'
// import { WishlistCard } from './WishlistCard'
import { useWishlistContext } from '../../context/index.jsx'
import { ProductCard } from '../products/ProductCard'
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
            {' '}
            No of items in wish List {wishlistItems.length}
          </div>
        }

        <div className={wishlist['wishlist__container']}>
          {wishlistItems.map(product => (
            <ProductCard key={product['id']} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}
