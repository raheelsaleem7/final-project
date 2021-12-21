import React from 'react'
import './Cars.css'
import Svg from './Svg'

function Cars() {
    const truck = [
        {
          free:"Free Delivery",
          money:"from $50",
        
        },
        {
            free:"99% Positive",
            money:"Feedbacks"
        },
        {
            free:"365 days",
            money:"from $50"
        },
        {
            free:"Payment",
            money:"Secure System"
        },
        {
            free:"Only Best",
            money:"Brands"
        },
        
    ]
    return (
        <div className='car'>
            <div className='car_container'>
              {
                  truck.map ((Cars) => (
             <div className='car_inner'>
             <div className='car_content'>
              <div className='for_truck'>
               <Svg />
                  </div>  
               <div>     
             <h4 className='car_h'>{Cars.free}</h4>
             <p className='car_p'>{Cars.money}</p>
              </div>
              </div> 
                  </div>
                  ))
           }
          </div>
            
        </div>
    )
}
 

export default Cars
