import './Authentication.css'
export function Register() {
  return (
    <div className="home__container">
      <nav className="navbar simple">
        <a href="../index.html">
          <h3 className="navbar__header">Games-Cart</h3>
        </a>
        <ul className="navbar__list">
          <li className="navbar__list__items">
            <input type="text" className="search" placeholder="  🔍Search" />
          </li>
          <li className="navbar__list__items">
            <a href="./login.html">
              <button className="btn btn__primary">Login</button>
            </a>
          </li>

          <li className="navbar__list__items">
            <a href="./wishlist.html">
              <span className="badge__icons">
                <i className="fa-regular fa-heart icon"></i>
                <span className="badge__number badge__primary">5</span>
              </span>
            </a>
          </li>
          <li className="navbar__list__items">
            <a href="./cart.html">
              <span className="badge__icons">
                <i className="fa-solid fa-cart-shopping icon"></i>
                <span className="badge__number badge__primary">5</span>
              </span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="main__container">
        <div className="form__group">
          <h4>Sign up</h4>
          <div className="form__name">
            <label for="first__name">
              First Name
              <input
                type="text"
                id="first__name"
                name="first__name"
                className="form__group__input"
              />
            </label>
            <label for="last__name">
              Last Name
              <input
                type="text"
                id="last__name"
                name="last__name"
                className="form__group__input"
              />
            </label>
          </div>
          <label for="username">
            Email
            <input
              type="text"
              id="username"
              name="username"
              className="form__group__input"
            />
          </label>
          <label for="pass">
            Password
            <input
              type="password"
              id="pass"
              name="pass"
              className="form__group__input"
            />
          </label>

          <label for="confirm__password">
            Confirm Password
            <input
              type="password"
              id="confirm__password"
              name="confirm__password"
              className="form__group__input"
            />
          </label>
          <label>
            <input type="checkbox" className="show__password text__md" /> Show
            Password
          </label>
          <div className="form__bottom">
            <label className="text__md">
              <input type="checkbox" />I accept all terms & conditions
            </label>
          </div>
          <button className="btn btn__primary login">
            Create a new Account
          </button>
          <div className="register text__center">
            <a href="./login.html">Already have an account </a>
          </div>
        </div>
      </div>
    </div>
  )
}
