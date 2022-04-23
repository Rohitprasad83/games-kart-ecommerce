import { Navbar, Footer } from 'components/index'
import { useChangeTitle } from 'utils/changeDocumentTitle'

function Profile() {
  useChangeTitle('Profile')

  return (
    <div className="home__container">
      <Navbar />
      <div className="main__container">
        <h3 className="text__center">This will be Profile Page</h3>
      </div>
      <Footer />
    </div>
  )
}

export { Profile }
