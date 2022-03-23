function sortByPrice(products, sortBy) {
  switch (sortBy) {
    case 'LOW_TO_HIGH':
      return [...products].sort(
        (firstItem, secondItem) => firstItem['price'] - secondItem['price']
      )
    case 'HIGH_TO_LOW':
      return [...products].sort(
        (firstItem, secondItem) => secondItem['price'] - firstItem['price']
      )
    default:
      return products
  }
}

export { sortByPrice }
