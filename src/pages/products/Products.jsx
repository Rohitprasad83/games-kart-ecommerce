import { image } from '../../assets/images/index'
import { Navbar } from '../../components/navbar/Navbar.jsx'
import './Products.css'

export function Products() {
  return (
    <div className="home__container">
      <Navbar />

      <div className="main__container">
        <aside className="filter text__md">
          <div className="filter__header">
            <span className="font__bold">Filters</span>
            <button className="filter__clear">Clear</button>
          </div>
          <div className="filter__slider flex__column text__md ">
            <label for="slider">Select your Price Range</label>
            <div className="slider__price text__md font__light">
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
              className="slider"
            />
            <div className="slider__output text__md"></div>
          </div>
          <div className="filter__category flex__column">
            <h5>Category</h5>

            <label className="filter__names">
              <input type="checkbox" />
              Action
            </label>
            <label className="filter__names">
              <input type="checkbox" />
              Arcade
            </label>
            <label className="filter__names">
              <input type="checkbox" />
              Strategy
            </label>
            <label className="filter__names">
              <input type="checkbox" />
              Casual
            </label>
            <label className="filter__names">
              <input type="checkbox" />
              Sports
            </label>
          </div>
          <div className="filter__rating flex__column">
            <h5>Rating</h5>

            <label className="filter__names">
              <input type="radio" name="rating" />4 Stars and above
            </label>
            <label className="filter__names">
              <input type="radio" name="rating" />3 Stars and above
            </label>
            <label className="filter__names">
              <input type="radio" name="rating" />2 Stars and above
            </label>
            <label className="filter__names">
              <input type="radio" name="rating" />1 Stars and above
            </label>
          </div>
          <div className="filter__sorting flex__column">
            <h5>Sort By</h5>
            <label className="filter__names">
              <input type="radio" name="sorting" />
              Price: Low to High
            </label>
            <label className="filter__names">
              <input type="radio" name="sorting" />
              Price: High to Low
            </label>
          </div>
        </aside>
        <main className="products">
          <div className="card card__shadow">
            <span className="card__icon right">
              <i className="far fa-heart"></i>
            </span>
            <span className="card__image">
              <img src={image} alt="Product Image" />
            </span>
            <div className="card__footer">
              <span className="card__title">Super Mario</span>
              <span className="card__details">
                <span className="card__details__price__new">₹2999</span>
                <span className="card__details__price__old">₹3999</span>
                <span className="card__details__discount">25% off</span>
              </span>
              <div className="card__buttons">
                <button className="btn btn__primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="card card__shadow">
            <span className="card__icon right">
              <i className="fas fa-heart text__pink"></i>
            </span>
            <span className="card__image">
              <img src={image} alt="Product Image" />
            </span>
            <div className="card__footer">
              <span className="card__title">Super Mario</span>
              <span className="card__details">
                <span className="card__details__price__new">₹2999</span>
                <span className="card__details__price__old">₹3999</span>
                <span className="card__details__discount">25% off</span>
              </span>
              <div className="card__buttons">
                <button className="btn btn__secondary">Go to Cart</button>
              </div>
            </div>
          </div>
          <div className="card card__shadow">
            <span className="card__icon right">
              <i className="far fa-heart"></i>
            </span>
            <span className="card__image">
              <img src={image} alt="Product Image" />
            </span>
            <div className="card__footer">
              <span className="card__title">Super Mario</span>
              <span className="card__details">
                <span className="card__details__price__new">₹2999</span>
                <span className="card__details__price__old">₹3999</span>
                <span className="card__details__discount">25% off</span>
              </span>
              <div className="card__buttons">
                <button className="btn btn__primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="card card__shadow">
            <span className="card__icon right">
              <i className="far fa-heart"></i>
            </span>
            <span className="card__image">
              <img src={image} alt="Product Image" />
            </span>
            <div className="card__footer">
              <span className="card__title">Super Mario</span>
              <span className="card__details">
                <span className="card__details__price__new">₹2999</span>
                <span className="card__details__price__old">₹3999</span>
                <span className="card__details__discount">25% off</span>
              </span>
              <div className="card__buttons">
                <button className="btn btn__primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="card card__shadow">
            <span className="card__icon right">
              <i className="far fa-heart"></i>
            </span>
            <span className="card__image">
              <img src={image} alt="Product Image" />
            </span>
            <div className="card__footer">
              <span className="card__title">Super Mario</span>
              <span className="card__details">
                <span className="card__details__price__new">₹2999</span>
                <span className="card__details__price__old">₹3999</span>
                <span className="card__details__discount">25% off</span>
              </span>
              <div className="card__buttons">
                <button className="btn btn__primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="card card__shadow">
            <span className="card__icon right">
              <i className="far fa-heart"></i>
            </span>
            <span className="card__image">
              <img src={image} alt="Product Image" />
            </span>
            <div className="card__footer">
              <span className="card__title">Super Mario</span>
              <span className="card__details">
                <span className="card__details__price__new">₹2999</span>
                <span className="card__details__price__old">₹3999</span>
                <span className="card__details__discount">25% off</span>
              </span>
              <div className="card__buttons">
                <button className="btn btn__primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="card card__shadow">
            <span className="card__icon right">
              <i className="far fa-heart"></i>
            </span>
            <span className="card__image">
              <img src={image} alt="Product Image" />
            </span>
            <div className="card__footer">
              <span className="card__title">Super Mario</span>
              <span className="card__details">
                <span className="card__details__price__new">₹2999</span>
                <span className="card__details__price__old">₹3999</span>
                <span className="card__details__discount">25% off</span>
              </span>
              <div className="card__buttons">
                <button className="btn btn__primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="card card__shadow">
            <span className="card__icon right">
              <i className="far fa-heart"></i>
            </span>
            <span className="card__image">
              <img src={image} alt="Product Image" />
            </span>
            <div className="card__footer">
              <span className="card__title">Super Mario</span>
              <span className="card__details">
                <span className="card__details__price__new">₹2999</span>
                <span className="card__details__price__old">₹3999</span>
                <span className="card__details__discount">25% off</span>
              </span>
              <div className="card__buttons">
                <button className="btn btn__primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
