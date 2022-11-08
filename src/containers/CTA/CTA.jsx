import React from 'react';
import './cta.css';
import { CTATile } from '../../components/component_index';
import { Route } from 'react-router-dom';
import { GalleryPage, BlogPage } from '../../pages/page_index';

const CTA = () => {
  return (
    <div className='dbo__cta' id='dbo__cta'>
      <CTATile 
        copy="Wanting a truly unique piece of generational furniture that not only looks beautiful, but grows with you and your family"
        prompt="GET IN TOUCH" 
        link='#dbo__emailcta'
      />

      <CTATile 
        copy="If you're not sure where to start, check out my current pieces for sale!"
        prompt="GO TO STORE" 
        link='/Store'
      />
      
      <CTATile 
        copy="Working with you to craft beautiful pieces of furniture leaves us with a whole lot of stories to tell!"
        prompt="GO TO GALLERY" 
        link='/Gallery'
      />

    </div>
  )
}

export default CTA;