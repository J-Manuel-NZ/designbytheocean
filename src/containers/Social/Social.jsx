import React from 'react';
import './social.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPatreon, faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Social = () => {
  return (
    <div className='dbo__social'>
        <div className='dbo__social-container'>
          <div className='dbo__social-container_icon-container'><a href='https://www.patreon.com/' target='_blank' >
            <FontAwesomeIcon icon={faPatreon} className="dbo__social-container_icon-container-icon" />
            </a>
            </div>
          <div className='dbo__social-container_icon-container'><a href='https://www.youtube.com/' target='_blank' >
            <FontAwesomeIcon icon={faYoutube} className="dbo__social-container_icon-container-icon" />
            </a>
          </div>
          <div className='dbo__social-container_icon-container'><a href='https://www.instagram.com/' target='_blank' >
            <FontAwesomeIcon icon={faInstagram} className="dbo__social-container_icon-container-icon" />
            </a>
          </div>
          <div className='dbo__social-container_icon-container'><a href='https://www.facebook.com/' target='_blank'>
            <FontAwesomeIcon icon={faFacebookF} className="dbo__social-container_icon-container-icon" />
            </a>
          </div>
      </div>
    </div>
  )
}

export default Social;