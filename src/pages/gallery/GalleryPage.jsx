import React, {useState} from 'react';
import { Navbar } from '../../components/component_index';
import { Footer } from '../../containers/containers_index';
import './gallerypage.css';
import { BrassTable, CaneChair, ChairOnBeach, CoffeeTable, 
    FoldingChair, FoldingChairWithThrow, HallTableWithWine, 
    JapandiChair, RockingChair, Stool, 
    TableWithChairs } from '../../assets/asset_index.js';
    
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';


const images = [
    { id: 1, imgSrc: BrassTable }, { id: 2, imgSrc: CaneChair }, { id: 3, imgSrc: ChairOnBeach }, 
    { id: 4, imgSrc: CoffeeTable }, { id: 5, imgSrc: FoldingChair }, { id: 6, imgSrc: FoldingChairWithThrow }, 
    { id: 7, imgSrc: HallTableWithWine }, { id: 8, imgSrc: JapandiChair }, { id: 9, imgSrc: RockingChair }, 
    { id: 10, imgSrc: Stool }, { id: 11, imgSrc: TableWithChairs },      
]

const CreateGallery = () => {

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
      <>
      <div className={model? "model open" : "model"}>
        <img src={tempImgSrc} />
        <FontAwesomeIcon icon={faClose} onClick={() => setModel(false)} />
      </div>
      <div className='dbo__gallerypage-container_gallery'>
        {images.map((item, index) =>{
            return (
                <div className='dbo__gallerypage-container_gallery-image' key={index} onClick={() => getImg(item.imgSrc)}>
                    <img src={item.imgSrc} style={{width: '100%'}} />
                </div>
            )
        })}
      </div>
      </>
      );
  }


const GalleryPage = () => {
  return (
    <div className='dbo__gallerypage'>
        <Navbar />
        <div className='dbo__gallerypage-container'>
            {CreateGallery()}
        </div>
        <Footer />
    </div>
  )
}

export default GalleryPage