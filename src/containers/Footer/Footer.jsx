import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='dbo__footer'>
      <div className='dbo__footer-container'>
        <ul className='dbo__footer-container_list'>
          <li className='dbo__footer-container_list-item'><a href='#dbo__navbar'>RETURN TO TOP</a></li>
          <li className='dbo__footer-container_list-item'><a href='#dbo__emailcta'>CONTACT</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;