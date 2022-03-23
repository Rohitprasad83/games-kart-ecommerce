import { sortRatingInDescending } from './sortByRating'
function filterProductsByRating(products, filterRating) {
  switch (filterRating) {
    case '4_STARS_ABOVE':
      return sortRatingInDescending(
        [...products].filter(product => product.rating >= 4)
      )
    case '3_STARS_ABOVE':
      return sortRatingInDescending(
        [...products].filter(product => product.rating >= 3)
      )
    case '2_STARS_ABOVE':
      return sortRatingInDescending(
        [...products].filter(product => product.rating >= 2)
      )
    case '1_STARS_ABOVE':
      return sortRatingInDescending(
        [...products].filter(product => product.rating >= 1)
      )
    default:
      return products
  }
}

export { filterProductsByRating }
