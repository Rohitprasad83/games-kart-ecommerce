import { Navbar } from '../../components/navbar/Navbar.jsx'
import { useWishlistContext, useCart } from '../../context/index'
import { CartProductCard } from './CartProductCard'
import cartStyle from './Cart.module.css'

export function Cart() {
  const { cartItems, cartDispatch } = useCart()
  return (
    <div className="home__container">
      <Navbar />

      <div className={`main__container ${cartStyle['main__container']}`}>
        {cartItems.products.map(product => (
          <CartProductCard key={product._id} cartProduct={product} />
        ))}
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
