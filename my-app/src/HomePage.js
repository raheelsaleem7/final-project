import React,{useState} from 'react'
import Cam from './Cam';
import Center from './Center';
import Dashboard from './Dashboard';
import Dribble from './Dribble';
import Feature from './Feature';
import Main from './Main';
import Price_tag from './Price_tag';
import Seller from './Seller';
import Header2 from './Header2';


function HomePage() {
    return (
        <div>
             <Header2 />
            <Dashboard hide='false' />
       <Cam />
    <Center />
    <Main />
    <Seller />
    <Price_tag />
    <Dribble />
    <Feature />
        </div>
    )
}

export default HomePage
