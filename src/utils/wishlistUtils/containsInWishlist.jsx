function containsInWishlist(_id, wishlistItems) {
  return wishlistItems.some(product => product._id === _id)
}

export { containsInWishlist }
