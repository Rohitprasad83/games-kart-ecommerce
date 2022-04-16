import { Navbar } from 'components/navbar/Navbar.jsx'
import { Footer } from 'components/footer/Footer'
import { useChangeTitle } from 'utils/changeDocumentTitle'
import error404 from 'assets/images/error404.png'
export function Error404() {
  useChangeTitle('404')
  return (
    <div className="home__container">
      <Navbar />

      <div className={`main__container `}>
        <h2 className="text__center">
          We Could not Found What you are Looking For!!!
        </h2>
        <img
          src={error404}
          alt="Not Found"
          className="responsive__img error404"
        />
      </div>
      <Footer />
    </div>
  )
}
