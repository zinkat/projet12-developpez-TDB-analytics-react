import PropTypes from 'prop-types'
import styled from 'styled-components'


const NutritionCardWrap = styled.div`
  background-color: #fbfbfb;
  padding: 5%;
  margin-top: 4px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 112px;
`
const NutritionCardIcon = styled.img`
  width: 50%;
  height: 70%;
`
const NutritionCardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5%;
  padding: 5px;
`
const NutritionCardDataValue = styled.div`
font-weight: 700;
font-size: 100%;
`
const NutritionCardDataType = styled.div`
font-weight: 500;
font-size: 85%;
`
/**
 * Composant pour afficher une carte d'information nutritionnelle.
 * 
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.icon - L'URL de l'icône de la carte.
 * @param {string} props.keyDataValue - La valeur des données nutritionnelles.
 * @param {number} props.id - L'identifiant de la carte.
 * @param {string} props.keyDataType - Le type de données nutritionnelles.
 * @returns {JSX.Element} Composant pour afficher la carte d'information nutritionnelle.
 */

function NutritionCard({ icon, keyDataValue, id, keyDataType }) {

  return (
    <NutritionCardWrap key={id}>
      <NutritionCardIcon src={icon} alt="icon nutrition card" />
      <NutritionCardText>
        <NutritionCardDataValue>{keyDataValue}</NutritionCardDataValue>
        <NutritionCardDataType>{keyDataType}</NutritionCardDataType>
      </NutritionCardText>
    </NutritionCardWrap>
  )
}

NutritionCard.propTypes = {
  icon: PropTypes.string.isRequired,
  keyDataValue: PropTypes.array.isRequired,
  keyDataType: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default NutritionCard
