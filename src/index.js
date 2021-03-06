import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { makeServer } from './server'
import { BrowserRouter } from 'react-router-dom'
import {
  ProductFilterProvider,
  WishlistProvider,
  CartContextProvider,
  AuthContextProvider,
  AddressContextProvider,
  OrdersContextProvider,
} from './context/'

// Call make Server
makeServer()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <WishlistProvider>
            <ProductFilterProvider>
              <AddressContextProvider>
                <OrdersContextProvider>
                  <App />
                </OrdersContextProvider>
              </AddressContextProvider>
            </ProductFilterProvider>
          </WishlistProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
