import { useState, useEffect } from 'react'
import axios from 'axios'
import '../../styles/index.css'
import { image, center as heroImage } from '../../assets/images/index'
import { Navbar } from '../../components/navbar/Navbar.jsx'
import { HomeProductCard } from './HomeProductCard'
export function Homepage() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    try {
      ;(async () => {
        const { data } = await axios.get('/api/categories')
        setCategories(data.categories)
      })()
    } catch (e) {
      console.log(e)
    }
  }, [])

  return (
    <div className="home__container">
      <Navbar />
      <div className="main__container">
        <div className="categories">
          {categories.map(category => (
            <HomeProductCard key={category.id} category={category} />
          ))}
        </div>
        <div className="center__image">
          <img src={heroImage} alt="He" className="responsive__img" />
        </div>
        <div className="bottom__categories">
          <div className="card card__horizontal card__shadow">
            <span className="card__image">
              <img src={image} alt="New Arrivals" />
            </span>
            <div className="card__footer">
              <span className="card__title"> New Arrivals </span>
              <span className="text__lg">
                Check out the newest releses of this month
              </span>
              <div className="card__buttons">
                <button className="btn btn__secondary">
                  <i className="fa-solid fa-angle-right"> </i>
                </button>
              </div>
            </div>
          </div>
          <div className="card card__horizontal card__shadow">
            <span className="card__image">
              <img src={image} alt="Monthly New Arrivals" />
            </span>
            <div className="card__footer">
              <span className="card__title"> New Arrivals </span>
              <span className="text__lg">
                Check out the newest releses of this month
              </span>
              <div className="card__buttons">
                <button className="btn btn__secondary">
                  <i className="fa-solid fa-angle-right"> </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
