import { image } from '../../assets/images/index'
import { Navbar } from '../../components/navbar/Navbar.jsx'
import cartStyle from './Cart.module.css'
export function Cart() {
  return (
    <div className="home__container">
      <Navbar />

      <div className={`main__container ${cartStyle['main__container']}`}>
        <div
          className={`card card__horizontal card__shadow ${cartStyle['card__horizontal']}`}>
          <span className={`card__image ${cartStyle['card__image']}`}>
            <img src={image} alt="card Image" />
          </span>
          <div className={`card__footer ${cartStyle['card__footer']}`}>
            <span className="card__title">Super Mario</span>
            <div className="card__details">
              <span className="card__details__price__new">₹2999</span>
              <span className="card__details__price__old">₹3999</span>
              <span className="card__details__discount">25% off</span>
            </div>
            <div className={`${cartStyle['card__quantity']} text__md`}>
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
            <div className={`card__buttons ${cartStyle['card__buttons']}`}>
              <button
                className={`btn btn__error__outlined ${cartStyle['btn']}`}>
                Remove from Cart
              </button>
              <button className={`btn btn__primary ${cartStyle['btn']}`}>
                Move to wish list
              </button>
            </div>
          </div>
        </div>
        <div className={cartStyle['cart']}>
          <h5>Price Details</h5>
          <hr />
          <div className={`${cartStyle['cart__details']} text__md`}>
            Price(2 items)
            <span className="text__r">₹5999</span>
          </div>
          <div className={`${cartStyle['cart__details']} text__md`}>
            Discount
            <span>-₹1999</span>
          </div>
          <div className={`${cartStyle['cart__details']} text__md`}>
            Delivery Charges
            <span>₹499</span>
          </div>
          <hr />
          <h5 className={cartStyle['cart__details']}>
            Total Amount
            <span className="text__lg">₹4499</span>
          </h5>
          <hr />
          <div className="text__md">You will save ₹1999 on this order</div>
          <button className={`btn btn__primary font__bold ${cartStyle['btn']}`}>
            Check out
          </button>
        </div>
      </div>
    </div>
  )
}
