function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      }
    case 'REMOVE_FROM_CART':
      return { ...state }
    default:
      return { ...state }
  }
}

export { cartReducer }
