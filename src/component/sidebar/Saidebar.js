import React from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle'
import TimelineIcon from '@mui/icons-material/Timeline'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import StorefrontIcon from '@mui/icons-material/Storefront'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import BarChartIcon from '@mui/icons-material/BarChart'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'

import {Link} from 'react-router-dom'

import './Saidebar.css'
export default function Saidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper"> 
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarlist">

          <Link to= '/' className='link'>
            <li className="sidebarlistItems active">
            <LineStyleIcon className='sidebarIcon'/> Home
            </li>
            </Link>
            <li className="sidebarlistItems">
            <TimelineIcon className='sidebarIcon'/> Analytics
            </li>
            <li className="sidebarlistItems">
            <TrendingUpIcon className='sidebarIcon'/>Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quik Menue</h3>
          <ul className="sidebarlist">
              <Link to= '/user' className='link'>
            <li className="sidebarlistItems active">
            <PermIdentityIcon className='sidebarIcon'/> Users
            </li>
            </Link>
            <Link to ='/NewUser' className='link'>
            <li className="sidebarlistItems">
            <PermIdentityIcon className='sidebarIcon'/> New User
            </li>
            </Link>
            <Link to ='/Products' className='link'>
            <li className="sidebarlistItems">
            <StorefrontIcon className='sidebarIcon'/>Products
            </li>
            </Link>
            <li className="sidebarlistItems">
            <AttachMoneyIcon className='sidebarIcon'/>Transactions
            </li>
            <li className="sidebarlistItems">
            <BarChartIcon className='sidebarIcon'/>Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarlist">
            <li className="sidebarlistItems active">
            <MailOutlineIcon className='sidebarIcon'/> Maile
            </li>
            <li className="sidebarlistItems">
            <DynamicFeedIcon className='sidebarIcon'/> Feedback
            </li>
            <li className="sidebarlistItems">
            <TrendingUpIcon className='sidebarIcon'/>Messages
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
