import {
  CartesianGrid,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SessionDurationChartTitle = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  opacity: 0.5;
  width: 150px;
  margin-left: 10px;
  position: absolute;
  top: 18px;
  left: 20px;
`
const SessionDurationChartTooltip = styled.div`
  display: flex;
  width: 40px;
  height: 25px;
  background-color: #ffffff;
  font-size: 8px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
`
/**
 * Composant pour afficher un graphique de la durée moyenne des sessions.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.dataSessionDuration - Les données de la durée moyenne des sessions à afficher sur le graphique.
 * @returns {JSX.Element} Composant pour afficher le graphique de la durée moyenne des sessions.
 */

function SessionDurationChart({ dataSessionDuration }) {
  /**
   * Fonction pour formater les étiquettes de l'axe X pour afficher les jours de la semaine.
   *
   * @param {number} day - Le jour de la semaine (1 pour Lundi, 2 pour Mardi, etc.).
   * @returns {string} L'abréviation du jour de la semaine.
   */

  const xAxisFormatter = (day) => {
    switch (day) {
      case 1:
        return 'L'
      case 2:
        return 'M'
      case 3:
        return 'M'
      case 4:
        return 'J'
      case 5:
        return 'V'
      case 6:
        return 'S'
      case 7:
        return 'D'
      default:
        return ''
    }
  }

  /**
   * Composant pour personnaliser le type de tooltip sur le graphique.
   *
   * @component
   * @param {Object} props - Les propriétés du composant.
   * @param {Object} props.payload - Les données de la session au survol.
   * @param {boolean} props.active - L'état d'activité du tooltip (is Tootip active).
   * @returns {JSX.Element} Composant pour personnaliser le type de tooltip.
   */
  function CustomToolTypeSessionDuration({ payload, active }) {
    if (active) {
      return (
        <SessionDurationChartTooltip>
          <div>{`${payload[0].value}`}min</div>
        </SessionDurationChartTooltip>
      )
    }
    return null
  }

  /**
   * Fonction pour personnaliser l'apparence du fond du graphique au survol de la souris.
   *
   * @param {Object} event - L'événement de la souris.
   */

  function customMouseMove(event) {
    let chartSession = document.querySelector('.sessionDurationWrap')

    if (event.isTooltipActive) {
      //largeur ghraph
      let chartWidth = chartSession.offsetWidth
      //la position horizontale de la souris en pourcentage par rapport à la largeur du graphique
      let mouseXposition = Math.round(
        (event.activeCoordinate.x / chartWidth) * 100
      )

      chartSession.style.background = `linear-gradient(90deg, rgba(255,0,0, 1) ${mouseXposition}%, rgba(0,0,0,0.1) 
          ${mouseXposition}%, rgba(0,0,0,0.1) 100%)`
    } else {
      chartSession.style.background = 'transparent'
    }
  }

  /**
   * Fonction pour réinitialiser l'apparence du fond du graphique lorsque la souris quitte la zone du graphique.
   *
   * @returns initial background
   */

  function customMouseOut() {
    let chartSession = document.querySelector('.sessionDurationWrap')
    chartSession.style.background = 'transparent'
  }

  return (
    <div
      className="sessionDurationWrap"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SessionDurationChartTitle>
        Durée moyenne des sessions
      </SessionDurationChartTitle>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={dataSessionDuration}
          margin={{
            top: 80,
            right: 10,
            left: 10,
            bottom: 40,
          }}
          onMouseMove={(e) => customMouseMove(e)}
          onMouseOut={() => customMouseOut()}
        >
          <CartesianGrid horizontal={false} vertical={false} />
          <XAxis
            dataKey="day"
            type="category"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fontWeight: 500 }}
            tickFormatter={xAxisFormatter}
            stroke="rgba(255, 255, 255, 0.5)"
            tickMargin={40}
          />

          <YAxis hide="true" domain={['dataMin', 'dataMax']} />
          <Tooltip content={<CustomToolTypeSessionDuration />} cursor={false} />
          <Line
            dataKey="sessionLength"
            type="natural"
            stroke="#FFFFFF"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

SessionDurationChart.propTypes = {
  dataSessionDuration: PropTypes.array.isRequired,
}

export default SessionDurationChart
