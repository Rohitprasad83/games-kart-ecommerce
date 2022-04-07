import { Navbar } from '../../components/navbar/Navbar.jsx'
import { useChangeTitle } from '../../utils/changeDocumentTitle'

function Profile() {
  useChangeTitle('Profile')

  return (
    <div className="home__container">
      <Navbar />
    </div>
  )
}

export { Profile }
