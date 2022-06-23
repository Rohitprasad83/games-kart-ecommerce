import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Navbar, Footer } from 'components/index'
import { useCart, useAuth, useAddress, useOrders } from 'context/index'
import { CartProductCard } from './CartProductCard'
import { useChangeTitle } from 'utils/changeDocumentTitle'
import { successToast, errorToast } from 'components/toast/Toast.jsx'
import cartStyle from './Cart.module.css'
import { v4 as uuid } from 'uuid'
export function Cart() {
  const { cartItems, cartDispatch } = useCart()
  const navigation = useNavigate()
  const { user, encodedToken } = useAuth()
  const { defaultAddress } = useAddress()
  const { orderSummary, setOrderSummary } = useOrders()

  useEffect(() => getCartItems, [cartItems, cartDispatch])

  useChangeTitle('Cart')

  const getCartItems = async () => {
    if (encodedToken) {
      try {
        await axios.get(`/api/user/cart`, {
          headers: {
            authorization: encodedToken,
          },
        })
      } catch (err) {
        errorToast('could not fetch cart')
      }
    } else {
      errorToast('Please Login First!')
    }
  }
  const price = (total, curr) => curr.price * curr.quantity + total
  const totalPrice = cartItems.products.reduce(price, 0)
  const totalDiscount = Math.floor(totalPrice * 0.1)
  const finalAmount = Number(totalPrice) - Number(totalDiscount) - 499
  function loadScript(src) {
    return new Promise(resolve => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  async function displayRazorpay() {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?')
      return
    }

    const orderAddress =
      defaultAddress.address +
      ',' +
      defaultAddress.district +
      ',' +
      defaultAddress.state +
      ',' +
      defaultAddress.pincode

    const options = {
      key: 'rzp_test_WDAsDx6Ns132iO',
      amount: finalAmount * 100,
      currency: 'INR',
      name: 'GamesCart',
      description: 'Thank you for shopping with us',
      handler: async response => {
        const orderId = uuid()
        const orderData = {
          orderId,
          name: defaultAddress.name,
          products: [...cartItems.products],
          amount: options.amount,
          paymentId: response.razorpay_payment_id,
          delivery: orderAddress,
          mobile: defaultAddress.mobile,
        }
        cartDispatch({ type: 'RESET' })
        setOrderSummary(prev => [...prev, orderData])
        navigation('/orders', { state: orderData })
        successToast('Your Order has been placed successfully!')
      },
      prefill: {
        name: defaultAddress.name,
        email: user.email,
        contact: '+91' + defaultAddress.mobile,
      },
      theme: {
        color: '#f44336',
      },
    }
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }

  return (
    <div className="home__container">
      <Navbar />

      <div className={`main__container ${cartStyle['main__container']}`}>
        <div className={cartStyle['cart__summary']}>
          <div className={cartStyle['cart__container']}>
            {cartItems.products.map(product => (
              <CartProductCard cartProduct={product} key={product._id} />
            ))}
          </div>
          <div className={cartStyle['cart__side']}>
            {cartItems.products.length > 0 && (
              <div className={cartStyle['address']}>
                <p className={cartStyle['address-header']}>
                  Shipping Address - Default
                </p>
                <div className="flex-between">
                  <div className="font__bold">{defaultAddress.name}</div>
                  <Link to="/profile">
                    <i className="fa-solid fa-gear pointer"></i>
                  </Link>
                </div>
                <p> {defaultAddress.address} </p>
                <p> {defaultAddress.district} </p>
                <p> {defaultAddress.state} </p>
                <p> {defaultAddress.pincode} </p>
                <p>
                  <span>Mobile: </span> {defaultAddress.mobile}
                </p>
              </div>
            )}

            {cartItems.products.length === 0 ? (
              <div className={cartStyle['flex__column']}>
                <div className="text__lg text__center">Your Cart is Empty</div>
                <div className="text__lg text__center">
                  Add Products to Your Cart
                </div>
                <Link to="/products" className="text__center">
                  <button className="btn btn__primary text__lg">
                    Shop Now
                  </button>
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
                      <div className={cartStyle['flex__row']} key={product._id}>
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
                  className={`btn btn__primary font__bold ${cartStyle['btn']}`}
                  onClick={displayRazorpay}>
                  Check out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
