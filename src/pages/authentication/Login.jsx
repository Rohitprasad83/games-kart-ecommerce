import { Navbar } from 'components/navbar/Navbar.jsx'
import { Footer } from 'components/footer/Footer.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import auth from './Authentication.module.css'
import { useAuth } from 'context/index.jsx'
import { successToast, errorToast } from 'components/toast/Toast'
import { useChangeTitle } from 'utils/changeDocumentTitle'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigate()
  const [error, setError] = useState(null)
  const { users, setUsers, setEncodedToken } = useAuth()
  useChangeTitle('Login')
  const loginHandler = async e => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/auth/login', {
        email,
        password,
      })
      localStorage.setItem('token', response.data.encodedToken)
      setUsers(response.data.foundUser)
      setEncodedToken(localStorage.getItem('token'))
      response.status === 200 && navigation('/')
      successToast('Welcome Back to GamesKart')
    } catch (err) {
      setError("Could'nt Login Up, Please try Again!")
      errorToast(err)
    }
  }
  const fillDummyDetails = () => {
    setEmail('adarshbalika@gmail.com')
    setPassword('adarshbalika')
  }

  const allFieldsAreFilled = email !== '' && password !== ''
  return (
    <div className="home__container">
      <Navbar />

      <div className={`${auth['main__container']}`}>
        <form
          onSubmit={loginHandler}
          className={`form__group ${auth['form__group']}`}>
          <h4 className={auth['form__heading']}>Login</h4>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            className={`form__group__input ${auth['input']}`}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            className={`form__group__input ${auth['input']}`}
            onChange={e => setPassword(e.target.value)}
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
          <button
            type="submit"
            disabled={!allFieldsAreFilled}
            className={`btn btn__primary login ${auth['btn']}`}>
            <i className="fas fa-sign-in-alt login__icon"></i>
            Login
          </button>
          <button
            className={`btn btn__warning login ${auth['btn']}`}
            onClick={fillDummyDetails}>
            <i className="fas fa-sign-in-alt login__icon"></i>
            Login with Dummy details
          </button>
          <div className={`${auth['register']} text__center`}>
            <Link to="/register">Create a new account {'>'} </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}
