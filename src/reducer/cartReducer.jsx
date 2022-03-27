function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        products: state.products.filter(
          product => product._id !== action.payload
        ),
      }
    case 'INCREASE_QUANTITY':
      // Increase the quantity of the product till 5.
      return {
        ...state,
        products: state.products.map(product =>
          product._id === action.payload
            ? {
                ...product,
                quantity:
                  product.quantity < 5
                    ? product.quantity + 1
                    : product.quantity,
              }
            : { ...product }
        ),
      }
    case 'DECREASE_QUANTITY':
      // decrease the quantity of the item till 1
      return {
        ...state,
        products: state.products.map(product =>
          product._id === action.payload
            ? {
                ...product,
                quantity:
                  product.quantity > 1
                    ? product.quantity - 1
                    : product.quantity,
              }
            : { ...product }
        ),
      }
    default:
      return { ...state }
  }
}

export { cartReducer }
