import React,{useState} from 'react';
import Countdown from './Countdown';
import './Center.css'
import image10 from './images/consal.png'
import Center_tabs from './Center_tabs';
import Center_tabs1 from './Center_tabs1';


function Center(props){
    const [toggleState, setToggleState] = useState (1);
   
    const toggleStep = (index) => {
        setToggleState(index);
    }

function getData () {
    alert ("")
}
    return (
        <div className='center'>
            <div className='center_container'>
            <div className='center_main'>
               <div className='right_side'>
                  <div className='right_content'>
                   <p>Special Offer</p>
                   <div className='for_sale'>
                     <p className='dollarss'>Save<span className='save_dollar'>$20.00</span></p>
                   </div>
                   </div>
                  <img src={image10} className='image10'/>
            
               <h2 className='for_game'>Game Console Controller + USB 3.0 Cable</h2>
              <div className='money'>
               <span className='price6'>$79.00</span><span class="price7">$99.00</span>
</div>
               <Countdown />
                 
               </div>
            </div>
         
           <div className={ toggleState === 1 ? "active-steps" : "not-active"} >
            <Center_tabs data={ getData} />
         </div>
<div  className={toggleState === 2 ? "active-steps" : "not-active"} >            
            <Center_tabs1  data={ getData} />
             </div>

            <div className={toggleState === 3 ? "active-steps" : "not-active"} >
            <Center_tabs  data={ getData} /> 
            </div>
            
            </div>
        </div>
   
 )
}
export default Center
