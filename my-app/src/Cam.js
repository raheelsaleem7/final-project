import React from 'react'
import './Cam.css';
import image5 from './images/cameras-resized.png';
import image6 from './images/laptop.png';
import image7 from './images/desktop.png';

function Cam() {
    return (
        <div className="cam">
          <div className='cam_container'>
            <div className='cam_content'>
               <div className='content2'>
                   <div>
                 <img src={image5}  className='image5'/>
                 </div>
                 <div>
                 <p className='cam_text'>CATCH BIG <span className='deal'> DEAL</span> ON THE CAMERA</p>
                 <button className='shop2'>SHOP NOW</button>
               </div>
               
               </div>
            </div>


            <div className='cam_content'>
               <div className='content1'>
                   <div>
                 <img src={image6}  className='image5'/>
                 </div>
                 <div>
                 <p className='cam_text'>TABLETS, SMARTPHONES <span className='deal'> AND MORE</span></p>
                <p><span className='upto'>UP TP</span> <span className='number'>70</span> <span className='percent'> %</span></p>
               </div>
               
               </div>
            </div>


            <div className='cam_content3'>
               <div className='content1'>
                   <div>
                 <img src={image7}  className='image5'/>
                 </div>
                 <div>
                 <p className='cam_text'>SHOP THE<span className='deal'> HOTTEST</span> PRODUCTS</p>
                 <button className='shop2'>SHOP NOW</button>
               </div>
               
               </div>
            </div>
            </div>
        </div>
    )
}

export default Cam
