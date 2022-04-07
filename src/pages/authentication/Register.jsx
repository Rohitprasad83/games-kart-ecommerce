import { useState, useReducer } from 'react'
import { Navbar } from '../../components/navbar/Navbar.jsx'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import auth from './Authentication.module.css'
import { authReducer } from '../../reducer/authReducer.jsx'
import { useAuth } from '../../context'
import {
  validateEmail,
  validatePass,
} from '../../utils/authenticationUtils/index.js'
import { successToast, errorToast } from '../../components/toast/Toast'

export function Register() {
  const [userState, userDispatch] = useReducer(authReducer, {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState(null)
  const [showPassword, setShowPassword] = useState('password')
  const navigation = useNavigate()
  const { email, firstName, lastName, password, confirmPassword } = userState
  const { setUsers } = useAuth()
  const SignUpHandler = async e => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/auth/signup', {
        email,
        firstName,
        lastName,
        password,
      })
      localStorage.setItem('token', response.data.encodedToken)
      setUsers(response.data.createdUser)
      response.status === 201 && navigation('/')
      successToast('Welcome to GamesKart')
    } catch (err) {
      setError("Could'nt Sign Up, Please try Again!")
      errorToast(error)
    }
  }

  const showPasswordHandler = () => {
    return setShowPassword(showPassword === 'password' ? 'text' : 'password')
  }

  const allFieldsAreFilled =
    firstName !== '' &&
    lastName !== '' &&
    email !== '' &&
    password !== '' &&
    confirmPassword !== '' &&
    password === confirmPassword &&
    validatePass(password) &&
    validateEmail(email)

  return (
    <div className="home__container">
      <Navbar />

      <div className={`${auth['main__container']}`}>
        <form
          onSubmit={SignUpHandler}
          className={`form__group ${auth['form__group']}`}>
          <h4 className={auth['form__heading']}>Sign up</h4>
          <div className={auth['form__name']}>
            <label htmlFor="first__name">
              First Name
              <input
                type="text"
                id="first__name"
                name="first__name"
                value={firstName}
                className={`form__group__input ${auth['input']}`}
                onChange={e =>
                  userDispatch({ type: 'FIRST_NAME', payload: e.target.value })
                }
                required
              />
            </label>
            <label htmlFor="last__name">
              Last Name
              <input
                type="text"
                id="last__name"
                name="last__name"
                value={lastName}
                className={`form__group__input ${auth['input']}`}
                onChange={e =>
                  userDispatch({ type: 'LAST_NAME', payload: e.target.value })
                }
                required
              />
            </label>
          </div>
          <label htmlFor="email">
            Email
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              className={`form__group__input ${auth['input']}`}
              onChange={e =>
                userDispatch({ type: 'EMAIL', payload: e.target.value })
              }
              required
            />
          </label>
          {email === '' ? (
            true
          ) : validateEmail(email) ? (
            true
          ) : (
            <div className="msg login__error">
              <i className="fas fa-exclamation-triangle"></i> Enter correct
              Email
            </div>
          )}
          <label htmlFor="pass">
            Password
            <input
              type={showPassword}
              id="pass"
              name="pass"
              value={password}
              className={`form__group__input ${auth['input']}`}
              onChange={e =>
                userDispatch({ type: 'PASSWORD', payload: e.target.value })
              }
              required
            />
          </label>
          {password === '' ? (
            true
          ) : validatePass(password) ? (
            true
          ) : (
            <div className="msg login__error">
              <i className="fas fa-exclamation-triangle"></i> Password must have
              Minimum eight characters and a number
            </div>
          )}
          <label htmlFor="confirm__password">
            Confirm Password
            <input
              type={showPassword}
              id="confirm__password"
              name="confirm__password"
              value={confirmPassword}
              className={`form__group__input ${auth['input']}`}
              onChange={e =>
                userDispatch({
                  type: 'CONFIRM_PASSWORD',
                  payload: e.target.value,
                })
              }
              required
            />
          </label>
          {password === confirmPassword ? (
            true
          ) : (
            <div className="msg login__error">
              <i className="fas fa-exclamation-triangle"></i> Password and
              Confirm Password is not same
            </div>
          )}
          <label>
            <input
              type="checkbox"
              className="show__password text__md"
              onChange={showPasswordHandler}
            />
            Show Password
          </label>
          <div className={auth['form__bottom']}>
            <label className="text__md">
              <input type="checkbox" />I accept all terms & conditions
            </label>
          </div>
          <button
            type="submit"
            disabled={!allFieldsAreFilled}
            className={`btn btn__primary login ${auth['btn']}`}>
            Create a new Account
          </button>
          <button
            type="submit"
            onClick={() => userDispatch({ type: 'FILL_DUMMY_DETAILS' })}
            className={`btn btn__warning login ${auth['btn']}`}>
            SignUp with Dummy Details
          </button>
          <div className={`${auth['register']} text__center`}>
            <Link to="/login">Already have an account {'>'}</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
