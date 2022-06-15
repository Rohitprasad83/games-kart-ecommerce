import { Navbar, Footer, Address } from 'components/index'
import { useAuth } from 'context'
import { useState } from 'react'
import { useChangeTitle } from 'utils/changeDocumentTitle'
import profileStyle from './Profile.module.css'
function Profile() {
  const [showAddress, setShowAddress] = useState(false)
  useChangeTitle('Profile')
  const { user } = useAuth()

  return (
    <div className="home__container">
      <Navbar />
      <div className="main__container">
        <h3 className="text__center">Account</h3>
        <div className={`text__lg ${profileStyle['profile-container']}`}>
          <div className={`${profileStyle['profile-tabs']}`}>
            <span
              className="pointer"
              onClick={() => setShowAddress(false)}
              style={
                !showAddress ? { borderBottom: '3px solid var(--primary' } : {}
              }>
              Profile
            </span>
            <span
              className="pointer"
              onClick={() => setShowAddress(true)}
              style={
                showAddress ? { borderBottom: '3px solid var(--primary' } : {}
              }>
              Address
            </span>
          </div>

          {!showAddress ? (
            <div className={`${profileStyle['profile-details']}`}>
              <h5>Profile Details</h5>
              <span>
                <span className="font__bold"> Full Name</span>:
                {' ' + user.firstName + ' ' + user.lastName}
              </span>
              <span>
                <span className="font__bold"> Email</span>: {user.email}
              </span>
              <button className="btn btn__error">Logout</button>
            </div>
          ) : (
            <Address />
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export { Profile }
