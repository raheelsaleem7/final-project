import React ,{useState} from 'react'
import './Back.css'
import Back_tab1 from './Back_tab1'
import Back_tab2 from './Back_tab2'

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
           
           <div>
           <div className={ toggleState === 1 ? "active-steps" : "not-active"} >
       <Back_tab1  data={ getData}/>
      </div>
      <div className={ toggleState === 2 ? "active-steps" : "not-active"} >
       <Back_tab2 data={ getData} />
      </div>
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
      
      </div>

       </div>
    )
}


export default Back
