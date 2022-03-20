import auth from './Authentication.module.css'
import { Navbar } from '../../components/navbar/Navbar.jsx'
import { Link } from 'react-router-dom'

export function Register() {
  return (
    <div className="home__container">
      <Navbar />

      <div className={`${auth['main__container']}`}>
        <div className={`form__group ${auth['form__group']}`}>
          <h4 className={auth['form__heading']}>Sign up</h4>
          <div className={auth['form__name']}>
            <label for="first__name">
              First Name
              <input
                type="text"
                id="first__name"
                name="first__name"
                className={`form__group__input ${auth['input']}`}
              />
            </label>
            <label for="last__name">
              Last Name
              <input
                type="text"
                id="last__name"
                name="last__name"
                className={`form__group__input ${auth['input']}`}
              />
            </label>
          </div>
          <label for="username">
            Email
            <input
              type="text"
              id="username"
              name="username"
              className={`form__group__input ${auth['input']}`}
            />
          </label>
          <label for="pass">
            Password
            <input
              type="password"
              id="pass"
              name="pass"
              className={`form__group__input ${auth['input']}`}
            />
          </label>

          <label for="confirm__password">
            Confirm Password
            <input
              type="password"
              id="confirm__password"
              name="confirm__password"
              className={`form__group__input ${auth['input']}`}
            />
          </label>
          <label>
            <input type="checkbox" className="show__password text__md" /> Show
            Password
          </label>
          <div className={auth['form__bottom']}>
            <label className="text__md">
              <input type="checkbox" />I accept all terms & conditions
            </label>
          </div>
          <button className={`btn btn__primary login ${auth['btn']}`}>
            Create a new Account
          </button>
          <div className={`${auth['register']} text__center`}>
            <Link to="/login">Already have an account {'>'}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
