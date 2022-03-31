import { Link } from 'react-router-dom'
import { useProductFilter } from '../../context/index.jsx'
const HomeProductCard = ({ category }) => {
  const { productDispatch } = useProductFilter()
  const { categoryName, img } = category
  return (
    <div
      className="card card__shadow"
      onClick={() => productDispatch({ type: categoryName })}>
      <Link to="/products">
        <span className="card__text__overlay"> {categoryName}</span>
        <img src={img} alt={categoryName} className="responsive__img" />
      </Link>
    </div>
  )
}

export { HomeProductCard }
