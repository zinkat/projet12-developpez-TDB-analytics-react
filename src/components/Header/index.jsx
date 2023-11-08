import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const HeadNav = styled.header`
  height: 91px;
  background-color: #020203;
  box-shadow: 0px 4px 4px 0px #00000040;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`
const LogoImg = styled.img`
  height: 60px;
  width: 178px;
  margin-left: 10px;
`
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;

  padding: 0 40px;
  width: 80%;
`

function Header() {
  return (
    <HeadNav>
      <LogoImg className="logo" src={Logo} alt="logo" />
      <NavBar>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="#">Profil</NavLink>
        <NavLink to="#">Réglages</NavLink>
        <NavLink to="#">Communauté</NavLink>
      </NavBar>
    </HeadNav>
  )
}
export default Header
