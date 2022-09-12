import React from 'react';
import CharBar from './ChartBar'
import './Chart.css'
const Chart = (props) => {
 const datapointValue = props.datapoint.map((datapoint) => datapoint.value);
 const totalMaximum = Math.max(...datapointValue);
 console.log(totalMaximum);
    return (
        <div className='chart'>
            {props.datapoint.map((datapoint,index) => {
                return (
                    <CharBar key={`${index}`} value={datapoint.value} maxValue={totalMaximum} label={datapoint.label} />
                )
            })}
        </div>
    )
}
export default Chart;