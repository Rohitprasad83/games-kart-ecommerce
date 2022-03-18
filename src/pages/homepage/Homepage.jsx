import '../../styles/index.css'
import { image, center as heroImage } from '../../assets/images/index'
import { Navbar } from '../../components/navbar/Navbar.jsx'

export function Homepage() {
  return (
    <div className="home__container">
      <Navbar />
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
