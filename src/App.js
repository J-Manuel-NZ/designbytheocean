import './App.css';
import { CTA, EmailCTA, Footer, Header, Social, Store } from './containers/containers_index.js';
import { Navbar } from './components/component_index.js';
import { Routes, Route } from 'react-router-dom';
import { StoreFurniture } from './pages/store/StoreFurniture';
import { AboutPage, GalleryPage } from './pages/page_index.js';
import { BeachHeroVideo } from './assets/asset_index';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* HomePage */}
          <Route path='/' element={
            <>
              <div className='image__beach-hero beach-gradient'> 
                <video className='dbo__header-background' autoPlay muted loop>
                  <source src={BeachHeroVideo} type="video/mp4" />
                </video>
                <div className='fade-in-top'>
                  <Navbar />
                </div>
                <Header />
              </div>
              <CTA />
              <Social />
              <Store />
              <EmailCTA />
              <Footer />
            </>} 
          />
        {/* Store Page */}
          <Route path='/store/furniture' element={<StoreFurniture />} />
          <Route path='/about' element={<AboutPage />} /> 
          <Route path='/Gallery' element={<GalleryPage />} />
        
      </Routes>
    </div>
    
  );
}

export default App;
