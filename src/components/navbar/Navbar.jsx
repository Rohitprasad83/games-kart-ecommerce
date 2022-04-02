import './Navbar.css'
import { Link } from 'react-router-dom'
import { useWishlistContext, useCart } from '../../context/index.jsx'
export function Navbar() {
  const { cartItems } = useCart()
  const { wishlistItems } = useWishlistContext()
  const token = localStorage.getItem('token')

  return (
    <nav className="navbar simple">
      <Link to="/">
        <h3 className="navbar__header"> Games-Cart </h3>
      </Link>
      <ul className="navbar__list">
        <li className="navbar__list__items">
          <input type="text" className="search" placeholder="  🔍Search" />
        </li>
        <li className="navbar__list__items">
          {token ? (
            <Link to="/profile">
              <button className="btn btn__primary"> Profile </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn btn__primary"> Login </button>
            </Link>
          )}
        </li>
        <li className="navbar__list__items">
          <span className="badge__icons">
            <Link to="/wishlist">
              <i className="fa-regular fa-heart icon"> </i>
              <span className="badge__number badge__primary">
                {wishlistItems.length}
              </span>
            </Link>
          </span>
        </li>
        <li className="navbar__list__items">
          <span className="badge__icons">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping icon"> </i>
              <span className="badge__number badge__primary">
                {cartItems.products.length}
              </span>
            </Link>
          </span>
        </li>
      </ul>
    </nav>
  )
}
