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
} from './context/'

// Call make Server
makeServer()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <WishlistProvider>
          <ProductFilterProvider>
            <App />
          </ProductFilterProvider>
        </WishlistProvider>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
