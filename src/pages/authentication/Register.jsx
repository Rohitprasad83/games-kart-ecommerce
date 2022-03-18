import './Authentication.css'
import { Navbar } from '../../components/navbar/Navbar.jsx'
export function Register() {
  return (
    <div className="home__container">
      <Navbar />

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
