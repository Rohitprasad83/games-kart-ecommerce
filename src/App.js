import './App.css'
import { Routes, Route } from 'react-router-dom'
import Mockman from 'mockman-js'
import {
  Homepage,
  Products,
  Wishlist,
  Cart,
  Register,
  Login,
  Logout,
  Profile,
  Error404,
  SingleProduct,
  OrderSummary,
} from './pages/index'
import { ToastContainerCustom } from './components/toast/ToastContainer'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="/orders" element={<OrderSummary />} />

        <Route path="*" element={<Error404 />} />
      </Routes>

      <ToastContainerCustom />
    </div>
  )
}

export default App
