import React from 'react'
import headphone from './images/headphone.png'
import usb from './images/usb.png'
import yoo from './images/yoo.png'
import wireless from './images/Wireless.png'
import ultrabook from './images/Ultrabooks.png'
import heade from './images/heade1.png'

function Price_tab1( {}) {
    const data = [ 
        {
            title : "Headphone Cases",
            description:"Universal Headphones Case in Black",
            dollar:"$159.00",
            pic:headphone
        },
        {
            title : "Headphone Accessories",
            description:"Headphones USB Wires in White",
            dollar:"$50.00",
            pic:usb
                },
         {
            title : "Headphone",
            description:"Ultra Wireless S50 Headphonees S50",
            dollar:"$350.00",
            pic:yoo,
        },
         {
            title : "Audio Speakers ",
            description:"Wireless Audio System Multiroom",
            dollar:"$2,299.00",
            pic:wireless,
        },
         {
            title : "Laptops ",
            description:"Tablet White EliteBook Revovle",
            dollar:"$159.00",
            pic:ultrabook,
        },
         {
            title : "Headphone",
            description:"Purple Solo 2 Wireless in White",
            dollar:"$248.00",
            pic:heade
        }

        
      ]
    
        

    return (

        <div className='price_tag'>
         <div className='header_price'>
            <h4 className='h_head'>Recently Added</h4>
            <div className='for_arrow'>
            <svg aria-hidden="true" focusable="false" width="10px" data-prefix="fas" data-icon="chevron-left" class="arrow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#333e48" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
            <svg aria-hidden="true" focusable="false"  width="10px" data-prefix="fas" data-icon="chevron-right" class="arrow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#333e48" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
            </div>
         </div>
         <div className='price_content'>
       {
         data.map(( Price_tag ) => (
      
      
                <div className='price_line'>
                  <div className='price_wrap'>
                   <p className='price_p'>{Price_tag.title}</p>
                   <h4 className='price_h'>{Price_tag.description}</h4>
                  </div>
                   <div className='imag14_div'>
                       <img src={Price_tag.pic} className='image30' />
                   </div>
                   <div className='for_icon'>
        <p className='dollar9'>{Price_tag.dollar}</p>
        <div className='svg'>
        <svg aria-hidden="true" focusable="false" width="15px" data-prefix="fas" data-icon="shopping-bag" class="svg-icon2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path></svg>
        </div>
       
                     </div>
                     </div>
      
       ))
           }
 </div>
        </div>
    )
}

export default Price_tab1
