import { image } from '../../assets/images/index'
import './Cart.css'
export function Cart() {
  return (
    <div class="home__container">
      <nav class="navbar simple">
        <a href="../index.html">
          <h3 class="navbar__header">Games-Cart</h3>
        </a>
        <ul class="navbar__list">
          <li class="navbar__list__items">
            <input type="text" class="search" placeholder="  🔍Search" />
          </li>
          <li class="navbar__list__items">
            <a href="./logout.html">
              <button class="btn btn__primary">Logout</button>
            </a>
          </li>

          <li class="navbar__list__items">
            <a href="./wishlist.html">
              <span class="badge__icons">
                <i class="fa-regular fa-heart icon"></i>
                <span class="badge__number badge__primary">5</span>
              </span>
            </a>
          </li>
          <li class="navbar__list__items">
            <a href="./cart.html">
              <span class="badge__icons">
                <i class="fa-solid fa-cart-shopping icon"></i>
                <span class="badge__number badge__primary">5</span>
              </span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="main__container">
        <div class="card card__horizontal card__shadow">
          <span class="card__image">
            <img src={image} alt="card Image" />
          </span>
          <div class="card__footer">
            <span class="card__title">Super Mario</span>
            <div class="card__details">
              <span class="card__details__price__new">₹2999</span>
              <span class="card__details__price__old">₹3999</span>
              <span class="card__details__discount">25% off</span>
            </div>
            <div class="card__quantity text__md">
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
            <div class="card__buttons">
              <button class="btn btn__error__outlined">Remove from Cart</button>
              <button class="btn btn__primary">Move to wish list</button>
            </div>
          </div>
        </div>
        <div class="cart">
          <h5>Price Details</h5>
          <hr />
          <div class="cart__details text__md">
            Price(2 items)
            <span class="text__r">₹5999</span>
          </div>
          <div class="cart__details text__md">
            Discount
            <span>-₹1999</span>
          </div>
          <div class="cart__details text__md">
            Delivery Charges
            <span>₹499</span>
          </div>
          <hr />
          <h5 class="cart__details">
            Total Amount
            <span class="text__lg">₹4499</span>
          </h5>
          <hr />
          <div class="text__md">You will save ₹1999 on this order</div>
          <button class="btn btn__primary font__bold">Check out</button>
        </div>
      </div>
    </div>
  )
}
