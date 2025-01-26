import React from 'react'
import routes from './routses'
import {useRoutes} from 'react-router-dom'
import TopBar from './component/TopBar/TopBar'  
import Saidebar from './component/sidebar/Saidebar' 

import './App.css' 
export default function App() {
  let router = useRoutes(routes)
  return (
    <>
    <TopBar/>
    <div className="container">
    {router}
    <Saidebar/>
    </div>
   </>
  )
}

