import { createContext, useContext, useReducer } from 'react'
import { cartReducer } from '../reducer/cartReducer'
const cartContext = createContext()
const useCart = () => useContext(cartContext)

const initialCart = { products: [] }
const CartContextProvider = ({ children }) => {
  const [cartItems, cartDispatch] = useReducer(cartReducer, initialCart)
  return (
    <cartContext.Provider value={{ cartItems, cartDispatch }}>
      {children}
    </cartContext.Provider>
  )
}

export { CartContextProvider, useCart }
