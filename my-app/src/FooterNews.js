import React from 'react'
import './FooterNews.css'

function FooterNews() {
    return (
        <div className='footer_news'>
            <div className='news_container'>
            <div className='new_content'>
             <div>
             <svg aria-hidden="true" focusable="false" width="15px" data-prefix="fas" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
             </div>
              <h5 className='news_sign'>Sign up to Newsletter</h5>
              <span className='news_span'>...and receive <span className='news_n'>$20 coupon for first shopping </span></span>

            </div>

            <div className='new_end'>
            <input type="email" placeholder='Enter your email address' className='email' />
            <button type ="submit" className='submit_btn'>SignUp</button>
            </div>
            </div>
        </div>
    )
}

export default FooterNews
