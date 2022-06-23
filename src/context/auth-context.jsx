import { createContext, useContext, useState, useEffect } from 'react'
const authContext = createContext()
const useAuth = () => useContext(authContext)

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [encodedToken, setEncodedToken] = useState(null)
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
    setEncodedToken(localStorage.getItem('token'))
  }, [])
  return (
    <authContext.Provider
      value={{ user, setUser, encodedToken, setEncodedToken }}>
      {children}
    </authContext.Provider>
  )
}

export { AuthContextProvider, useAuth }
