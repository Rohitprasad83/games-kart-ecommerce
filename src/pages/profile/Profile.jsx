import { Navbar } from 'components/navbar/Navbar.jsx'
import { useChangeTitle } from 'utils/changeDocumentTitle'
import { Footer } from 'components/footer/Footer'

function Profile() {
  useChangeTitle('Profile')

  return (
    <div className="home__container">
      <Navbar />
      <div className="main__container"></div>
      <Footer />
    </div>
  )
}

export { Profile }
