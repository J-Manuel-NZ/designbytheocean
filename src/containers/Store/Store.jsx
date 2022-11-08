import React from 'react';
import './store.css';

import { StoreTile } from '../../components/component_index';
import { JapandiChair, Stool, RockingChair } from '../../assets/asset_index';

const Store = () => {
  return (
    <div className='dbo__store'>
      <div className='dbo__store-container'>
        <StoreTile title="Mable Occassional Chair" image={JapandiChair} alt="japandi style chair" label="GET QUOTE" link='#dbo__emailcta' />
        <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" link='#dbo__emailcta' />
        <StoreTile title="Gregory Rocking Chair" image={RockingChair} alt="rocking chair" label="GET QUOTE" link='#dbo__emailcta' />
      </div>
    </div>
  )
}

export default Store;