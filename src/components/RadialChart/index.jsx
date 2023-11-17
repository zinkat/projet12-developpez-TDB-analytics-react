import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ScoreChartWrap = styled.div`
  height: 100%;
  width: 100%;
`
const ScoreChartTitle = styled.h2`
  position: absolute;
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  top: 20px;
  left: 20px;
`
const ScoreDiv = styled.div`
  position: absolute;
  top: 40%;
  width: 100%;
  margin: 0;
`
const ScoreResult = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: #282d30;
  margin: 0;
`
const ScoreText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #74798c;
  text-align: center;
  margin: 0;
`
/**
 * Composant pour afficher un graphique radial du score.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.dataScore - Les données du score à afficher sur le graphique radial.
 * @returns {JSX.Element} Composant pour afficher le graphique radial du score.
 */
function ScoreChart({ dataScore }) {
  /**
   * Fonction pour formater les données du score.
   *
   * @param {Object} data - Les données du score.
   * @returns {Object} Les données du score formatées.
   */

  function formatScore(data) {
    if (data.todayScore) {
      data.score = data.todayScore
      return data
    }
  }

  formatScore(dataScore)

  /**
   * convertir le score en  nombre, et retourne le pourcentage du score
   * Fonction pour calculer le pourcentage du score.
   *
   * @param {Object} data - Les données du score.
   * @returns {number} Le pourcentage du score.
   */

  function calculatePercent(data) {
    const score = Number(data.score)

    return Math.round(score * 100)
  }

  // Calcul du pourcentage du score
  const scorePercent = calculatePercent(dataScore)

  return (
    <ScoreChartWrap>
      <ScoreChartTitle>Score</ScoreChartTitle>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="90%"
          data={[dataScore]}
          startAngle={180}
          endAngle={-180}
        >
          <RadialBar
            minAngle={15}
            dataKey="score"
            fill="#ff0101"
            cornerRadius={25}
            barSize={10}
          />
          <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
          <circle cx="50%" cy="50%" fill="white" r="32%"></circle>
        </RadialBarChart>
      </ResponsiveContainer>
      <ScoreDiv>
        <ScoreResult>{scorePercent}%</ScoreResult>
        <ScoreText>
          de votre
          <br />
          objectif
        </ScoreText>
      </ScoreDiv>
    </ScoreChartWrap>
  )
}

ScoreChart.propTypes = {
  dataScore: PropTypes.object.isRequired,
}

export default ScoreChart
