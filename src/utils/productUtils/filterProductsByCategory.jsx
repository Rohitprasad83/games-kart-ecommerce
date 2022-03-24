function filterProductsByCategory(products, category) {
    let filteredProducts = []
    const categoryArray = Object.keys(category)
    const checkEveryCategoryIsFalse = categoryName =>
      category[categoryName] === false
    const AllCategoryAreFalse = categoryArray.every(checkEveryCategoryIsFalse)

    for (const catName of categoryArray) {
      if (category[catName]) {
        const temp = products.filter(
          ({ categoryName }) =>
            categoryName.toLowerCase() === catName.toLowerCase()
        )
        filteredProducts = [...filteredProducts, ...temp]
      }
    }
    return AllCategoryAreFalse ? products : filteredProducts
  }

  export {filterProductsByCategory}