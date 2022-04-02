import { useState, useEffect, useReducer } from 'react'
import { Navbar } from '../../components/navbar/Navbar.jsx'
import { Link } from 'react-router-dom'
import axios from 'axios'
import auth from './Authentication.module.css'
import { authReducer } from '../../reducer/authReducer.jsx'
export function Register() {
  const [userState, userDispatch] = useReducer(authReducer, {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState(null)
  const { email, firstName, lastName, password, confirmPassword } = userState
  useEffect(() => {
    ;(async () => {
      try {
        const response = await axios.post('/api/auth/signup', {
          email,
          firstName,
          lastName,
          password,
        })
        console.log(response.data)
        localStorage.setItem('token', response.data.encodedToken)
      } catch (err) {
        setError(true)
        console.log(err)
      }
    })()
  }, [])

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const validatePass = pass => {
    return pass.length > 8 && pass.includes([0 - 9])
  }
  return (
    <div className="home__container">
      <Navbar />

      <div className={`${auth['main__container']}`}>
        <div className={`form__group ${auth['form__group']}`}>
          <h4 className={auth['form__heading']}>Sign up</h4>
          <form className={auth['form__name']}>
            <label for="first__name">
              First Name
              <input
                type="text"
                id="first__name"
                name="first__name"
                className={`form__group__input ${auth['input']}`}
                onChange={e =>
                  userDispatch({ type: 'FIRST_NAME', payload: e.target.value })
                }
              />
            </label>
            <label for="last__name">
              Last Name
              <input
                type="text"
                id="last__name"
                name="last__name"
                className={`form__group__input ${auth['input']}`}
                onChange={e =>
                  userDispatch({ type: 'LAST_NAME', payload: e.target.value })
                }
              />
            </label>
          </form>
          <label for="username">
            Email
            <input
              type="text"
              id="username"
              name="username"
              className={`form__group__input ${auth['input']}`}
              onChange={e =>
                userDispatch({ type: 'EMAIL', payload: e.target.value })
              }
            />
          </label>
          {email === '' ? (
            true
          ) : validateEmail(email) ? (
            true
          ) : (
            <div class="msg login__error">
              <i class="fas fa-exclamation-triangle"></i> Enter correct Email
            </div>
          )}
          <label for="pass">
            Password
            <input
              type="password"
              id="pass"
              name="pass"
              className={`form__group__input ${auth['input']}`}
              onChange={e =>
                userDispatch({ type: 'PASSWORD', payload: e.target.value })
              }
            />
          </label>
          {password === '' ? (
            true
          ) : validatePass(password) ? (
            true
          ) : (
            <div class="msg login__error">
              <i class="fas fa-exclamation-triangle"></i> Password must have
              Minimum eight characters and a number
            </div>
          )}
          <label for="confirm__password">
            Confirm Password
            <input
              type="password"
              id="confirm__password"
              name="confirm__password"
              className={`form__group__input ${auth['input']}`}
              onChange={e =>
                userDispatch({
                  type: 'CONFIRM_PASSWORD',
                  payload: e.target.value,
                })
              }
            />
          </label>
          {password === confirmPassword ? (
            true
          ) : (
            <div class="msg login__error">
              <i class="fas fa-exclamation-triangle"></i> Password and Confirm
              Password is not same
            </div>
          )}
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
