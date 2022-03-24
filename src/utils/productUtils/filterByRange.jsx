function filterByRange(products, rangeLimit) {
  return products.filter(product =>
    product['price'] <= rangeLimit ? product : false
  )
}

export { filterByRange }
