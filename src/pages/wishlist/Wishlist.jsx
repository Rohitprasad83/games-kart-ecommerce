import { image } from '../../assets/images/index'
import './Wishlist.css'
export function Wishlist() {
  return (
    <div className="home__container">
      <nav className="navbar simple">
        <a href="../index.html">
          <h3 className="navbar__header">Games-Cart</h3>
        </a>
        <ul className="navbar__list">
          <li className="navbar__list__items">
            <input type="text" className="search" placeholder="  🔍Search" />
          </li>
          <li className="navbar__list__items">
            <a href="./logout.html">
              <button className="btn btn__primary">Logout</button>
            </a>
          </li>

          <li className="navbar__list__items">
            <span className="badge__icons">
              <a href="./wishlist.html">
                <i className="fa-regular fa-heart icon"></i>
                <span className="badge__number badge__primary"> 5 </span>
              </a>
            </span>
          </li>
          <li className="navbar__list__items">
            <span className="badge__icons">
              <a href="./cart.html">
                <i className="fa-solid fa-cart-shopping icon"></i>
                <span className="badge__number badge__primary">5</span>
              </a>
            </span>
          </li>
        </ul>
      </nav>

      <div className="main__container">
        <h3 className="text__center font__regular">My Wishlist</h3>

        <div className="wishlist">
          <div className="card card__shadow">
            <span className="card__icon right">
              <i className="fas fa-heart heart"></i>
            </span>
            <span className="card__image">
              <img src={image} alt="card Image" />
            </span>
            <div className="card__footer">
              <span className="card__title">Super Mario</span>
              <span className="card__details">
                <span className="card__details__price__new">₹2999</span>
                <span className="card__details__price__old">₹3999</span>
                <span className="card__details__discount">25% off</span>
              </span>
              <div className="card__buttons">
                <button className="btn btn__primary">Move to Cart</button>
              </div>
            </div>
          </div>
          <div className="card card__shadow">
            <span className="card__icon right">
              <i className="fas fa-heart heart"></i>
            </span>
            <span className="card__image">
              <img src={image} alt="card Image" />
            </span>
            <div className="card__footer">
              <span className="card__title">Super Mario</span>
              <span className="card__details">
                <span className="card__details__price__new">₹2999</span>
                <span className="card__details__price__old">₹3999</span>
                <span className="card__details__discount">25% off</span>
              </span>
              <div className="card__buttons">
                <button className="btn btn__primary">Move to Cart</button>
              </div>
            </div>
          </div>
          <div className="card card__shadow">
            <span className="card__icon right">
              <i className="fas fa-heart heart"></i>
            </span>
            <span className="card__image">
              <img src={image} alt="card Image" />
            </span>
            <div className="card__footer">
              <span className="card__title">Super Mario</span>
              <span className="card__details">
                <span className="card__details__price__new">₹2999</span>
                <span className="card__details__price__old">₹3999</span>
                <span className="card__details__discount">25% off</span>
              </span>
              <div className="card__buttons">
                <button className="btn btn__primary">Move to Cart</button>
              </div>
            </div>
          </div>
          <div className="card card__shadow">
            <span className="card__icon right">
              <i className="fas fa-heart heart"></i>
            </span>
            <span className="card__image">
              <img src={image} alt="card Image" />
            </span>
            <div className="card__footer">
              <span className="card__title">Super Mario</span>
              <span className="card__details">
                <span className="card__details__price__new">₹2999</span>
                <span className="card__details__price__old">₹3999</span>
                <span className="card__details__discount">25% off</span>
              </span>
              <div className="card__buttons">
                <button className="btn btn__primary">Move to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
