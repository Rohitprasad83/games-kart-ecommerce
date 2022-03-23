function productReducer(state, action) {
  switch (action.type) {
    case 'LOW_TO_HIGH':
      return { ...state, sortBy: 'LOW_TO_HIGH' }
    case 'HIGH_TO_LOW':
      return { ...state, sortBy: 'HIGH_TO_LOW' }
    case '4_STARS_ABOVE':
      return { ...state, rating: '4_STARS_ABOVE' }
    case '3_STARS_ABOVE':
      return { ...state, rating: '3_STARS_ABOVE' }
    case '2_STARS_ABOVE':
      return { ...state, rating: '2_STARS_ABOVE' }
    case '1_STARS_ABOVE':
      return { ...state, rating: '1_STARS_ABOVE' }
    case 'PRICE_RANGE':
      return { ...state, rangeLimit: parseInt(action.payload, 10) }
    case 'Sports':
      return {
        ...state,
        category: { ...state.category, sports: !state.category.sports },
      }
    case 'Arcade':
      return {
        ...state,
        category: { ...state.category, arcade: !state.category.arcade },
      }
    case 'Strategy':
      return {
        ...state,
        category: { ...state.category, strategy: !state.category.strategy },
      }
    case 'Action':
      return {
        ...state,
        category: { ...state.category, action: !state.category.action },
      }
    case 'Adventure':
      return {
        ...state,
        category: { ...state.category, adventure: !state.category.adventure },
      }
    default:
      return { ...state }
  }
}

export { productReducer }
