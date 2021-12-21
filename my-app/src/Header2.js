import React from 'react';
import './Header2.css'
import { Link } from 'react-router-dom';
function Header2() {
    return (
        <div className='headder2'>
             <div className="header2">
       <div className="header_content2">
     <svg aria-hidden="true" focusable="false" width="10px"  data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
     <p className="title">All Departments</p>
     </div>

     <div className="for_list">
        
        <ul className="ul"> 
       <li className="li">     
     <a title="All Pages" href="https://electro.madrasthemes.com/home-v2/" class="dropdown-toggle1" aria-haspopup="true" data-hover="dropdown">All Pages</a>
     <svg aria-hidden="true" focusable="false" width="10px"  data-prefix="fas"     margin-left="7px" data-icon="chevron-down" class="svg-inline" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#df3737" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
     </li>
     <li className="li">
     <Link to="/about" title="Featured Brands"  class="dropdown-toggle" href="https://electro.madrasthemes.com/home-v3/">Featured Brands</Link>
     </li>
     <li className="li">
     <a title="Trending Styles"  class="dropdown-toggle" href="https://electro.madrasthemes.com/home-v3-full-color-background/">Trending Styles</a>
    </li>
    <li className="li">
     <a title="Gift Cards"  class="dropdown-toggle" href="https://electro.madrasthemes.com/blog-v1/">Gift Cards</a>
    </li>
   
    </ul>
    </div>
    <div className="header_last">
    
    <a title="Free Shipping on Orders $50+" class="dropdown-toggle" href="https://electro.madrasthemes.com/blog-v2/">Free Shipping on Orders $50+</a>
</div>
    
     </div>
        </div>
    )
}

export default Header2
 