import React ,{useState} from 'react'
import './Back.css'
import Back_tab1 from './Back_tab1'
import Back_tab2 from './Back_tab2'
import da from './images/da.png'

function Back() {
    const [toggleState, setToggleState] = useState (1);
   
    const toggleStep = (index) => {
        setToggleState(index);
    }
    function getData () {
    alert ("")
}
    return (
        <div>
         <div className='backing'>
             <div className='backing_container'>
              <div>
            <img src={da} className='da'/>
          </div>
          
           
       
           <div className='backing2'>
           <div className='back_header'>
           <h4>Television Entertainment</h4>
</div>
           <div className={ toggleState === 1 ? "active-steps" : "not-active"} >
       <Back_tab1  data={ getData}/>
      </div>
      <div className={ toggleState === 2 ? "active-steps" : "not-active"} >
       <Back_tab2 data={ getData} />
      </div>
      <div className='dot_btn2'>
        <div className='dot'>
         <button className={toggleState === 1 ? "active-tab" : "not-active-tab" }
               onClick= {() => toggleStep(1) }></button>        
        </div>
        <div className='dot'>
        <button className={toggleState === 2 ? "active-tab" : "not-active-tab" }
               onClick= {() => toggleStep(2) }></button>
        </div>
      
      </div>
</div>
</div>
     
     </div>
       </div>
    )
}


export default Back
