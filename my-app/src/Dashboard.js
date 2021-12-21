import React , {useState} from 'react';
import './Dashboard.css';
import D_tab1 from './D_tab1';
import D_tab2 from './D_tab2';
import D_tab3 from './D_tab3';

function Dashboard( hide) {
  const [toggleState, setToggleState] = useState (1);
    
  const toggleStep = (index) => {
      setToggleState(index);
  }
  function getData () {
  alert ("")
}


    return (
        <div className= "dashboard">
          <div className='dashboard_container'>
           { hide &&
            <div class="sidebar">
  <div className="strong">

  <a href="https://electro.madrasthemes.com/home-v2/" className="a_tag" >
      <h4 className="tex">Value of the Day</h4>
      </a>

      <a title="Top 100 Offers" href="https://electro.madrasthemes.com/home-v3/" className="a_tag">
        <h4 className="tex">  Top 100 Offers</h4>
        </a>
        <a title="New Arrivals" href="https://electro.madrasthemes.com/home-v3-full-color-background/" className="a_tag">
          <h4 className="tex">  New Arrivals</h4></a>
  </div>


  <div className="for_dropdown">
      <div>
  <div class="dropdown">
  <button class="dropbtn">Computers & Accesssories</button>
  
  <svg aria-hidden="true" focusable="false"  width="8px" data-prefix="fas" data-icon="chevron-right" class="arrow2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#333e48" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
  
  <div class="dropdown-content">
    <div className="drop_inner">
      <div className="inner_content">
          <div className="drop-content">
  <h4 class="nav-title">Computers & Accessories</h4>
<a href="#">All Computers & Accessories</a>
<a href="#">Laptops, Desktops & Monitors</a>
<a href="#">Printers & Ink</a>
<a href="#">Networking & Internet Devices</a>
<a href="#">Computer Accessories</a>
<a href="#">Software</a>
  </div>
  <h4>All Electronics</h4>
<a>Discover more products</a>
  </div>
<div>
<h4>Office & Stationery</h4>
<a>All Office & Stationery</a>

</div>




</div>

  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">Cameras,Audio & Video</button>
   
  <svg aria-hidden="true" focusable="false"  width="8px" data-prefix="fas" data-icon="chevron-right" class="arrow3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#333e48" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
  
  <div class="dropdown-content2">
    <div className="drop_content2">
      <div className="drop_inner2">
  <h4 class="nav-title"><a href="#">Cameras &amp; Photography</a></h4>
<a href="#">Lenses</a>
<a href="#">Camera Accessories</a>
<a href="#">Security &amp; Surveillance</a>
<a href="#">Binoculars &amp; Telescopes</a>
<a href="#">Camcorders</a>
  
  <div>
  <h4>All Electronics</h4>
<a>Discover more products</a>
  </div>
</div>
  <div>
<h4>Office & Stationery</h4>
<a>All Office & Stationery</a>

</div>
</div>
</div>
</div>



<div class="dropdown">
  <button class="dropbtn">Mobiles & Tablets</button>
   
  <svg aria-hidden="true" focusable="false"  width="8px" data-prefix="fas" data-icon="chevron-right" class="arrow4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#333e48" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
  
  <div class="dropdown-content3">
  <div className="drop_inner3">
      <div className="inner_content">
          <div className="drop-content3">
  <h4 class="nav-title">Mobiles & Tablets</h4>
<a href="#">All Mobile Phones</a>
<a href="#">Smartphones</a>
<a href="#">Refurbished Mobiles</a>
<a href="#">All Mobile Accessories</a>
<a href="#">Cases & Covers</a>

  </div>
  <h4>All Electronics</h4>
<a>Discover more products</a>
  </div>
<div>
<a>All Tablets</a>
<a>Tablet Accesssories</a>

</div>




</div>

  </div>
</div>
<div class="dropdown">
  <button class="dropbtn">Movies,Music & Video Games</button>
   
  <svg aria-hidden="true" focusable="false"  width="8px" data-prefix="fas" data-icon="chevron-right" class="arrow5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#333e48" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
  
  <div class="dropdown-content4">
  <div className="drop_inner4">
      <div className="inner_content">
          <div className="drop-content3">
  <h4 class="nav-title">Movies &amp; TV Shows</h4>
<a href="#">All Movies &amp; TV Shows</a>
<a href="#">All English</a>
<a href="#">All Hindi</a>
<h4 class="nav-title">Video Games</h4>
<a href="#">PC Games</a>
<a href="#">Consoles</a>
<a href="#">Accessories</a>

  </div>

  </div>
<div>
<h4 class="nav-title">Music</h4>
<a href="#">All Music</a>
<a href="#">Indian Classical</a>
<a href="#">Musical Instruments</a>

</div>




</div>
  </div>
</div>
<div class="dropdown">
  <button class="dropbtn">TV & Audio</button>
   
  <svg aria-hidden="true" focusable="false"  width="8px" data-prefix="fas" data-icon="chevron-right" class="arrow6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#333e48" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
  
  <div class="dropdown-content5">
  <div className="drop_inner5">
      <div className="inner_content">
          <div className="drop-content3">
  <h4 class="nav-title">TV &#038; Audio</h4>
<a href="#">Audio &amp; Video</a>
<a href="#">All Audio &amp; Video</a>
<a href="#">Televisions</a>

  </div>
  <p>All Electronics</p>
<a>Discover more products</a>
  </div>
<div>
<h4 class="nav-title">Music</h4>
<a href="#">Television</a>
<a href="#">Headphones</a>

</div>
</div>


  </div>
</div>
<div class="dropdown">
  <button class="dropbtn">Watches & Eyewear</button>
   
  <svg aria-hidden="true" focusable="false"  width="8px" data-prefix="fas" data-icon="chevron-right" class="arrow7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#333e48" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
  
  <div class="dropdown-content6">
  <div className="drop_inner6">
      <div className="inner_content">
          <div className="drop-content3">
  <h4 class="nav-title">Watches</h4>
<a href="#">All Watches</a>
<a href="#">Men's Watches</a>
<a href="#">Women's Watches</a>
<a href="#">Premium Watches</a>
<a href="#">Deals on Watches</a>
  </div>
  </div>
<div>
<h4 class="nav-title">Eyewear</h4>
<a href="#">Men's Sunglasses</a>

</div>
</div>

  </div>
</div>
<div class="dropdown">
  <button class="dropbtn">Car,Moterbike & Industries</button>
   
  <svg aria-hidden="true" focusable="false"  width="8px" data-prefix="fas" data-icon="chevron-right" class="arrow8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#333e48" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
  
  <div class="dropdown-content7">
  <div className="drop_inner7">
      <div className="inner_content">
          <div className="drop-content3">
          <h4 class="nav-title">Car &amp; Motorbike</h4>
<a href="#">All Cars &amp; Bikes</a>
<a href="#">Car &amp; Bike Care</a>
<a href="#">Lubricants</a>

<h4 class="nav-title">Shop for Bike</h4>
<a href="#">Helmets &amp; Gloves</a>
<a href="#">Bike Parts</a>
  </div>
 
  </div>
<div>
<h4 class="nav-title">Industrial Supplies</h4>
<a href="#">Industrial Supplies</a>
<a href="#">Lab & Scientific</a>

</div>
</div>

  </div>
</div>
<div class="dropdown">
  <button class="dropbtn">Accesssories</button>
   
  <svg aria-hidden="true" focusable="false"  width="8px" data-prefix="fas" data-icon="chevron-right" class="arrow9" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#333e48" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
  
  <div class="dropdown-content8">
  <div className="inner_content">
          <div className="drop-content3">
          <a title="Cases" href="#">Cases</a>
          <a title="Chargers" href="#">Chargers</a>
          <a title="Headphone Accessories" href="#">Headphone Accessories</a>
          <a title="Headphone Cases" href="#">Headphone Cases</a>
          <a title="Headphone Cases" href="#">Headphone Cases</a>
          <a title="Computer Accessories" href="#">Computer Accessories</a>
          <a title="Laptop Accessories" href="#">Laptop Accessories</a>
  </div>
 
  </div>
  </div>
</div>
  </div>


  </div>
  </div>
  }
  <div  className={toggleState === 1 ? "active-steps" : "not-active"} >
<D_tab1 data={ getData} />
</div>

<div className={toggleState === 2 ? "active-steps" : "not-active"} >
<D_tab2 data={ getData} />
</div>

<div className={toggleState === 3 ? "active-steps" : "not-active"} >
<D_tab3 data={ getData} />
</div>
      
</div>       
<div className='dot_btn'>
        <div className='dot'>
         <button className={toggleState === 1 ? "active-tab" : "not-active-tab" }
               onClick= {() => toggleStep(1) }></button>        
        </div>
        <div className='dot'>
        <button className={toggleState === 2 ? "active-tab" : "not-active-tab" }
               onClick= {() => toggleStep(2) }></button>
        </div>
        <div className='dot'>
      <button className={toggleState === 3 ? "active-tab" : "not-active-tab" }
               onClick= {() => toggleStep(3) }></button> 
      </div>
    
      </div>
</div>
    )
}

export default Dashboard
