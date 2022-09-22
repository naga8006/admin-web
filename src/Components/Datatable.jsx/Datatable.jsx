import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import "./datatable.scss"
import {userRows,userColumns} from '../../datatablesrc'
import {Link } from 'react-router-dom'



function Datatable() {
  const actionColumn=[
    {field:"action", headerName:"ACTION", width: 150,
    renderCell:()=>{
      return (
        <div className="cellaction">
               <Link to='/users/t' style={{textDecoration:"none"}}>
          <div className='viewbutton'>view</div></Link>
          <div className='deletebutton'>delete</div>

        </div>
      )
    }
}]
  return (
    <div className='datatable'>
       <div className='datatabletitle'>
        Add New User
        <Link to='/users/new' className='link'>Add New</Link>
        </div>
      <DataGrid
     
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable