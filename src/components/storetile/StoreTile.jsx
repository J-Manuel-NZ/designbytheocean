import React from 'react';
import './storetile.css';

const storetile = ({ title, image, alt, label, link }) => {
  return (
    <div className='dbo__storetile'>
      <div className='dbo__storetile-container'>
        <h4>{title}</h4>
        <div className='dbo__storetile-container_image'>
          <img src={image} alt={alt} />
        </div>
        <div className='dbo__storetile-container_button-container'>
          <button type='button'><a href='#dbo__emailcta'>{label}</a></button>
        </div>
      </div>
    </div>
  )
}

export default storetile;