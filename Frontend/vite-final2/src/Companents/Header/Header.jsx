import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"

import FavoriteIcon from '@mui/icons-material/Favorite';
const Header = () => {
  return (
   <>
     <nav>
      <div className='navbar'>
         <div className='navtxt'>Free shipping for standard order over $100</div>
         <div className='navb'>
          <div className='nav__rigth'>Help&Faqs</div>
          <div className='nav__rigth'>My account</div>
          <div className='nav__rigth'>EN</div>
          <div className='nav__rigth'>USD</div>
         </div>
      </div>

     </nav>
     <div className='header'>
        <div className='navbottom'>
        <div className='left'>
          <div>
            <img src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png" alt="" />
          </div>
          <div className='menu'>
            <ul>
              <li><Link className='list' to="/">Home</Link></li>
              <li><Link className='list' to="/add">Add</Link></li>
            </ul>
          </div>
        </div>
        <div className='rigth'>
         
          <FavoriteIcon className='navicons'/>
        </div>

        </div>
     </div>
   </>
  )
}

export default Header