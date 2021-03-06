import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { testHero, bestseller, newest } from 'assets/images/index'
import { Navbar, Footer } from 'components/index'
import { HomeProductCard } from './HomeProductCard'
import { useChangeTitle } from 'utils/changeDocumentTitle'
import 'styles/index.css'

export function Homepage() {
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useChangeTitle('Home')
  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get('/api/categories')
        setCategories(data.categories)
      } catch (err) {
        setError(true)
      }
    })()
  }, [])
  return (
    <div className="home__container">
      <Navbar />
      {error ? (
        <div className="main__container text__lg text__center">
          Something is Wrong from your Side 😔
        </div>
      ) : (
        <div className="main__container">
          <div className="center__image">
            <img
              src={testHero}
              alt="Homepage Banner"
              className="responsive__img"
            />
            <button
              className="btn home-btn"
              onClick={() => navigate('/products')}>
              Explore
            </button>
            <div className="banner-txt">
              Buy All Premium Games at One Place 🎲
            </div>
          </div>
          <h4 className="text__center">Shop by Categories</h4>
          <div className="categories">
            {categories.map(category => (
              <HomeProductCard key={category.id} category={category} />
            ))}
          </div>

          <div className="bottom__categories">
            <div className="card card__horizontal card__shadow">
              <span className="card__image">
                <img src={bestseller} alt="Best Seller" />
              </span>
              <div className="card__footer">
                <span className="card__title"> Best Seller </span>
                <span className="text__lg">
                  Check out the best Sellers of this month
                </span>
                <div className="card__buttons">
                  <Link to="/products">
                    <button className="btn btn__primary">
                      <i className="fa-solid fa-angle-right"> </i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card card__horizontal card__shadow">
              <span className="card__image">
                <img src={newest} alt="Monthly New Arrivals" />
              </span>
              <div className="card__footer">
                <span className="card__title"> New Arrivals </span>
                <span className="text__lg">
                  Check out the newest releses of this month
                </span>
                <div className="card__buttons">
                  <Link to="/products">
                    <button className="btn btn__primary">
                      <i className="fa-solid fa-angle-right"> </i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}
