import { createContext, useContext, useReducer } from 'react'
import { productReducer } from '../reducer/productReducer'

const ProductFilterContext = createContext()
const useProductFilter = () => useContext(ProductFilterContext)

const initialFilters = {
  category: {
    action: false,
    adventure: false,
    arcade: false,
    strategy: false,
    sports: false,
  },
  sortBy: null,
  rangeLimit: 10000,
  rating: null,
}
const ProductFilterProvider = ({ children }) => {
  const [filters, productDispatch] = useReducer(productReducer, initialFilters)
  return (
    <ProductFilterContext.Provider value={{ filters, productDispatch }}>
      {children}
    </ProductFilterContext.Provider>
  )
}

export { ProductFilterProvider, useProductFilter }
