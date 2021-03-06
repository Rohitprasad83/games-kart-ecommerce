import auth from './Authentication.module.css'
import { Navbar, Footer } from 'components/index'
import { Link } from 'react-router-dom'

export function Logout() {
  return (
    <div className="home__container">
      <Navbar />
      <div className={`${auth['main__container']}`}>
        <h5 className={`text__center ${auth['logged__out']}`}>
          You have been successfully Logged Out.
        </h5>
        <div className={`form__group ${auth['form__group']}`}>
          <h4 className={auth['form__heading']}>Login</h4>
          <label for="username">Email</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your email"
            className={`form__group__input ${auth['input']}`}
          />
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className={`form__group__input ${auth['input']}`}
          />
          <div className={auth['form__bottom']}>
            <label className="text__md">
              <input type="checkbox" />
              Remember me
            </label>
            <span className={`${auth['forgot__password']} text__bold text__md`}>
              Forgot your password?
            </span>
          </div>
          <button className={`btn btn__primary login ${auth['btn']}`}>
            <i className="fas fa-sign-in-alt login__icon"></i>
            Login
          </button>
          <div className={`${auth['register']} text__center`}>
            <Link to="/register">Create a new account {'>'} </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
