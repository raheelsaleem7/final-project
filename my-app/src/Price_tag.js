import React, {useState} from 'react';
import './Price_tag.css';
import headphone from './images/headphone.png'
import usb from './images/usb.png'
import yoo from './images/yoo.png'
import wireless from './images/Wireless.png'
import ultrabook from './images/Ultrabooks.png'
import heade from './images/heade1.png'
import Price_tab1 from './Price_tab1';
import Price_Tab2 from './Price_Tab2';
import Price_Tab3 from './Price_Tab3';

function Price_tag(props) {

    const [toggleState, setToggleState] = useState (1);
    
     const toggleStep = (index) => {
         setToggleState(index);
     }
     function getData () {
     alert ("")
 }

    return (
    <div>
      <div className='price_container'>
           <div  className={toggleState === 1 ? "active-steps" : "not-active"} >
            <Price_tab1  data={ getData}
          
            />
           </div>
            <div className={toggleState === 2 ? "active-steps" : "not-active"} >
            <Price_Tab2 data={ getData} 
       />
             </div>


             <div className={toggleState === 3 ? "active-steps" : "not-active"} >
            <Price_tab1   data={ getData} />
            </div>
          
            <div className={toggleState === 4 ? "active-steps" : "not-active"} >
            <Price_Tab3  data={ getData} />
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
      <div className='dot'>
      <button className={toggleState === 4 ? "active-tab" : "not-active-tab" }
               onClick= {() => toggleStep(4) }></button> 
      </div>
      </div>
      </div>
</div>       
)
}

export default Price_tag
