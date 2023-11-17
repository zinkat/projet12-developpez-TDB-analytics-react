import {
  BarChart,
  XAxis,
  Bar,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'
import '../../../src/index.css'
import styled from 'styled-components'

const ActivityWrap = styled.div`
  height: 100%;
  width: 100%;
`
const ActivityChartTitle = styled.h2`
  position: absolute;
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  top: 30px;
  left: 30px;
`
const ActivityLegendColor = styled.span`
  color: #74798c;
  font-size: 14px;
  font-weight: 500;
`
const ActivityChartTooltip = styled.div`
  background-color: #e60000;
  color: white;
  font-weight: 500;
  font-size: 8px;
  height: 50px;
  width: 39px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 10px 5px;
`

/**
 * Composant graphique pour afficher les données d'activité sous forme de graphique à barres.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.dataActivity - Les données d'activité à afficher.
 * @returns {JSX.Element} Composant graphique pour afficher les données d'activité.
 */
function ActivityCharts({ dataActivity }) {
  /**
   * Formate les dates et retourne le jour pour l'axe X.
   *
   * @param {string} day - La date au format YYYY-MM-DD.
   * @returns {number} Le jour extrait de la date.
   */

  const xAxisTickFormat = (day) => {
    const valueDay = day.split('-')
    return Number(valueDay[2])
  }

  /**
   * Personnalisation de l'infobulle.
   * Affiche les valeurs au survol des barres.
   *
   * @param {Object} props - Les propriétés du composant.
   * @param {Array} props.payload - Les données de la barre survolée.
   * @param {boolean} props.active - Indique si l'infobulle est active.
   * @returns {JSX.Element|null} Composant d'infobulle personnalisé.
   */

  function CustomTooltipActivity({ payload, active }) {
    if (active) {
      return (
        <ActivityChartTooltip>
          <div>{`${payload[0].value}`}kg</div>
          <div>{`${payload[1].value}`}Kcal</div>
        </ActivityChartTooltip>
      )
    }
    return null
  }

  return (
    <ActivityWrap>
      <ActivityChartTitle>Activité quotidienne</ActivityChartTitle>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={dataActivity}
          margin={{
            top: 10,
            right: 5,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid
            vertical="false"
            strokeDasharray="3"
            height={1}
            horizontalPoints={[90, 185]}
          />
          <XAxis
            style={{ fontWeight: '500', fontSize: '14px' }}
            dataKey="day"
            tickFormatter={xAxisTickFormat}
            interval="preserveStartEnd"
            tickSize="0"
            scale="auto"
            tickMargin="15"
            stroke="#9B9EAC"
          />
          <YAxis
            dataKey="calories"
            yAxisId="left"
            orientation="left"
            hide="true"
          />
          <YAxis
            style={{ fontWeight: '500', fontSize: '14px' }}
            dataKey="kilogram"
            yAxisId="right"
            orientation="right"
            type="number"
            domain={['dataMin -1', 'dataMax']}
            tickCount="3"
            tickSize="0"
            axisLine={false}
            tickMargin="30"
            width={45}
            stroke="#9B9EAC"
          />
          <Tooltip content={<CustomTooltipActivity />} />
          <Legend
            verticalAlign="top"
            align="right"
            height={80}
            iconType="circle"
            iconSize={8}
            formatter={(value) => (
              <ActivityLegendColor>{value}</ActivityLegendColor>
            )}
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            yAxisId="right"
            fill="#282D30"
            radius={[25, 25, 0, 0]}
            barSize={7}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            yAxisId="left"
            fill="#E60000"
            radius={[25, 25, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </ActivityWrap>
  )
}

ActivityCharts.propTypes = {
  dataActivity: PropTypes.array.isRequired,
}

export default ActivityCharts
