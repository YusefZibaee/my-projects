import React , {useState} from 'react'
import { userRows } from '../../Data'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './UserList.css'
export default function UserList() {

  const [UserDatas , setUserDatas ] = useState(userRows)
  const userDelete = userId =>{
    setUserDatas(UserDatas.filter(user => user.id != userId))
  }
  const columns = [
    {
      field: 'id' , 
      headerName : 'ID' , 
      width: 90
    } , 
    {
      field: 'user' ,
      headerName : 'User' , 
      width: 200 , 
      renderCell : (params)=>{
        return(
            <Link to= '/' className='link'>
              <div className="userListuser">
                <img src={params.row.avatar}  className='userListImg'/>
                {params.row.username}
              </div>
            </Link>
        )
      }


    } ,
  {
    field : 'email' , 
    headerName : 'Email' , 
    width: 200 , 
  } , 
  {
    field : 'status' , 
    headerName : 'Status' ,
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
        <Link to = {`/user/${params.row.id}`}  className='link'>
        <button className='userListEdit'>Edit</button>
        </Link>
        <DeleteOutlineIcon onClick={()=> userDelete(params.row.id)}
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
      rows={UserDatas}
      columns={columns}
      disableSelectionOnClick 
      pageSize={4}
      />
    </div>
  )
}
