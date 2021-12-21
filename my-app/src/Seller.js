import React, {useState} from 'react'
import './Seller.css'

import Seller_tab1 from './Seller_tab1'
import banner from './images/home.png'

function Seller(props) {
   const [toggleState, setToggleState] = useState (1);
   
    const toggleStep = (index) => {
        setToggleState(index);
    }
    function getData () {
    alert ("")
}
    return (
        <div className='seller'>
          <div className='seller_container'>
          <div className='seller_header'>
            <h4 className='seller_head'>Best Sellers</h4>
            <ul className='seller_ul'>
                <li className='active_h'>Top 20</li>
                <li className='s_li'>Smart Phones & Tablets</li>
                <li className='s_li'>Laptops & Computers</li>
                <li className='s_li'>Video Camera</li>
            </ul>
          </div>
            
<div className={ toggleState === 1 ? "active-steps" : "not-active"} >

<Seller_tab1  data={ getData}
pic={"https://electro.madrasthemes.com/wp-content/uploads/2016/03/consal-300x300.png"}  
pic2={"https://electro.madrasthemes.com/wp-content/uploads/2016/03/WirelessSound-300x300.png"} 
pic3={"https://electro.madrasthemes.com/wp-content/uploads/2016/03/apptablet-300x300.png"} 
pic4={"https://electro.madrasthemes.com/wp-content/uploads/2016/03/uniheadphone-300x300.png"} 
pic5={"https://electro.madrasthemes.com/wp-content/uploads/2016/03/1-300x300.png"} 
pic6={"https://electro.madrasthemes.com/wp-content/uploads/2016/03/redPhone-300x300.png"} 
title={"Game Consoles"} title2={"Audio Speakers"} title3={"Laptop,Ultrabooks"} title4={"Headphones"} title5={"Headphones"}
 title6={"Smartphones"} des1={"Game Console Controller + USB 3.0 Cable"} des2={"Wireless Audio System Multiroom 360"}
  des3={"Tablets Red EliteBook Revovole 810 G2"} des4={"White Solo 2 Wireless"} des5={"Ultra Wireless S50 Headphones S50"}
   des6={"Ultra Wireless S50  Headphones S50"}
 />
  
  </div>
 
   <div  className={toggleState === 2 ? "active-steps" : "not-active"} >
 <Seller_tab1  data={ getData} 
 pic={"https://electro.madrasthemes.com/wp-content/uploads/2016/03/printer-300x300.png"}
 pic2={"https://electro.madrasthemes.com/wp-content/uploads/2016/03/heade1-300x300.png"}
 pic3={"https://electro.madrasthemes.com/wp-content/uploads/2016/03/camera2-300x300.png"}
 pic4={"https://electro.madrasthemes.com/wp-content/uploads/2016/03/macpro-300x300.png"}
 pic5={"https://electro.madrasthemes.com/wp-content/uploads/2016/03/GoldPhone-1-300x300.png"}
 pic6={"https://electro.madrasthemes.com/wp-content/uploads/2016/03/headphonecase-300x300.png"}
 title={"Printers"} title2={"Headphones"} title3={"Cameras"} title4={"Mac Computers"} title5={"Smartphones"}
 title6={"Headphone Cases"}  des1={"Full Color LaserJet Pro M452dn"} des2={"Purple Solo 2 Wireless"} des3={"Purple NX Mini F1 aparat SMART NX"} 
 des4={"Apple MacBook Pro MF841HN/A 13-inch"} des5={"NoteBook White Spire V Nitro VN7-591G"} des6={"Universal Headphones Case in Black "}/>
 
 
  </div>
 
 <div className={toggleState === 3 ? "active-steps" : "not-active"} >
 <Seller_tab1  data={ getData}
  pic={"https://electro.madrasthemes.com/wp-content/uploads/2016/03/lgphone-300x300.png"}
 pic2={"https://electro.madrasthemes.com/wp-content/uploads/2016/03/sam2-300x300.png"}
 pic3={"https://electro.madrasthemes.com/wp-content/uploads/2016/03/asuaslap-300x300.png"}
 pic4={"https://electro.madrasthemes.com/wp-content/uploads/2016/03/usbheadphone-300x300.png"}
 pic5={"https://electro.madrasthemes.com/wp-content/uploads/2016/03/1-300x300.png"} 
pic6={"https://electro.madrasthemes.com/wp-content/uploads/2016/03/redPhone-300x300.png"} 

 title={"Smartphones"} title2={"Smartphones"} title3={"Laptops"} title4={"Headphone Accessories"}title5={"Headphones"}title6={"Smartphones"}
 des1={"Smartphone 6S 128GB LTE"} des2={"Notebook Widescreen Z51-70 40K6013UPB"} des3={"Laptop R752LJ 17,3” 5200U 4GB 1TB"} des4={"Headphones USB Wires"} 
 des5={"Ultra Wireless S50 Headphones S50"}
 des6={"Ultra Wireless S50  Headphones S50"} />
        
  
                  </div>

      <div className='dot_btn'>
        <div className='dot'>
         <button className={toggleState === 1 ? "active-tab" : "not-active-tab" }
               onClick= {() => toggleStep(1) }></button>        
        </div>
        <div className='dot'>
        <button className={toggleState === 2 ? "active-tab" : "not-active-tab" }
               onClick= {() => toggleStep(2) }></button>
        </div>
        <div className='dot'>
      <button className={toggleState === 3 ? "active-tab" : "not-active-tab" }
               onClick= {() => toggleStep(3) }></button> 
      </div>
      </div>

        <div className='img_banner'>
          <img src={banner}  className='ban_img'/>
        </div>
   </div>
</div>
  
    )
}

export default Seller
