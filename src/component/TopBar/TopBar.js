import React from 'react'
import './TopBar.css'
import NotificationsIcon from '@mui/icons-material/Notifications'; 
import LanguageIcon from '@mui/icons-material/Language'; 
import SettingsIcon from '@mui/icons-material/Settings';
export default function TopBar() {
  return (
    <div className='TopBar'>
        <div className="topbaewrapper">
            <div className="topLeft">
            <span className='logo'> TEST PROUJECT</span>
            </div>
            <div className="topRight">
             <div className="topBarIconContaier">
            <NotificationsIcon/>
            <span className="topiconBadge">2</span>
             </div>
             <div className="topBarIconContaier">
            <LanguageIcon/>
            <span className="topiconBadge">2</span>
             </div>
             <div className="topBarIconContaier">
            <SettingsIcon/>
             </div>
             <img src="images/Untitled - Copy.png" className='topAvatar'/>
            </div>
        </div>
    </div>
  )
}
