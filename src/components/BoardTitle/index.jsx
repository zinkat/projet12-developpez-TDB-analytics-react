import styled from 'styled-components'
import PropTypes from 'prop-types'

const HeaderBoard = styled.div`
  font-size: 2.8em;
  font-weight: 500;
`
const TitreStyle = styled.div`
  display: flex;
  gap: 10px;
`
const NameStyle = styled.div`
  color: #ff0101;
`
const CongratsDiv = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  margin-top: 8px;
`
/**
 * Composant pour afficher le titre de bienvenue et les félicitations.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.id - L'identifiant de l'utilisateur.
 * @param {string} props.firstname - Le prénom de l'utilisateur.
 * @returns {JSX.Element} Composant pour afficher le titre et les félicitations.
 */

function Title({ id, firstname }) {
  return (
    <HeaderBoard>
      <TitreStyle>
        Bonjour
        <NameStyle id={id} key={id}>
          {firstname}
        </NameStyle>
      </TitreStyle>
      <CongratsDiv>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </CongratsDiv>
    </HeaderBoard>
  )
}

Title.propTypes = {
  id: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
}

export default Title
