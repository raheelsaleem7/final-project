import React from 'react'
import './Main.css'
import image14 from  './images/powerbank.png'
import image15 from  './images/laptop2.png'
import image16 from  './images/consal.png'
import image17 from  './images/remote2.png'
import image18 from  './images/back.png'
import image19 from  './images/front.png'
import image20 from  './images/cpu.png'

function Main() {
    return (
        <div className='main'>
          <div className="main_container">
            <div className='main_content'>
                <div className='main_nav'>
                    <ul className='main_ul'>
                        <li className='main_li-active'>Best deals</li>
                        <li className='main_li'>TV & Audio</li>
                        <li className='main_li'>Cameras</li>
                        <li className='main_li'>Audio</li>
                        <li className='main_li'>Smartphones</li>
                        <li className='main_li'>GPS & Navi</li>
                        <li className='main_li'>Computer</li>
                        <li className='main_li'>Portable Audio</li>
                        <li className='main_li'>Accessories</li>
                    </ul>

                </div>
    <div className='main_div'>
                 <div className='side'>
                     <div className='side_top'>
                   <p className='for_power'>Power Banks</p>
                   <h4 className='heading_powerbank'>Powerbank 1130 mAh Blue</h4>
                   <div className='imag14_div'>
                       <img src={image14} className='image14' />
                   </div>
                   <div>
                  <p className='for_inline'><span class="dollar14">$210.00</span>
                   <span class="dollar10">$200.00</span></p>
                     </div>
                     </div>


                     <div className='side_top'>
                   <p className='for_power'>Laptops</p>
                   <h4 className='heading_powerbank'>Laptop Screener CX70 2QF- <br /> 621XPL 17.3″ 4210</h4>
                   <div className='imag14_div'>
                       <img src={image15} className='image14' />
                   </div>
                   <div>
                   <span class="dollar40">$2,399.00</span>
                     </div>
                     </div>

                  </div>
                
                <div className='middle_main'>
                <p className='for_power'>Game Consoles</p>
                   <h4 className='heading_powerbank'>Game Console Controller + USB 3.0 Cable</h4>
                   <div className='imag14_div'>
                       <img src={image16} className='image16' />
                   </div>

                   <div className='remote_adv'>
                   <img src={image17} className='image17' />
                   <img src={image18} className='image17_mid' />
                   <img src={image19} className='image17' />
                   </div>
                   <p className='remote_text'><span class="dollar20">$79.00</span>
                   <span class="dollar21">$99.00</span></p>
                </div>
                    
                <div className='side'>
                     <div className='side_top'>
                   <p className='for_power'>Computer Cases, Servers</p>
                   <h4 className='heading_powerbank'>Aerocool EN52377 Dead <br /> Silence Gaming Cube Case</h4>
                   <div className='imag14_div'>
                       <img src={image20} className='image14' />
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
                       <img src={image15} className='image14' />
                   </div>
                   <div>
                   <span class="dollar40">$3,299.00</span>
                     </div>
                     </div>

                  </div>

        </div>


            </div>
            </div>
        </div>
    )
}

export default Main
