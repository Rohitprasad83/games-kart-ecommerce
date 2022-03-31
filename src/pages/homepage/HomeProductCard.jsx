import { Link } from 'react-router-dom'
const HomeProductCard = ({ category }) => {
  const { categoryName, img } = category
  return (
    <div className="card card__shadow">
      <Link to="/products">
        <span className="card__text__overlay"> {categoryName}</span>
        <img src={img} alt="Action" className="responsive__img" />
      </Link>
    </div>
  )
}

export { HomeProductCard }
