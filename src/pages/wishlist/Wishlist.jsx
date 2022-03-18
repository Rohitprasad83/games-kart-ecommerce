import { image } from '../../assets/images/index'
import { Navbar } from '../../components/navbar/Navbar.jsx'
import './Wishlist.css'
export function Wishlist() {
  return (
    <div className="home__container">
      <Navbar />

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
