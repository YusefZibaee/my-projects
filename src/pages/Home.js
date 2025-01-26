import React from 'react'
import Feature from '../component/features/Feature'
import Chart from '../component/chart/Chart'
import WidgetSm from '../component/WidgetSm/WidgetSm'
import WidgetLg from '../component/WidgetLg/WidgetLg'
import {xAxiseData} from './../Data'
import './Home.css'
export default function Home() {
  return (
    <div className="home">
      <Feature/>
      <Chart grid titel= 'Month Sale' data={xAxiseData} dataKey="sale"  />
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
