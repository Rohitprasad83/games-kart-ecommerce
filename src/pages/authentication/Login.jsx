import './Authentication.css'

export function Login() {
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
            <span className="badge__icons">
              <a href="./wishlist.html">
                <i className="fa-regular fa-heart icon"></i>
                <span className="badge__number badge__primary"> 5 </span>
              </a>
            </span>
          </li>
          <li className="navbar__list__items">
            <span className="badge__icons">
              <a href="./cart.html">
                <i className="fa-solid fa-cart-shopping icon"></i>
                <span className="badge__number badge__primary">5</span>
              </a>
            </span>
          </li>
        </ul>
      </nav>

      <div className="main__container">
        <div className="form__group">
          <h4>Login</h4>
          <label for="username">Email</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your email"
            className="form__group__input"
          />
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="form__group__input"
          />
          <div className="form__bottom">
            <label className="text__md">
              <input type="checkbox" />
              Remember me
            </label>
            <span className="forgot__password text__bold text__md">
              Forgot your password?
            </span>
          </div>
          <button className="btn btn__primary login">
            <i className="fas fa-sign-in-alt login__icon"></i>
            Login
          </button>
          <div className="register text__center">
            <a href="./register.html">Create a new account ></a>
          </div>
        </div>
      </div>
    </div>
  )
}
