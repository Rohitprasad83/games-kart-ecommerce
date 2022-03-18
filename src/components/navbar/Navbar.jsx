import './Navbar.css'
export function Navbar() {
  return (
    <nav className="navbar simple">
      <a href="./index.html">
        <h3 className="navbar__header"> Games - Cart </h3>{' '}
      </a>{' '}
      <ul className="navbar__list">
        <li className="navbar__list__items">
          <input type="text" className="search" placeholder="  🔍Search" />
        </li>{' '}
        <li className="navbar__list__items">
          <a href="./pages/login.html">
            <button className="btn btn__primary"> Login </button>{' '}
          </a>{' '}
        </li>
        <li className="navbar__list__items">
          <span className="badge__icons">
            <a href="./pages/wishlist.html">
              <i className="fa-regular fa-heart icon"> </i>{' '}
              <span className="badge__number badge__primary"> 5 </span>{' '}
            </a>{' '}
          </span>{' '}
        </li>{' '}
        <li className="navbar__list__items">
          <span className="badge__icons">
            <a href="./pages/cart.html">
              <i className="fa-solid fa-cart-shopping icon"> </i>{' '}
              <span className="badge__number badge__primary"> 5 </span>{' '}
            </a>{' '}
          </span>{' '}
        </li>{' '}
      </ul>{' '}
    </nav>
  )
}
