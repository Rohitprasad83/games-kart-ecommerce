import React from 'react'
import { Navbar, Footer } from 'components/index'
import cartStyle from './Cart.module.css'
import { useLocation, Link } from 'react-router-dom'

function OrderSummary() {
  const { state } = useLocation()
  return (
    <div className="home__container">
      <Navbar />

      <div className={`main__container ${cartStyle['main__container']}`}>
        <div>
          {state && (
            <div className={cartStyle['order-summary']}>
              <div className={cartStyle['flex__column']}>
                <p>Order Confirmed</p>
                <p>Order Id - {state.orderId}</p>
                <p>Payment Id - {state.paymentId}</p>
                <p>Total Amount - ₹ {Number(state.amount) / 100}</p>
                <p>Order will be shipped to :</p>
                <p className="font__bold">{state.name}</p>
                <p>{state.delivery}</p>
                <p>Expected delivery in 2-3 days</p>
              </div>
              <div>
                {state.products.map(product => (
                  <div key={product._id} className={cartStyle['order-product']}>
                    <img src={product.img} alt={product.title} className="" />
                    <div className={`font__bold ${cartStyle['product-items']}`}>
                      {product.title}
                    </div>
                    <div className={cartStyle['product-items']}>
                      Category: {product.categoryName}
                    </div>
                    <div className={cartStyle['product-items']}>
                      Total Quantity: {product.quantity}
                    </div>
                    <div className={cartStyle['product-items']}>
                      Price: ₹ {product.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <Link to="/products">
            <div className="text__center">
              <button className="btn btn__primary">Shop More</button>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export { OrderSummary }
