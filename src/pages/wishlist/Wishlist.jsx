import { image } from '../../assets/images/index'
import './Wishlist.css'
export function Wishlist() {
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
            <span class="badge__icons">
              <a href="./wishlist.html">
                <i class="fa-regular fa-heart icon"></i>
                <span class="badge__number badge__primary"> 5 </span>
              </a>
            </span>
          </li>
          <li class="navbar__list__items">
            <span class="badge__icons">
              <a href="./cart.html">
                <i class="fa-solid fa-cart-shopping icon"></i>
                <span class="badge__number badge__primary">5</span>
              </a>
            </span>
          </li>
        </ul>
      </nav>

      <div class="main__container">
        <h3 class="text__center font__regular">My Wishlist</h3>

        <div class="wishlist">
          <div class="card card__shadow">
            <span class="card__icon right">
              <i class="fas fa-heart heart"></i>
            </span>
            <span class="card__image">
              <img src={image} alt="card Image" />
            </span>
            <div class="card__footer">
              <span class="card__title">Super Mario</span>
              <span class="card__details">
                <span class="card__details__price__new">₹2999</span>
                <span class="card__details__price__old">₹3999</span>
                <span class="card__details__discount">25% off</span>
              </span>
              <div class="card__buttons">
                <button class="btn btn__primary">Move to Cart</button>
              </div>
            </div>
          </div>
          <div class="card card__shadow">
            <span class="card__icon right">
              <i class="fas fa-heart heart"></i>
            </span>
            <span class="card__image">
              <img src={image} alt="card Image" />
            </span>
            <div class="card__footer">
              <span class="card__title">Super Mario</span>
              <span class="card__details">
                <span class="card__details__price__new">₹2999</span>
                <span class="card__details__price__old">₹3999</span>
                <span class="card__details__discount">25% off</span>
              </span>
              <div class="card__buttons">
                <button class="btn btn__primary">Move to Cart</button>
              </div>
            </div>
          </div>
          <div class="card card__shadow">
            <span class="card__icon right">
              <i class="fas fa-heart heart"></i>
            </span>
            <span class="card__image">
              <img src={image} alt="card Image" />
            </span>
            <div class="card__footer">
              <span class="card__title">Super Mario</span>
              <span class="card__details">
                <span class="card__details__price__new">₹2999</span>
                <span class="card__details__price__old">₹3999</span>
                <span class="card__details__discount">25% off</span>
              </span>
              <div class="card__buttons">
                <button class="btn btn__primary">Move to Cart</button>
              </div>
            </div>
          </div>
          <div class="card card__shadow">
            <span class="card__icon right">
              <i class="fas fa-heart heart"></i>
            </span>
            <span class="card__image">
              <img src={image} alt="card Image" />
            </span>
            <div class="card__footer">
              <span class="card__title">Super Mario</span>
              <span class="card__details">
                <span class="card__details__price__new">₹2999</span>
                <span class="card__details__price__old">₹3999</span>
                <span class="card__details__discount">25% off</span>
              </span>
              <div class="card__buttons">
                <button class="btn btn__primary">Move to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
