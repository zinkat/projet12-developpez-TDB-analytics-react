import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import '../ActivityChart/activity.css'


function  ActivityCharts({dataActivity}){

/* formate les dates est retourne le jour pour axe X  */
const xAxisTickFormat = (value) => {
    const valueDay = value.split('-')
    
    return (Number(valueDay[2]))
}
/* personalisation de l'infobulle // affichage des valeurs au survole des barres*/
function CustomTooltipActivity ({payload, active}) {
    if (active) {
        return (
            <div className='activityChartTooltip'>
                <div>{`${payload[0].value}`}kg</div>
                <div>{`${payload[1].value}`}Kcal</div>
            </div>
        )
    }
    return null
}

return(
    <div className='activityWrap'>
        <h2 className='activityChartTitle'>Activité quotidienne</h2>
        <ResponsiveContainer width="100%" height="100%" >
            <BarChart className='recharts-tooltip-cursor'
                data={dataActivity}
                margin={{
                    top:10,
                    right:5,
                    left: 10,
                    bottom:10
                }}
            >
                <CartesianGrid vertical='false' strokeDasharray='3' height={1}  horizontalPoints={[90, 185]}  />
                <XAxis className='activityXAxis' 
                    dataKey='day' 
                    tickFormatter={xAxisTickFormat} 
                    interval='preserveStartEnd' 
                    tickSize='0' 
                    scale='point'
                    tickMargin='15' 
                    stroke='#9B9EAC'/>
                <YAxis 
                    dataKey='calories' 
                    yAxisId='left' 
                    orientation='left' 
                    hide='true'
                   />
                <YAxis className='activityYAxis' 
                    dataKey='kilogram' 
                    yAxisId='right' 
                    orientation='right' 
                    type='number' 
                    domain={['dataMin -1', 'dataMax']} 
                    tickCount='3' 
                    tickSize='0' 
                    axisLine={false} 
                    tickMargin='30' 
                    width={45} 
                    stroke='#9B9EAC' />
                <Tooltip content={<CustomTooltipActivity />} />
                <Legend 
                    verticalAlign='top' 
                    align='right' 
                    height={80} 
                    iconType='circle' 
                    iconSize={8} 
                    formatter={(value) => (
                        <span className='activityLegendColor'>{value}</span>)}/>
                <Bar name='Poids (kg)' 
                    dataKey='kilogram'
                    yAxisId='right' 
                    fill='#282D30' 
                    radius={[25, 25, 0, 0]} 
                    barSize={7}/>
                <Bar name='Calories brûlées (kCal)' 
                    dataKey='calories' 
                    yAxisId='left' 
                    fill='#E60000' 
                    radius={[25, 25, 0, 0]} 
                    barSize={7}/>
            </BarChart>
        </ResponsiveContainer>
    </div>
)
}

ActivityCharts.propTypes={
    dataActivity: PropTypes.array.isRequired
}


export default ActivityCharts