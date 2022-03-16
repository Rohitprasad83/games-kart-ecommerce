import './Homepage.css'
import { image, center as heroImage } from '../../assets/images/index'

export function Homepage() {
  return (
    <div class="home__container">
      <nav class="navbar simple">
        <a href="./index.html">
          <h3 class="navbar__header"> Games - Cart </h3>{' '}
        </a>{' '}
        <ul class="navbar__list">
          <li class="navbar__list__items">
            <input type="text" class="search" placeholder="  🔍Search" />
          </li>{' '}
          <li class="navbar__list__items">
            <a href="./pages/login.html">
              <button class="btn btn__primary"> Login </button>{' '}
            </a>{' '}
          </li>
          <li class="navbar__list__items">
            <span class="badge__icons">
              <a href="./pages/wishlist.html">
                <i class="fa-regular fa-heart icon"> </i>{' '}
                <span class="badge__number badge__primary"> 5 </span>{' '}
              </a>{' '}
            </span>{' '}
          </li>{' '}
          <li class="navbar__list__items">
            <span class="badge__icons">
              <a href="./pages/cart.html">
                <i class="fa-solid fa-cart-shopping icon"> </i>{' '}
                <span class="badge__number badge__primary"> 5 </span>{' '}
              </a>{' '}
            </span>{' '}
          </li>{' '}
        </ul>{' '}
      </nav>
      <div class="main__container">
        <div class="categories">
          <div class="card card__shadow">
            <a href="./pages/products.html">
              <span class="card__text__overlay"> Action </span>{' '}
              <img src={image} alt="Action" class="responsive__img" />
            </a>{' '}
          </div>{' '}
          <div class="card card__shadow">
            <a href="./pages/products.html">
              <span class="card__text__overlay"> Arcade </span>{' '}
              <img src={image} alt="Arcade" class="responsive__img" />
            </a>{' '}
          </div>{' '}
          <div class="card card__shadow">
            <a href="./pages/products.html">
              <span class="card__text__overlay"> Strategy </span>{' '}
              <img src={image} alt="Strategy" class="responsive__img" />
            </a>{' '}
          </div>{' '}
          <div class="card card__shadow">
            <a href="./pages/products.html">
              <span class="card__text__overlay"> Casual </span>{' '}
              <img src={image} alt="Casual" class="responsive__img" />
            </a>{' '}
          </div>{' '}
          <div class="card card__shadow">
            <a href="./pages/products.html">
              <span class="card__text__overlay"> Sports </span>{' '}
              <img src={image} alt="Sports" class="responsive__img" />
            </a>{' '}
          </div>{' '}
        </div>
        <div class="center__image">
          <img src={heroImage} alt="He" class="responsive__img" />
        </div>
        <div class="bottom__categories">
          <div class="card card__horizontal card__shadow">
            <span class="card__image">
              <img src={image} alt="New Arrivals" />
            </span>{' '}
            <div class="card__footer">
              <span class="card__title"> New Arrivals </span>{' '}
              <span class="text__lg">
                Check out the newest releses of this month{' '}
              </span>{' '}
              <div class="card__buttons">
                <button class="btn btn__secondary">
                  <i class="fa-solid fa-angle-right"> </i>{' '}
                </button>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
          <div class="card card__horizontal card__shadow">
            <span class="card__image">
              <img src={image} alt="Monthly New Arrivals" />
            </span>{' '}
            <div class="card__footer">
              <span class="card__title"> New Arrivals </span>{' '}
              <span class="text__lg">
                Check out the newest releses of this month{' '}
              </span>{' '}
              <div class="card__buttons">
                <button class="btn btn__secondary">
                  <i class="fa-solid fa-angle-right"> </i>{' '}
                </button>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  )
}
