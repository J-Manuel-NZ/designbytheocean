import React from 'react'
import { AboutMePhoto } from '../../assets/asset_index'
import { Navbar } from '../../components/component_index'
import { EmailCTA, Footer } from '../../containers/containers_index'
import './aboutpage.css'

const AboutPage = () => {
  return (
    <div className='dbo__aboutpage'>
        <Navbar />
        <div className='dbo__aboutpage-container'>
            <div className='test'>
                <div className='dbo__aboutpage-container_image'>
                    <img src={AboutMePhoto} alt="author in a whaling pot" />
                </div>

                <div className='dbo__aboutpage-container_content'>
                    <p><span>DesignByOcean</span> has been a dream of mine ever since I left school. Being able to create functional pieces of furniture that ages with their owner is what I find most captivating about this hobby. Crafted locally in New Brighton, Christchurch. Get in touch today and let's create something that will last generations.</p>
                    <div className='dbo__aboutpage-container_content-button'>
                        <button type='button'><a href='/about#dbo__emailcta'>GET IN TOUCH</a></button>
                    </div>
                </div>
            </div>  
        </div>
        <EmailCTA />
        <Footer />
    </div>
  )
}

export default AboutPage