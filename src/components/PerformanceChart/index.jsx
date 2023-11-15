import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types'


function PerformanceChart({dataPerformance}){

    function reverseData(array){
        const dataReversedArray = []
        for(let i=array.length - 1; i >= 0; i --){
            dataReversedArray.push(array[i])
        }
        return dataReversedArray
    }
    
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

    function xAxisFormatter(performanceData) {
        const performanceMapping = {
          1: 'Cardio',
          2: 'Energie',
          3: 'Endurance',
          4: 'Force',
          5: 'Vitesse',
          6: 'Intensité',
        };
        return performanceMapping[performanceData] || null;
      }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={dataReversed} outerRadius={'60%'} >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis dataKey='kind' 
                    tickLine={false} 
                    tick={{ fontSize: '70%', fontWeight: 500, margin: 0, }} 
                    stroke="#FFFFFF" 
                    tickFormatter={xAxisFormatter} />
                <Radar dataKey='value' fill="#FF0101B2"/>
            </RadarChart> 
        </ResponsiveContainer>
    )
}

PerformanceChart.propTypes={
    dataPerformance: PropTypes.array.isRequired
}

export default PerformanceChart