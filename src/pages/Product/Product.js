import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'
import {productsData} from './../../Data'
import Chart from './../../component/chart/Chart'
import PublishIcon from '@mui/icons-material/Publish';

export default function Product() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className='productTitle'>product</h1>
            <Link to = '/newProduct'>
            <button className='productAddBtn'>Create</button>
            </Link>
        </div>

        <div className="produvtTop">
            <div className="prouductLeft">
            <Chart titel='Sale in Month ' data={productsData} dataKey='saled' className='proMine' />
            </div>
            <div className="prouductRight">
                <div className="prouductInfoTop">
                    <img src="/images/proImg.jpg" alt="asus" className='prouductInfoImg' />
                    <span className="prouductName">Dell</span>
                    </div>
                    <div className="prouductInfoBottom">
                        <div className="prouductInfoItems">
                            <div className="prouductInfoKey">ID:</div>
                            <div className="prouductInfoValue">123</div>
                        </div>
                        <div className="prouductInfoItems">
                            <div className="prouductInfoKey">Name:</div>
                            <div className="prouductInfoValue">Del</div>
                        </div>
                        <div className="prouductInfoItems">
                            <div className="prouductInfoKey">Sales:</div>
                            <div className="prouductInfoValue">$666</div>
                        </div>
                        <div className="prouductInfoItems">
                            <div className="prouductInfoKey">Active:</div>
                            <div className="prouductInfoValue">Yes</div>
                        </div>
                        <div className="prouductInfoItems">
                            <div className="prouductInfoKey">In Store:</div>
                            <div className="prouductInfoValue">no</div>
                        </div>
                    </div>
            </div>
        </div>

        <div className="prouductBottom">

        <form className="prouductForm">
            <div className="prouductFormLeft">
                <label>prouduct Name</label>
                <input type="text" placeholder='Dell Laptop' />
                <label>In Stock</label>
                <select id="InStock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <label>Active</label>
                <select id="InStock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="prouductFormRight">
                <div className="prouductUploader">
                    <img src="/images/proImg.jpg" alt="profile" className='prouductUploaderImg' />
                    <label>
                    <PublishIcon/>
                    </label>
                    <input type="file"  style={{display:'none'}}/>
                </div>
                    <button className='productButton'>Upload (Edit)</button>
            </div>
        </form>

        </div>
    </div>
  )
}
