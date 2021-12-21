import React,{useState} from 'react'
import Second_tab2 from './Second_tab2';
import Second_tabs from './Second_tabs'

function Second_top() {
    const [toggleState, setToggleState] = useState (1);
       
    const toggleStep = (index) => {
        setToggleState(index);
    }
        function getData () {
            alert ("")
        
    }
    return (
        <div className='second_tab'>
        <div className='tab_content2'>
        <button className={toggleState === 1 ? "active-tab1" : "not-active-tab1" }
          onClick= {() => toggleStep(1) }>Featured</button>        

         <button className={toggleState === 2 ? "active-tab1" : "not-active-tab1" }
          onClick= {() => toggleStep(2) }>On Sale</button>
         
       </div>
        <div>
              <div  className={toggleState === 1 ? "active-steps" : "not-active"} >
            <Second_tabs  data={ getData}/>
</div>
<div className={toggleState === 2 ? "active-steps" : "not-active"} >
            <Second_tab2 data={ getData} />
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
        </div>
    )
}

export default Second_top
