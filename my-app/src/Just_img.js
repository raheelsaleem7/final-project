import React from 'react'
import './Just_img.css'
import two1 from './images/two1.jpg'
import two2 from './images/two2.jpg'

function Just_img() {
    return (
        <div>
            <div  className='just_img'>
            <img src ={two1} width ="577px" />
            <img src ={two2} width= "577px" />
        </div>
        </div>
    )
}

export default Just_img
