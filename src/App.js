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
} from './pages/index'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
