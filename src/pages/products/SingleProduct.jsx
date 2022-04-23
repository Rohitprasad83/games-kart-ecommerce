import { useState, useEffect } from 'react'
import { Navbar } from 'components/navbar/Navbar.jsx'
import { Footer } from 'components/footer/Footer.jsx'
import { useParams, useNavigate } from 'react-router-dom'
import { products } from 'backend/db/products'
import { ProductCard } from './ProductCard'
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
        <ProductCard product={product} />
      </div>
      <Footer />
    </div>
  )
}

export { SingleProduct }
