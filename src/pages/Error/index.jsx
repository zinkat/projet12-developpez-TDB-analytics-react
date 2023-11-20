import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const MainPg = styled.div`
  position: absolute;
  width: 80%;
  height: 500px;
  left: 10%;
  bottom: 10%;
`
const TitrePg = styled.div`
  color: #ff0101;
  font-size: 200px;
  text-align: center;
`
const DescriptionError = styled.span`
  display: block;
  font-size: 25px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;
`
const LinkHome = styled(NavLink)`
  color: #ff0101;
  font-size: 18px;
  display: block;
  text-decoration: underline;
  text-align: center;
`

function Error() {
  return (
    <MainPg>
      <TitrePg>404</TitrePg>
      <DescriptionError className="descriptionError">
        Oups! La page ou l'utilisateur que vous demandez n'existe pas. <br />
      </DescriptionError>
      <LinkHome to="/">Retourner sur la page d’accueil</LinkHome>
    </MainPg>
  )
}

export default Error
