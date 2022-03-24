function sortRatingInDescending(products) {
  return [...products].sort(
    (firstItem, secondItem) => secondItem.rating - firstItem.rating
  )
}

export { sortRatingInDescending }
