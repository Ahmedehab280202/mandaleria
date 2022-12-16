import './home.css'
import Navbar from '../../components/Navbar';
import LogoWelcomeImage from '../../assets/LogoWelcomeImage.png'
import Btn from '../../components/Btn'

const Home = () => {
  return (
    <>
      <div class="Login">
      <Navbar />
      <div class="body2">
        <div class="details-Home">
          <div class="Welcome-to-Mandelleria-_frame">
            <span class="Welcome-to-Mandelleria">
              Welcome to Mandelleria
            </span>
          </div>
          <span class="Want-to-check-our-products-">
            Want to check our products ?
          </span>
          <Btn text='Shop Now!' link='/products' />
        </div>
        <div class="Frame-89">
          <img src={LogoWelcomeImage} alt="LogoWelcomeImage" />
        </div>
      </div>

      <footer>
        <span class="Check-our-instagram-page ">
          Check our instagram page
        </span>
      </footer>
      </div>
    </>
  )
}

export default Home;