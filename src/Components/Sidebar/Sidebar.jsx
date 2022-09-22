import React from 'react'
import './Sidebar.scss'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <Link to='/' style={{textDecoration:"none"}}>
            <div className='logo'>NR admin</div>
            </Link>
        </div>
        <hr/>
        <div className='centre'>
            <ul>
            <p className="tittle">MAIN</p>
        
                <li><DashboardCustomizeIcon className='icon'/>
                    <span>DashBoard</span>
                </li>
                <p className="tittle">LISTS</p>
                <Link to='/users' style={{textDecoration:"none"}}>

                <li>
                <PersonIcon className='icon'/>
                    <span>Users</span>
                </li></Link>

                <Link to='/products/single' style={{textDecoration:"none"}}><li>
                    <StoreIcon className='icon'/>
                    <span>Products</span>
                </li></Link>
                <li>
                <GradingOutlinedIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li>
                <LocalShippingOutlinedIcon className='icon'/>
                 <span>Delivary</span>
                </li>
                 <li>
                <QueryStatsIcon className='icon'/>
                    <span>Stats</span>
                </li>

                <li>
                <NotificationAddOutlinedIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                <p className="tittle">SERVICE</p>
                <li>
                <HealthAndSafetyOutlinedIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                <ImportContactsIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                <SettingsSuggestIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className="tittle">USER</p>
                <li>
                <AssignmentIndOutlinedIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                <ExitToAppIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className='bottom'>
            <div className='coloroption'></div>
            <div className='coloroption'></div>
        </div>
    </div>
  )
}

export default Sidebar