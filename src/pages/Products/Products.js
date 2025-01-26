import React , {useState} from 'react'
import { products } from '../../Data'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Products.css'
export default function Products() {

  const [productsDatas , setproductsDatas ] = useState(products)
  const productsDelete = productsId =>{
    setproductsDatas(productsDatas.filter(products => products.id != productsId))
  }
  const columns = [
    {
      field: 'id' , 
      headerName : 'ID' , 
      width: 90
    } , 
    {
      field: 'title' ,
      headerName : 'Name' , 
      width: 200 , 
      renderCell : (params)=>{
        return(
            <Link to= {`/product/${params.row.id}`} className='link'>
              <div className="userListuser">
                <img src={params.row.avatar}  className='userListImg'/>
                {params.row.title}
              </div>
            </Link>
        )
      }


    } ,
  {
    field : 'price' , 
    headerName : 'Price' ,
    width: 120 , 
  } , 
  {
    field : 'transAction' , 
    headerName : 'TransAction' , 
    width: 160, 
  } , 
  {
    field : 'action' , 
    headerName : 'Action' , 
    width: 150 , 
    renderCell : (params) => {
      return (
        <>
        <Link to = {`/product/${params.row.id}`}  className='link'>
        <button className='userListEdit'>Edit</button>
        </Link>
        <DeleteOutlineIcon onClick={()=> productsDelete(params.row.id)}
          className='userListDelete'
          
        />
        </>
      )
    }
  }
  ]
  return (
    <div className= "User" >
      <DataGrid
      rows={productsDatas}
      columns={columns}
      disableSelectionOnClick 
      checkboxSelection
      pageSize={3}
      />
    </div>
  )
}
