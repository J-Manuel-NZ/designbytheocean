import React from 'react';
import './header.css';
import { Logo, BeachHeroVideo } from '../../assets/asset_index';


const Header = () => {
  return (
    <div className='dbo__header text-focus-in'>
      
      <div className='dbo__header-logo'>
      <img src={Logo} alt="design by ocean logo" />
      </div>
      <h1>DESIGN<span>bythe</span>OCEAN</h1> 
      <p>Handcrafted wooden furniture and household items</p>
      <div className='dbo__header-explore'>
        <button type='button'><a href='#dbo__cta'>EXPLORE</a></button>
      </div>
    </div>
  )
}

export default Header;