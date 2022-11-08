import React, {useState} from 'react';
import './navbar.css';
import { Logo } from '../../assets/asset_index';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => (
  <>
    <ul>
      <li className='menu-item-selected'><a href='/'>HOME</a></li>
      <li><a href='/store/furniture'>STORE</a></li>
      <li><a href='/about'>ABOUT</a></li>
      <li><a href='/gallery'>GALLERY</a></li>
    </ul>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='dbo__navbar' id='dbo__navbar'>
      <a href='/'><div className='dbo__navbar-logo'>
      <img src={Logo} alt='design by ocean logo' href='/' />
      </div></a>
      <div className='dbo__navbar-links'>
        <Menu />
      </div>


      <div className='dbo__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='dbo__navbar-menu_container swing-in-top-fwd'>
            <div className='dbo__navbar-menu_container-links'>
              <Menu />
            </div>
          </div> 
        )}
      </div>
    </div>
  )
}

export default Navbar;