import './Homepage.css'
import { image, center as heroImage } from '../../assets/images/index'

export function Homepage() {
  return (
    <div className="home__container">
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
      <div className="main__container">
        <div className="categories">
          <div className="card card__shadow">
            <a href="./pages/products.html">
              <span className="card__text__overlay"> Action </span>{' '}
              <img src={image} alt="Action" className="responsive__img" />
            </a>{' '}
          </div>{' '}
          <div className="card card__shadow">
            <a href="./pages/products.html">
              <span className="card__text__overlay"> Arcade </span>{' '}
              <img src={image} alt="Arcade" className="responsive__img" />
            </a>{' '}
          </div>{' '}
          <div className="card card__shadow">
            <a href="./pages/products.html">
              <span className="card__text__overlay"> Strategy </span>{' '}
              <img src={image} alt="Strategy" className="responsive__img" />
            </a>{' '}
          </div>{' '}
          <div className="card card__shadow">
            <a href="./pages/products.html">
              <span className="card__text__overlay"> Casual </span>{' '}
              <img src={image} alt="Casual" className="responsive__img" />
            </a>{' '}
          </div>{' '}
          <div className="card card__shadow">
            <a href="./pages/products.html">
              <span className="card__text__overlay"> Sports </span>{' '}
              <img src={image} alt="Sports" className="responsive__img" />
            </a>{' '}
          </div>{' '}
        </div>
        <div className="center__image">
          <img src={heroImage} alt="He" className="responsive__img" />
        </div>
        <div className="bottom__categories">
          <div className="card card__horizontal card__shadow">
            <span className="card__image">
              <img src={image} alt="New Arrivals" />
            </span>{' '}
            <div className="card__footer">
              <span className="card__title"> New Arrivals </span>{' '}
              <span className="text__lg">
                Check out the newest releses of this month{' '}
              </span>{' '}
              <div className="card__buttons">
                <button className="btn btn__secondary">
                  <i className="fa-solid fa-angle-right"> </i>{' '}
                </button>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
          <div className="card card__horizontal card__shadow">
            <span className="card__image">
              <img src={image} alt="Monthly New Arrivals" />
            </span>{' '}
            <div className="card__footer">
              <span className="card__title"> New Arrivals </span>{' '}
              <span className="text__lg">
                Check out the newest releses of this month{' '}
              </span>{' '}
              <div className="card__buttons">
                <button className="btn btn__secondary">
                  <i className="fa-solid fa-angle-right"> </i>{' '}
                </button>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  )
}
