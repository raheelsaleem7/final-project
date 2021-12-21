import React from 'react';
import './Feature.css';
import rediphone from './images/rediphone.png'
import sam from './images/sam2.png'
import lgphone from './images/lgphone.png'
import wireless from './images/Wireless.png'
import remote from './images/remote.png'
import apptablet from './images/apptablet.png'
import powerbank from './images/powerbank.png'
import Goldiphone from './images/GoldPhone.png'
import smartphone from './images/Smartphones.png'
import footer from './images/footer.jpg'

function Feature() {
      const name = [
          {
             title:"Tablet Thin EliteBook Revovle 810 G6",
             title2:"Game Console Controller + USB 3.0 Cable",
             title3:"Powerbank 1130 mAh Blue",
             pic:rediphone,
             pic2:remote,
             pic3:powerbank,
             dollar:"$1,300.00",
             dollar2:"$79.00 $99.00",
             dollar3:"$200.00 $210.00"
          },
          {
            title:"Notebook Widescreen Z51-70 40K6013UPB",
            title2:"Wireless Audio System Multiroom 360",
            title3:"Smartphone 6S 32GB LTE",
            pic:sam,
            pic2:wireless,
            pic3:Goldiphone,
            dollar:"$1,100.00",
            dollar2:"$2,299.00",
            dollar3:"$1,100.00 $1,215.00"
         },
         {
            title:"Smartphone 6S 128GB LTE",
            title2:"Tablets Red EliteBook Revovle 810 G2",
            title3:"Smartphone 6S 128GB LTE",
            pic:lgphone,
            pic2:apptablet,
            pic3:smartphone,
            dollar:"$750.00 $780.00",
            dollar2:"$2,100.00 $2,299.00"
         },
      ]
    return (
        <div className='feature'>

        <div className='feature_container'>
            <div className='feature_main'>
          
            <div className='feature_content'>
                <h4 className='feature_h'>Featured Products</h4>
            </div>
            <div className='feature_big'>
            {
         name.map((Feature ) => (
     
        <div className='feature_in'>
            <div>
            <img src={Feature.pic} className='rediphone'/>
       </div>
       <div>
        <a href="https://electro.madrasthemes.com/product/wireless-audio-system-multiroom-360/" class="woocommerce-LoopProduct-link">
        <h2 class="f_title">{Feature.title}</h2></a>
           <div>
           <svg aria-hidden="true" focusable="false" width="15px" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fed700" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
           <svg aria-hidden="true" focusable="false" width="15px" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fed700" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
           <svg aria-hidden="true" focusable="false" width="15px" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fed700" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
           <svg aria-hidden="true" focusable="false" width="15px" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fed700" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
           <svg aria-hidden="true" focusable="false"  width="15px" data-prefix="fas" data-icon="star-half" class="svg-inline--fa fa-star-half fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fed700" d="M288 0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6V0z"></path></svg>
           </div>

           <div>
           <p className='dollar99'>{Feature.dollar}</p>
           </div>

            </div>

        </div>
           ))
            }
        </div>   

 </div>



 <div className='feature_main'>
          
          <div className='feature_content'>
              <h4 className='feature_h'>Top Selling Products</h4>
          </div>
          <div className='feature_big'>
          {
       name.map((Feature ) => (
   
      <div className='feature_in'>
          <div>
          <img src={Feature.pic2} className='rediphone'/>
     </div>
     <div>
      <a href="https://electro.madrasthemes.com/product/wireless-audio-system-multiroom-360/" class="woocommerce-LoopProduct-link">
      <h2 class="f_title">{Feature.title2}</h2></a>
         <div>
         <svg aria-hidden="true" focusable="false" width="15px" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fed700" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
         <svg aria-hidden="true" focusable="false" width="15px" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fed700" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
         <svg aria-hidden="true" focusable="false" width="15px" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fed700" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
         <svg aria-hidden="true" focusable="false" width="15px" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fed700" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
         <svg aria-hidden="true" focusable="false"  width="15px" data-prefix="fas" data-icon="star-half" class="svg-inline--fa fa-star-half fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fed700" d="M288 0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6V0z"></path></svg>
         </div>

         <div>
         <p className='dollar99'>{Feature.dollar2}</p>
         </div>

          </div>

      </div>
         ))
          }
      </div>   

</div>


<div className='feature_main'>
          
          <div className='feature_content'>
              <h4 className='feature_h'>On-sale Products</h4>
          </div>
          <div className='feature_big'>
          {
       name.map((Feature ) => (
   
      <div className='feature_in'>
          <div>
          <img src={Feature.pic3} className='rediphone'/>
     </div>
     <div>
      <a href="https://electro.madrasthemes.com/product/wireless-audio-system-multiroom-360/" class="woocommerce-LoopProduct-link">
      <h2 class="f_title">{Feature.title3}</h2></a>
         <div>
         <svg aria-hidden="true" focusable="false" width="15px" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fed700" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
         <svg aria-hidden="true" focusable="false" width="15px" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fed700" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
         <svg aria-hidden="true" focusable="false" width="15px" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fed700" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
         <svg aria-hidden="true" focusable="false" width="15px" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fed700" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
         <svg aria-hidden="true" focusable="false"  width="15px" data-prefix="fas" data-icon="star-half" class="svg-inline--fa fa-star-half fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fed700" d="M288 0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6V0z"></path></svg>
         </div>

         <div>
         <p className='dollar99'>{Feature.dollar3}</p>
         </div>

          </div>

      </div>
         ))
          }
      </div>   

</div>

    <div className='feature_last'>
    <img src={footer} className='img_last' />
    </div>

    </div>
     </div>
    )
}

export default Feature
