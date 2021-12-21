import React,{useState} from 'react'
import image20 from  './images/cpu.png'
import image15 from  './images/laptop2.png'
import './Second_tabs.css'

function Second_tabs(props) {
       
    return (
      
           
                        <div className='side_second'>
                     <div className='side_top'>
                   <p className='for_power'>Audio</p>
                   <h4 className='heading_powerbank'>Aerocool EN52377 Dead <br /> Silence Gaming Cube Case</h4>
                   <div className='imag14_div'>
                       <img src={image20} className='image144' />
                   </div>
                   <div>
                  <p className='for_inline'><span class="dollar14">$180.00</span>
                   <span class="dollar10">$150.00</span></p>
                     </div>
                     </div>
                     <div className='side_top'>
                   <p className='for_power'>Laptops</p>
                   <h4 className='heading_powerbank'>Laptop Screener CX70 2QF- <br /> 621XPL 17.3″ 4210</h4>
                   <div className='imag14_div'>
                       <img src={image15} className='image144' />
                   </div>
                   <div>
                   <span class="dollar40">$2,399.00</span>
                     </div>
                     </div>
                     <div className='side_top'>
                   <p className='for_power'>Computer Cases, Servers</p>
                   <h4 className='heading_powerbank'>Aerocool EN52377 Dead <br /> Silence Gaming Cube Case</h4>
                   <div className='imag14_div'>
                       <img src={image20} className='image144' />
                   </div>
                   <div>
                  <p className='for_inline'><span class="dollar14">$180.00</span>
                   <span class="dollar10">$150.00</span></p>
                     </div>
                     </div>


                     <div className='side_top'>
                   <p className='for_power'>TVs</p>
                   <h4 className='heading_powerbank'>Widescreen 4K SUHD TV</h4>
                   <div className='imag14_div'>
                       <img src={image15} className='image144' />
                   </div>
                   <div>
                   <span class="dollar40">$3,299.00</span>
                     </div>
                     </div>

                     </div>
    )
}

export default Second_tabs
