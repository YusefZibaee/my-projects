import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import './WidgetSm.css'
import {newMembers} from './../../Data'
export default function WidgetSm() {
  return (
    <div className='WidgetSm'>
        <span className="WidgetSmTitle">New Join Members</span>
        <ul className="WidgetSmList">
            {newMembers.map(users=>(

            <li key={users.id} className="WidgetSmlistitems">
                <img src={users.img} alt="#" className='WidgetSmImg'/>
                <div className="WidgetSmUser">
                    <span className="widgetUserName">{users.username}</span>
                    <span className="widgetUserTitle">{users.title}</span>
                    </div>
                    <button className='WidgetUserBtn'>
                        <VisibilityIcon className='WidgetSmicon'/>
                    </button>
            </li>
            ))}
           
        </ul>
    </div>
  )
}
