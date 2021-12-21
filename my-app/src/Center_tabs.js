import React,{useState} from 'react'
import './Center_tab.css'
import  image11 from './images/Sounddevice.png'
import image12 from './images/apptablet.png'
import image13 from './images/uni.png'
import image14 from './images/GoldPhone.png'
import image15 from './images/camera2.png'
import image16 from './images/printer.png'
import image17 from './images/game.png'
import image18 from './images/videocamera.png'


function Center_tabs(props) {
    const [toggleState, setToggleState] = useState (1);
   
    const toggleStep = (index) => {
        setToggleState(index);
    }
    return (
        <div className='center_tabs'>
            <div className='tab_main'>
            <div className='tab_content'>
             <button className={toggleState === 1 ? "active-tab1" : "not-active-tab1" }
               onClick= {() => toggleStep(1) }>Featured</button>        

              <button className={toggleState === 2 ? "active-tab1" : "not-active-tab1" }
               onClick= {() => toggleStep(2) }>On Sale</button>
              
              <button className={toggleState === 3 ? "active-tab1" : "not-active-tab1" }
               onClick= {() => toggleStep(3) }>Top Rated</button> 
            </div>
        <div className='main1'>
        <div className='tab_content1'>
            <div>
            <span className='audio'>Audio Speakers</span>
            <a href="https://electro.madrasthemes.com/product/wireless-audio-system-multiroom-360/" class="woocommerce-LoopProduct-link">
            <h2 class="woocommerce-loop-product__title">Wireless Audio <br />System Multiroom 360</h2></a>
          <div className='for_picture'>
           <img src={image11} className='image11'/>
        </div>
        </div>
        <div className='for_icon'>
        <p className='dollar9'>$2,299.00</p>
        <div className='svg'>
        <svg aria-hidden="true" focusable="false" width="15px" data-prefix="fas" data-icon="shopping-bag" class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path></svg>
        </div>
        </div>
        </div>
        <div className='tab_content1'>
            <div>
            <span className='audio'>Laptop,Ultrabooks</span>
            <a href="https://electro.madrasthemes.com/product/wireless-audio-system-multiroom-360/" class="woocommerce-LoopProduct-link">
            <h2 class="woocommerce-loop-product__title">Tablets Red EliteBook <br />Revovole 810 G2</h2></a>
            <div className='for_picture'>
           <img src={image12} className='image12'/>
           </div>
        </div>
        <div className='for_icon'>
        <p className='dollar10'>$2,100.00 <span className='dollar11'>$2,290.00</span></p>
        <div className='svg'>
        <svg aria-hidden="true" focusable="false" width="15px" data-prefix="fas" data-icon="shopping-bag" class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path></svg>
        </div>
       
        </div>
        </div>
        <div className='tab_content1'>
            <div>
            <span className='audio'>Headphones</span>
            <a href="https://electro.madrasthemes.com/product/wireless-audio-system-multiroom-360/" class="woocommerce-LoopProduct-link">
            <h2 class="woocommerce-loop-product__title">White Solo 2 Wireless</h2></a>
            <div className='for_picture'>
           <img src={image13} className='image12'/>
        </div>
        </div>
        <div className='for_icon'>
        <p className='dollar9'>$248.99</p>
        <div className='svg'>
        <svg aria-hidden="true" focusable="false" width="15px" data-prefix="fas" data-icon="shopping-bag" class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path></svg>
        </div>
       
        </div>
        </div>
        <div className='tab_content1'>
            <div>
            <span className='audio'>Smartphone</span>
            <a href="https://electro.madrasthemes.com/product/wireless-audio-system-multiroom-360/" class="woocommerce-LoopProduct-link">
            <h2 class="woocommerce-loop-product__title">Smartphone 6S 32GB <br/>LTE</h2></a>
            <div className='for_picture'>
           <img src={image14} className='image12'/>
        </div>
        </div>
        <div className='for_icon'>
        <p className='dollar10'>$1,100.00<span className='dollar11'> $1,215.00</span></p>
        <div className='svg'>
        <svg aria-hidden="true" focusable="false" width="15px" data-prefix="fas" data-icon="shopping-bag" class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path></svg>
        </div>
       
        </div>
        
        </div>
        <div className='tab_content1'>
            <div>
            <span className='audio'>Cameras</span>
            <a href="https://electro.madrasthemes.com/product/wireless-audio-system-multiroom-360/" class="woocommerce-LoopProduct-link">
            <h2 class="woocommerce-loop-product__title">Purple NX Mini F1 <br />aparat SMART NX</h2></a>
            <div className='for_picture'>
           <img src={image15} className='image12'/>
        </div>
        </div>
        <div className='for_icon'>
        <p className='dollar9'>$559.00</p>
        <div className='svg'>
        <svg aria-hidden="true" focusable="false" width="15px" data-prefix="fas" data-icon="shopping-bag" class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path></svg>
        </div>
       
        </div>
        
        </div>
        <div className='tab_content1'>
            <div>
            <span className='audio'>Audio Speakers</span>
            <a href="https://electro.madrasthemes.com/product/wireless-audio-system-multiroom-360/" class="woocommerce-LoopProduct-link">
            <h2 class="woocommerce-loop-product__title">Wireless Audio <br />System Multiroom 360</h2></a>
            <div className='for_picture'>
           <img src={image16} className='image12'/>
           </div>
        </div>
        <div className='for_icon'>
        <p className='dollar9'>$2,299.00</p>
        <div className='svg'>
        <svg aria-hidden="true" focusable="false" width="15px" data-prefix="fas" data-icon="shopping-bag" class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path></svg>
        </div>
       
        </div>
        
        
        </div>
      
        </div>
         </div>

        </div>
    )
}

export default Center_tabs
