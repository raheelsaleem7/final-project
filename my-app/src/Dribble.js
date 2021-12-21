import React from 'react';
import './Dribble.css';
import theme from './images/themeforest.png';
import theme2 from './images/themeforest2.png';
import theme3 from './images/themeforest3.png';
import theme4 from './images/themeforest4.png';
import theme5 from './images/themeforest5.png';

function Dribble() {
    return (
        <div className='dribble'>
            <div className='dribble_content'>
              <img src={theme} className='theme' />
              <img src={theme2} className='theme' />
              <img src={theme3} className='theme' />
              <img src={theme4} className='theme' />
              <img src={theme5} className='theme' />
            </div>
            
        </div>
    )
}

export default Dribble
