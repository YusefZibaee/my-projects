import React from 'react'
import {
    ResponsiveContainer,
    LineChart,
    Line , 
    XAxis , 
    CartesianGrid,
    Tooltip
} from 'recharts'
import './Chart.css'
// export default function Chart({titel , data , dataKey , grid}) {
//   return (
//     <div className='ChartHome' >
//         <h3 className="chartTitle">{titel}</h3>
//         <ResponsiveContainer width = '95%' aspect={4}>
//             <LineChart data = {data}>
//                 <XAxis dataKey='name' stroke = '#5550bd'/>
//                 <Line type='monotone' dataKey={dataKey} stroke = '#5550bd' />
//                 <Tooltip/>
//                 {grid && <CartesianGrid stroke = '#e0dfdf' strokeDasharray= '10'/>}
//             </LineChart>
//         </ResponsiveContainer>
//     </div>
//   )
// }
export default function Chart({ titel, data, dataKey, grid, className }) {
  return (
    <div className={`ChartHome ${className}`}>
      <h3 className="chartTitle">{titel}</h3>
      <ResponsiveContainer width="95%" aspect={4}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}