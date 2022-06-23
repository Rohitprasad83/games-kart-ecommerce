import { createContext, useContext, useState } from 'react'

const orderContext = createContext()
const useOrders = () => useContext(orderContext)

const initialOrders = []
const OrdersContextProvider = ({ children }) => {
  const [orderSummary, setOrderSummary] = useState(initialOrders)
  return (
    <orderContext.Provider
      value={{
        orderSummary,
        setOrderSummary,
      }}>
      {children}
    </orderContext.Provider>
  )
}

export { OrdersContextProvider, useOrders }
