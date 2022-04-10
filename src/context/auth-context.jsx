import { createContext, useContext, useState } from 'react'
const authContext = createContext()
const useAuth = () => useContext(authContext)

const AuthContextProvider = ({ children }) => {
  const [users, setUsers] = useState(null)
  const [encodedToken, setEncodedToken] = useState(null)
  return (
    <authContext.Provider
      value={{ users, setUsers, encodedToken, setEncodedToken }}>
      {children}
    </authContext.Provider>
  )
}

export { AuthContextProvider, useAuth }
