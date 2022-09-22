import React from 'react'
import './Feature.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function Feature() {
  return (
    <div className='featured'>
        <div className='top'>
            <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize='small'/>
        </div>
        <div className='bottom'>
            <div className='featuredchart'>
                <CircularProgressbar value={70} text={'70%'} strokeWidth={7}/>
            </div>
            <p className="title">Total sales today</p>
            <p className="amount">$420</p>
            <p className="desc">Previous transaction. last payment may not be include</p>
        <div className="summary">
          <div className="item">
            <div className="itemtitle">Traget</div>
            <div className="itemresult negative">
              <KeyboardArrowDownIcon fontSize='small'/>
              <div className="resultamount">$12.5k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Last week</div>
            <div className="itemresult positive">
              <KeyboardArrowUpIcon fontSize='small'/>
              <div className="resultamount">$12.5k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Last month</div>
            <div className="itemresult positive">
              <KeyboardArrowUpIcon fontSize='small'/>
              <div className="resultamount">$12.5k</div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Feature