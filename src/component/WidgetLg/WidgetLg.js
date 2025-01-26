import React from 'react'
import './WidgetLg.css'
import {TransAction} from './../../Data'

export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={'WidgetLgbutton ' + type}>{type}</button>
    }

  return (
    <div className='WidgetLg'>
        <h3 className="WidgetLgTitel">Last TransAction</h3>
        <table className="WidgetLgTable">
            <tr className="WidgetLgTr">
                <th className="WidgetLgTh">Customer</th>
                <th className="WidgetLgTh">Date</th>
                <th className="WidgetLgTh">Amout</th>
                <th className="WidgetLgTh">Status</th>
            </tr>
            {TransAction.map((TransActions) =>(
                <tr key={TransActions.id} className="WidgetLgTr">
                <td className="WidgetLguser"><img src="images/download.png" className="WidgetLgImg"/>
                <span className='WidgetLgName'>{TransActions.customer}</span>
                </td>
                <td className="WidgetLgDate">
                   {TransActions.date}
                </td>
                <td className='WidgetLgAmount'>
                   ${TransActions.amount}
                </td>
                <td className="WidgetLgStatus">
                <Button type= {TransActions.status}/>
                </td>
            </tr>
            ))}
            
            

        </table>
    </div>
  )
}
