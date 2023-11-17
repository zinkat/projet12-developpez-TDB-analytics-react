import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

/**
 * Composant pour afficher un graphique radar de performances.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.dataPerformance - Les données de performances à afficher sur le graphique radar.
 * @returns {JSX.Element} Composant pour afficher le graphique radar de performances.
 */
function PerformanceChart({ dataPerformance }) {
  /**
   * Fonction pour inverser l'ordre des données dans un tableau.
   *
   * @param {Array} array - Le tableau à inverser.
   * @returns {Array} Le tableau inversé.
   */

  function reverseData(array) {
    const dataReversedArray = []
    for (let i = array.length - 1; i >= 0; i--) {
      dataReversedArray.push(array[i])
    }
    return dataReversedArray
  }

  // Inversion des données pour afficher dans l'ordre correct sur le graphique radar
  const dataReversed = reverseData(dataPerformance)

  // const xAxisFormatter = (kind) => {

  //     switch (kind){
  //         case 1: return 'Cardio';
  //         case 2: return 'Energie';
  //         case 3: return 'Endurance';
  //         case 4: return 'Force';
  //         case 5: return 'Vitesse';
  //         case 6: return 'Intensité';
  //         default: return null;
  //     }
  // }

  /**
   * Fonction pour formater les libellés de l'axe X du graphique radar.
   *
   * @param {number} performanceData - La donnée de performance.
   * @returns {string | null} Libellé formaté de la performance.
   */

  function xAxisFormatter(performanceData) {
    const performanceMapping = {
      1: 'Cardio',
      2: 'Energie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité',
    }
    return performanceMapping[performanceData] || null
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={dataReversed} outerRadius={'60%'}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tickLine={false}
          tick={{ fontSize: '70%', fontWeight: 500, margin: 0 }}
          stroke="#FFFFFF"
          tickFormatter={xAxisFormatter}
        />
        <Radar dataKey="value" fill="#FF0101B2" />
      </RadarChart>
    </ResponsiveContainer>
  )
}

PerformanceChart.propTypes = {
  dataPerformance: PropTypes.array.isRequired,
}

export default PerformanceChart
