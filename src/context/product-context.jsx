import { createContext, useContext, useReducer } from 'react'
import { productReducer } from '../reducer/productReducer'

const ProductFilterContext = createContext()
const useProductFilter = () => useContext(ProductFilterContext)

const ProductFilterProvider = ({ children }) => {
  const [filters, productDispatch] = useReducer(productReducer, {
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
  })
  return (
    <ProductFilterContext.Provider value={{ filters, productDispatch }}>
      {children}
    </ProductFilterContext.Provider>
  )
}

export { ProductFilterProvider, useProductFilter }
