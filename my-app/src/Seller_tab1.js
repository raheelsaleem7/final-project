import React from 'react'


function Seller_tab1({pic,pic2,pic3,pic4,pic5,pic6,title,title2,title3,title4,title5,title6,des1,des2,des3,des4,des5,des6}) {
    return (
        <div className='seller_main'>
            
        <div className='seller_content'>
            <div className='image16_div'>
            <img src={pic} className='image16_21' />
            </div>
            <div>
            <p className='for_power'>{title}</p>
               <h4 className='heading_powerbank'>{des1}</h4>
           <div>
           <p className='remote_text2'><span class="dollar20">$79.00</span>
               <span class="dollar21">$99.00</span></p>
           </div>
            </div>
        </div>
     

        <div className='seller_content'>
        <div>
       <img src={pic2} className='image16_2'/>
    </div>
    <div className='for_line'>
        <span className='audio'>{title2}</span>
        <a href="https://electro.madrasthemes.com/product/wireless-audio-system-multiroom-360/" class="woocommerce-LoopProduct-link">
        <h2 class="woocommerce-loop-product__title">{des2}</h2></a>
           
           <div className='padding99'>
           <p className='dollar99'>$2,299.00</p>
            </div>
            </div>
            </div>




            <div className='seller_content'>
            <div className='for_picture'>
       <img src={pic3} className='image16_2'/>
       </div>
       <div className='for_line'>
        <span className='audio'>{title3}</span>
        <a href="https://electro.madrasthemes.com/product/wireless-audio-system-multiroom-360/" class="woocommerce-LoopProduct-link">
        <h2 class="woocommerce-loop-product__title">{des3}</h2></a>
            
           <div className='padding99'>
           <p className='dollar10'>$2,100.00 <span className='dollar11'>$2,290.00</span></p>
           </div>
            </div>
            </div>



            <div className='seller_content'>
            <div className='for_picture'>
            <img src={pic4} className='image16_2'/>
       </div>
       <div className='for_margin'>
        <span className='audio'>{title4}</span>
        <a href="https://electro.madrasthemes.com/product/wireless-audio-system-multiroom-360/" class="woocommerce-LoopProduct-link">
        <h2 class="woocommerce-loop-product__title">{des4}</h2></a>
           <div className='padding99'>
           <p className='dollar99'>$248.99</p>
           </div>

            </div>
        </div>

        <div className='seller_content'>
            <div className='for_picture'>
            <img src={pic5} className='image16_2'/>
       </div>
       <div className='for_margin2'>
        <span className='audio'>{title5}</span>
        <a href="https://electro.madrasthemes.com/product/wireless-audio-system-multiroom-360/" class="woocommerce-LoopProduct-link">
        <h2 class="woocommerce-loop-product__title">{des5}</h2></a>
           <div className='padding99'>
           <p className='dollar99'>$350.00</p>
           </div>

            </div>
        </div>




        <div className='seller_content'>
            <div>
            <img src={pic6} className='image16_2'/>
       </div>
       <div>
        <span className='audio'>{title6}s</span>
        <a href="https://electro.madrasthemes.com/product/wireless-audio-system-multiroom-360/" class="woocommerce-LoopProduct-link">
        <h2 class="woocommerce-loop-product__title">{des6}</h2></a>
           <div className='padding99'>
           <p className='dollar99'>$1,300.00</p>
           </div>

            </div>
        </div>
     

      </div>
    )
}

export default Seller_tab1
