function addWishlistItem(product, wishlistItems, setWishlistItems) {
  for (const wishlistItem of wishlistItems) {
    if (product._id === wishlistItem._id)
      return setWishlistItems(
        wishlistItems.filter(item => item._id !== product._id)
      )
  }

  setWishlistItems([...wishlistItems, product])
}

export { addWishlistItem }
