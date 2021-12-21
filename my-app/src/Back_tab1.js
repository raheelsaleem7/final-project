import React from 'react'
import front from './images/front.png'
import wireless from './images/Wireless.png'
import laptop from './images/apptablet.png'
import headphone from './images/headphone.png'
function Back_tab1() {
    return (
        <div>
             <div className='back'>
          <div className='back_container'>
           
          <div className='back_side'>
      
            <div className='back_to'>
            <div className='back_content'>
                <div className='back_img'>
                    <img src ={front} className='front' />
                </div>
                <div>
            <p className='for_power'>Game Consoles</p>
               <h4 className='heading_powerbank'>Game Console <br /> Controller + USB</h4>
           <div>
           <p className='remote_text2'><span class="dollar20">$79.00</span>
               <span class="dollar21">$99.00</span></p>
           </div>
            </div>

            </div>
            <div className='back_content'>
                <div className='back_img'>
                    <img src ={wireless} className='front' />
                </div>
                <div>
            <p className='for_power'>Audio Speakers</p>
               <h4 className='heading_powerbank'>Wireless Audio <br /> System</h4>
           <div>
           <span class="dollar99">2,299.00</span>
           </div>
            </div>

            </div>
              </div>


              <div className='back_to'>
            <div className='back_content'>
                <div className='back_img'>
                    <img src ={laptop} className='front' />
                </div>
                <div>
            <p className='for_power'>Game Consoles</p>
               <h4 className='heading_powerbank'>Game Console <br /> Controller + USB</h4>
           <div>
           <p className='remote_text2'><span class="dollar20">$79.00</span>
               <span class="dollar21">$99.00</span></p>
           </div>
            </div>

            </div>
            <div className='back_content'>
                <div className='back_img'>
                    <img src ={headphone} className='front' />
                </div>
                <div>
            <p className='for_power'>Audio Speakers</p>
               <h4 className='heading_powerbank'>Wireless Audio <br /> System</h4>
           <div>
           <span class="dollar99">2,299.00</span>
           </div>
            </div>

            </div>
              </div>
          </div>


          </div>
        </div>
        </div>
    )
}

export default Back_tab1
