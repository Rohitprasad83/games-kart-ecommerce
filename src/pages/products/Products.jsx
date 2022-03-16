import { image } from '../../assets/images/index'
import './Homepage.css'

export function Products() {
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
            <a href="./login.html">
              <button class="btn btn__primary">Login</button>
            </a>
          </li>

          <li class="navbar__list__items">
            <span class="badge__icons">
              <a href="./wishlist.html">
                <i class="fa-regular fa-heart icon"></i>
                <span class="badge__number badge__primary">5</span>
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
        <aside class="filter text__md">
          <div class="filter__header">
            <span class="font__bold">Filters</span>
            <button class="filter__clear">Clear</button>
          </div>
          <div class="filter__slider flex__column text__md ">
            <label for="slider">Select your Price Range</label>
            <div class="slider__price text__md font__light">
              <span>1000</span>
              <span>5500</span>
              <span>10000</span>
            </div>
            <input
              id="slider"
              type="range"
              min="1000"
              max="10000"
              value="5500"
              class="slider"
            />
            <div class="slider__output text__md"></div>
          </div>
          <div class="filter__category flex__column">
            <h5>Category</h5>

            <label>
              <input type="checkbox" />
              Action
            </label>
            <label>
              <input type="checkbox" />
              Arcade
            </label>
            <label>
              <input type="checkbox" />
              Strategy
            </label>
            <label>
              <input type="checkbox" />
              Casual
            </label>
            <label>
              <input type="checkbox" />
              Sports
            </label>
          </div>
          <div class="filter__rating flex__column">
            <h5>Rating</h5>

            <label>
              <input type="radio" name="rating" />4 Stars and above
            </label>
            <label>
              <input type="radio" name="rating" />3 Stars and above
            </label>
            <label>
              <input type="radio" name="rating" />2 Stars and above
            </label>
            <label>
              <input type="radio" name="rating" />1 Stars and above
            </label>
          </div>
          <div class="filter__sorting flex__column">
            <h5>Sort By</h5>
            <label>
              <input type="radio" name="sorting" />
              Price: Low to High
            </label>
            <label>
              <input type="radio" name="sorting" />
              Price: High to Low
            </label>
          </div>
        </aside>
        <main class="products">
          <div class="card card__shadow">
            <span class="card__icon right">
              <i class="far fa-heart"></i>
            </span>
            <span class="card__image">
              <img src={image} alt="Product Image" />
            </span>
            <div class="card__footer">
              <span class="card__title">Super Mario</span>
              <span class="card__details">
                <span class="card__details__price__new">₹2999</span>
                <span class="card__details__price__old">₹3999</span>
                <span class="card__details__discount">25% off</span>
              </span>
              <div class="card__buttons">
                <button class="btn btn__primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="card card__shadow">
            <span class="card__icon right">
              <i class="fas fa-heart text__pink"></i>
            </span>
            <span class="card__image">
              <img src={image} alt="Product Image" />
            </span>
            <div class="card__footer">
              <span class="card__title">Super Mario</span>
              <span class="card__details">
                <span class="card__details__price__new">₹2999</span>
                <span class="card__details__price__old">₹3999</span>
                <span class="card__details__discount">25% off</span>
              </span>
              <div class="card__buttons">
                <button class="btn btn__secondary">Go to Cart</button>
              </div>
            </div>
          </div>
          <div class="card card__shadow">
            <span class="card__icon right">
              <i class="far fa-heart"></i>
            </span>
            <span class="card__image">
              <img src={image} alt="Product Image" />
            </span>
            <div class="card__footer">
              <span class="card__title">Super Mario</span>
              <span class="card__details">
                <span class="card__details__price__new">₹2999</span>
                <span class="card__details__price__old">₹3999</span>
                <span class="card__details__discount">25% off</span>
              </span>
              <div class="card__buttons">
                <button class="btn btn__primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="card card__shadow">
            <span class="card__icon right">
              <i class="far fa-heart"></i>
            </span>
            <span class="card__image">
              <img src={image} alt="Product Image" />
            </span>
            <div class="card__footer">
              <span class="card__title">Super Mario</span>
              <span class="card__details">
                <span class="card__details__price__new">₹2999</span>
                <span class="card__details__price__old">₹3999</span>
                <span class="card__details__discount">25% off</span>
              </span>
              <div class="card__buttons">
                <button class="btn btn__primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="card card__shadow">
            <span class="card__icon right">
              <i class="far fa-heart"></i>
            </span>
            <span class="card__image">
              <img src={image} alt="Product Image" />
            </span>
            <div class="card__footer">
              <span class="card__title">Super Mario</span>
              <span class="card__details">
                <span class="card__details__price__new">₹2999</span>
                <span class="card__details__price__old">₹3999</span>
                <span class="card__details__discount">25% off</span>
              </span>
              <div class="card__buttons">
                <button class="btn btn__primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="card card__shadow">
            <span class="card__icon right">
              <i class="far fa-heart"></i>
            </span>
            <span class="card__image">
              <img src={image} alt="Product Image" />
            </span>
            <div class="card__footer">
              <span class="card__title">Super Mario</span>
              <span class="card__details">
                <span class="card__details__price__new">₹2999</span>
                <span class="card__details__price__old">₹3999</span>
                <span class="card__details__discount">25% off</span>
              </span>
              <div class="card__buttons">
                <button class="btn btn__primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="card card__shadow">
            <span class="card__icon right">
              <i class="far fa-heart"></i>
            </span>
            <span class="card__image">
              <img src={image} alt="Product Image" />
            </span>
            <div class="card__footer">
              <span class="card__title">Super Mario</span>
              <span class="card__details">
                <span class="card__details__price__new">₹2999</span>
                <span class="card__details__price__old">₹3999</span>
                <span class="card__details__discount">25% off</span>
              </span>
              <div class="card__buttons">
                <button class="btn btn__primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="card card__shadow">
            <span class="card__icon right">
              <i class="far fa-heart"></i>
            </span>
            <span class="card__image">
              <img src={image} alt="Product Image" />
            </span>
            <div class="card__footer">
              <span class="card__title">Super Mario</span>
              <span class="card__details">
                <span class="card__details__price__new">₹2999</span>
                <span class="card__details__price__old">₹3999</span>
                <span class="card__details__discount">25% off</span>
              </span>
              <div class="card__buttons">
                <button class="btn btn__primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
