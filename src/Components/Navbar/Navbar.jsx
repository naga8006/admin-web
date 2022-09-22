import React from 'react'
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='wraper'>
        <div className='search'>
          <input type='text' placeholder='search...' /> <SearchIcon />
        </div>
        <div className='items'>
          <div className='item'>
            <PublicIcon className='icon' />English
          </div>
          <div className='item'>
            <DarkModeIcon className='icon' />
          </div>
          <div className='item'>
            <NotificationsActiveIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <FullscreenExitIcon className='icon' />
          </div>
          <div className='item'>
            <ChatBubbleOutlineIcon className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <FormatListBulletedIcon className='icon' />
          </div>
          <div className='item'>
            <img src="https://media.wired.com/photos/59266af7f3e2356fd80092e0/master/w_2560%2Cc_limit/KongTA.jpg"
              alt=''
              className='avatar' />
          </div>

        </div>
      </div>
    </div>

  );
}

export default Navbar


