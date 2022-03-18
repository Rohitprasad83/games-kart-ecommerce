import { image } from '../../assets/images/index'
import './Cart.css'
export function Cart() {
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
            <a href="./wishlist.html">
              <span className="badge__icons">
                <i className="fa-regular fa-heart icon"></i>
                <span className="badge__number badge__primary">5</span>
              </span>
            </a>
          </li>
          <li className="navbar__list__items">
            <a href="./cart.html">
              <span className="badge__icons">
                <i className="fa-solid fa-cart-shopping icon"></i>
                <span className="badge__number badge__primary">5</span>
              </span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="main__container">
        <div className="card card__horizontal card__shadow">
          <span className="card__image">
            <img src={image} alt="card Image" />
          </span>
          <div className="card__footer">
            <span className="card__title">Super Mario</span>
            <div className="card__details">
              <span className="card__details__price__new">₹2999</span>
              <span className="card__details__price__old">₹3999</span>
              <span className="card__details__discount">25% off</span>
            </div>
            <div className="card__quantity text__md">
              <label for="quantity">Quantity:</label>
              <select id="cars" name="cars">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <hr />
            <div className="card__buttons">
              <button className="btn btn__error__outlined">
                Remove from Cart
              </button>
              <button className="btn btn__primary">Move to wish list</button>
            </div>
          </div>
        </div>
        <div className="cart">
          <h5>Price Details</h5>
          <hr />
          <div className="cart__details text__md">
            Price(2 items)
            <span className="text__r">₹5999</span>
          </div>
          <div className="cart__details text__md">
            Discount
            <span>-₹1999</span>
          </div>
          <div className="cart__details text__md">
            Delivery Charges
            <span>₹499</span>
          </div>
          <hr />
          <h5 className="cart__details">
            Total Amount
            <span className="text__lg">₹4499</span>
          </h5>
          <hr />
          <div className="text__md">You will save ₹1999 on this order</div>
          <button className="btn btn__primary font__bold">Check out</button>
        </div>
      </div>
    </div>
  )
}
