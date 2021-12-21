import React from 'react'
import Dashboard from './Dashboard';
import Header3 from './Header3'; 
import Cam from './Cam';
import Cars from './Cars';
import Second_top from './Second_top';
import Back from './Back';
import Seller from './Seller';
import Price_tag from './Price_tag';
import BestSeller from './BestSeller';
import Just_img from './Just_img';
import Dribble from './Dribble';
import Feature from './Feature';

function About() {
    return (
        <div>
        <Header3 />
         <Dashboard hide='true' />
        <Cam />
        <Cars />
        <Second_top />
        <Back />
        <Seller />
        <Price_tag />
        <BestSeller />
        <Just_img />
        <Dribble />
        <Feature />
        </div>
    )
}

export default About
