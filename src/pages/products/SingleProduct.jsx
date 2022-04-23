import { useState, useEffect } from 'react'
import { Navbar } from 'components/navbar/Navbar.jsx'
import { Footer } from 'components/footer/Footer.jsx'
import { useParams, useNavigate } from 'react-router-dom'
import { products } from 'backend/db/products'
import productStyle from './Products.module.css'

function SingleProduct() {
  let { productId } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState({})
  useEffect(() => {
    const product = products.find(product => product._id === productId)
    product !== undefined ? setProduct(product) : navigate('/products')
  }, [])
  return (
    <div className="home__container">
      <Navbar />
      <div className="main__container">
        <div className={`text__lg ${productStyle['single-product']}`}>
          <div className={productStyle['product-image']}>
            <img src={product.img} alt={product.title} />
          </div>
          <div className={productStyle['product-details']}>
            <h3>{product.title}</h3>
            <span className={productStyle['product-description']}>
              <span className="font__bold">Description </span>-{' '}
              {product.description}
            </span>
            <hr />

            <span>
              <span className="font__bold">Category </span>-{' '}
              {product.categoryName}
            </span>

            <span>
              <span className="font__bold">Availabilty </span>- In Stock
            </span>
            <span>
              <span className="font__bold">Rating </span>- {product.rating}
            </span>

            <span className={productStyle['price']}>
              <span className="font__bold">Price - </span>
              <span>{product.price}</span>
              <span className={productStyle['striked']}>
                {product.oldPrice}
              </span>
              <span>{product.discount} Off</span>
            </span>
            <hr />
            <span className={productStyle['buttons']}>
              <button
                className={`btn btn__primary ${productStyle['single-product-btn']}`}>
                Add To Cart
              </button>
              <button
                className={`btn btn__secondary ${productStyle['single-product-btn']}`}>
                Add To Wishlist
              </button>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export { SingleProduct }
