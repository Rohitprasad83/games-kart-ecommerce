import { useEffect } from 'react'
import { Navbar } from '../../components/navbar/Navbar.jsx'
import { useCart } from '../../context/index'
import { CartProductCard } from './CartProductCard'
import { Link, useNavigate } from 'react-router-dom'
import cartStyle from './Cart.module.css'
import axios from 'axios'

export function Cart() {
  const { cartItems } = useCart()
  const navigation = useNavigate()
  const token = localStorage.getItem('token')
  useEffect(() => {
    !token && navigation('/login')
  }, [])
  const encodedToken = localStorage.getItem('token')
  const getCartItems = async () => {
    try {
      await axios.get(`/api/user/cart`, {
        headers: {
          authorization: encodedToken,
        },
      })
    } catch (err) {
      console.log('could not fetch cart')
    }
  }
  useEffect(() => getCartItems, [cartItems])
  const price = (total, curr) => curr.price * curr.quantity + total
  const totalPrice = cartItems.products.reduce(price, 0)
  const totalDiscount = Math.floor(totalPrice * 0.1)
  return (
    <div className="home__container">
      <Navbar />

      <div className={`main__container ${cartStyle['main__container']}`}>
        <div className={cartStyle['cart__summary']}>
          {cartItems.products.length === 0 ? (
            <div className={cartStyle['flex__column']}>
              <div className="text__lg text__center">Your Cart is Empty</div>
              <div className="text__lg text__center">
                Add Products to Your Cart
              </div>
              <Link to="/products" className="text__center">
                <button className="btn btn__primary text__lg">Shop Now</button>
              </Link>
            </div>
          ) : (
            <div className={cartStyle['cart']}>
              <h5>Price Details</h5>
              <hr />
              <div className={`${cartStyle['flex__column']} text__md`}>
                <div className={cartStyle['flex__row']}>
                  <span> Name</span>
                  <span> Quantity</span>
                </div>
                {cartItems.products.map(product => {
                  return (
                    <div className={cartStyle['flex__row']}>
                      <span>{product.title}</span>
                      <span className="text__right"> {product.quantity}</span>
                    </div>
                  )
                })}
              </div>
              <div className={`${cartStyle['cart__details']} text__md`}>
                Total Price
                <span className="text__right">₹{totalPrice}</span>
              </div>
              <div className={`${cartStyle['cart__details']} text__md`}>
                Discount
                <span>-₹{totalDiscount}</span>
              </div>
              <div className={`${cartStyle['cart__details']} text__md`}>
                Delivery Charges
                <span>₹499</span>
              </div>
              <hr />
              <h5 className={cartStyle['cart__details']}>
                Total Amount
                <span className="text__lg">
                  ₹{totalPrice - totalDiscount - 499}
                </span>
              </h5>
              <hr />
              <div className="text__md">
                You will save ₹{totalDiscount} on this order
              </div>
              <button
                className={`btn btn__primary font__bold ${cartStyle['btn']}`}>
                Check out
              </button>
            </div>
          )}
        </div>
        <div className={cartStyle['cart__container']}>
          {cartItems.products.map(product => (
            <CartProductCard key={product._id} cartProduct={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
