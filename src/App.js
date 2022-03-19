import './App.css'
import { Homepage } from './pages/homepage/Homepage.jsx'
import { Products } from './pages/products/Products.jsx'
import { Wishlist } from './pages/wishlist/Wishlist.jsx'
import { Cart } from './pages/cart/Cart.jsx'
import { Register } from './pages/authentication/Register.jsx'
import { Login } from './pages/authentication/Login.jsx'
import { Logout } from './pages/authentication/Logout.jsx'

function App() {
  return (
    <div className="App">
      <Cart />
      <Wishlist />
      <Homepage />
      <Products />
      <Register />
      <Login />
      <Logout />
    </div>
  )
}

export default App
