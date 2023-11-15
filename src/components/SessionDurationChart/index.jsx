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

function SessionDurationChart({ dataSessionDuration }) {
  //formattage de l'étiquettes axe X pour afficgher jours de la semaine
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

  //Personnalisation tooltip
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

  // gestion de l'apparence du font du graph

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
