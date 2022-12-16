/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled"
/* Components */
import NavLinkPage from "./NavLinkPage"
import Btn from "./Btn.jsx"
/* Assets */
import House from '../assets/House.svg'
import Bag from '../assets/Bag.svg'
import Phone from '../assets/Phone.svg'
import Notebook from '../assets/Notebook.svg'
import User from '../assets/User.svg'
import LogoImage from '../assets/LogoImage.png'

const NavbarCont = styled.div`
 //Dimensions:
  width: 100%;
  height: 98px;
 //Layout:
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
 //Properties:
  color: rgba(255.0, 255.0, 255.0, 1.0);
  box-shadow: 0.0px 4.0px 4.0px rgba(0.0, 0.0, 0.0, 0.250);
`
const LogoCont = styled.div`
 //Dimensions:
  width: 371.5px;
  height: 98px;
  padding: 10px 10px 10px 10px;
 //Layout:
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
 //Properties:
`

const Navigation = styled.div`
 //Dimensions:
  width: 773px;
  height: 50px;
  padding: 10px 7px 10px 7px;
 //Layout:
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 35px;
 //Properties:
`

const Account = styled.div`
 //Dimensions:
  width: 371.5px;
  height: 70px;
  padding: 10px 10px 10px 10px;
 //Layout:
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
 //Properties:
`

const Navbar = () => {
  return (
    <NavbarCont>
      <LogoCont>
        <img src={LogoImage} alt="" />
      </LogoCont>
      <Navigation>
        <NavLinkPage text='Home' icon={House} link='/'/>
        <NavLinkPage text='Contact' icon={Phone} link='/contact'/>
        <NavLinkPage text='Products' icon={Bag} link='/products'/>
        <NavLinkPage text='Orders' icon={Notebook} link='/orders'/>
      </Navigation>
      <Account>
        <a href="/login" css={{textDecoration: 'none'}}>
          <Btn text="Login" />
        </a>
      </Account>
    </NavbarCont>
  )
}

export default Navbar;