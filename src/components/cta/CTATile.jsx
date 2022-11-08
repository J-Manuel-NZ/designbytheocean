import React from 'react';
import './ctatile.css';

const CTATile = ({copy, prompt, link}) => {
  return (
    <div className='dbo__ctatile'>
      <p>{copy}</p>
      <div className='dbo__ctatile-button_container'>
        <button type='button'><a href={link}>{prompt}</a></button>
      </div>
    </div>
  )
}

export default CTATile;