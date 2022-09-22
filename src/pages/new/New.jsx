import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './New.scss'
import UploadFileIcon from '@mui/icons-material/UploadFile';

function New({inputs,title}) {
const [file,setFile]=useState('');

console.log(file)
  return (
    <div className='new'>
      <Sidebar/>
      <div className='newcontainer'>
        <Navbar/>
      <div className="top">
        <h1>{title}</h1>
      </div>
      <div className="bottom">
        <div className="left"><img src={file ? URL.createObjectURL(file) : 
        "https://previews.123rf.com/images/pe3check/pe3check1710/pe3check171000054/88673746-no-image-available-sign-internet-web-icon-to-indicate-the-absence-of-image-until-it-will-be-download.jpg"}
         alt="" 
         />
        </div>
        <div className="right">
          <form>
            <div className="formtype">
          
             <label htmlFor='file'> Image <UploadFileIcon className='icon'/></label>
              <input type="file"  id='file'  onChange={e=>setFile(e.target.files[0])} style={{display: "none"}}/>
            </div>

            {inputs.map( (input)=>(
            <div className="formtype">
              <label>{input.label}</label>
              <input type={input.type} placeholder={input.placeholder}/> </div>
            ))}
              <button>SEND</button>
           
          </form>

        </div>
      </div>
      </div>
    </div>
  )
}

export default New