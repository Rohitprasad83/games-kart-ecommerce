import { Navbar } from '../../components/navbar/Navbar.jsx'
import wishlist from './Wishlist.module.css'
import { WishlistCard } from './WishlistCard'
export function Wishlist() {
  return (
    <div className="home__container">
      <Navbar />

      <div className={`main__container ${wishlist['main__container']}`}>
        <h3
          className={`text__center font__regular ${wishlist['wishlist__header']}`}>
          My Wishlist
        </h3>
        <div className={wishlist['wishlist__container']}>
          <WishlistCard />
          <WishlistCard />
          <WishlistCard />
          <WishlistCard />
        </div>
      </div>
    </div>
  )
}
