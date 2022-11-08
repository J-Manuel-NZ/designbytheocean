import React from 'react';
import { Navbar, StoreTile } from '../../components/component_index';
import { EmailCTA, Footer } from '../../containers/containers_index';
import { Stool } from '../../assets/asset_index.js';
import './storefurniture.css';

import { Route, Routes } from 'react-router-dom';

const StoreMenu = () => {
  return (
    <div className='dbo__store-page_menu'>
      <ul className='dbo__store-page_menu-list'>
        <li className='dbo__store-page_menu-list_item'><a href="/store/furniture" onClick={checkTab}>FURNITURE</a></li>
        
      </ul>
    </div>
  )
}

function checkTab() {
  if (this.onClick == true) {
    return <PlansGrid />;
  }

}


{/* Furniture Tab */}
const FurnitureGrid = () => {
  return (
    <div className='dbo__store-page_furniture-grid'>
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />      
    </div>
  )
}
  

{/* Plans Tab */}
const PlansGrid = () => {
  return (
    <div className='dbo__store-page_plans-grid'>
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
    </div>
  )
}
  

{/* Merch Tab */}
const MerchGrid = () => {
  return (
    <div className='dbo__store-page_plans-grid'>
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
      <StoreTile title="Harvey Stool" image={Stool} alt="stool" label="GET QUOTE" />
    </div>
  )
}

export const StoreFurniture = () => {
  return (
    <div className='dbo__store-page_furniture'>
      <Navbar />
      <StoreMenu />
      <FurnitureGrid />
      {/* {checkTab()} */}
      <EmailCTA />
      <Footer />
    </div>
    
  )
}

export default StoreFurniture;

