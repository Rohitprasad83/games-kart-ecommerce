import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useWishlistContext, useCart, useAuth } from '../../context/index.jsx'
import { successToast } from '../toast/Toast'
export function Navbar() {
  const { cartItems, cartDispatch } = useCart()
  const { wishlistItems, setWishlistItems } = useWishlistContext()
  const { encodedToken, setEncodedToken } = useAuth('token')
  const navigation = useNavigate()
  const logoutHandler = () => {
    localStorage.removeItem('token')
    setEncodedToken(null)
    successToast('You have been successfully logged out')
    navigation('/login')
    cartDispatch({ type: 'RESET', payload: [] })
    setWishlistItems([])
  }
  return (
    <nav className="navbar simple">
      <Link to="/">
        <h3 className="navbar__header"> Games-Cart </h3>
      </Link>
      <ul className="navbar__list">
        <li className="navbar__list__items">
          {encodedToken ? (
            <button className="btn btn__primary" onClick={logoutHandler}>
              Logout
            </button>
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

        <li className="navbar__list__items">
          <span className="badge__icons">
            <Link to="/profile">
              <i className="fa-solid fa-user icon"></i>
            </Link>
          </span>
        </li>
      </ul>
    </nav>
  )
}
