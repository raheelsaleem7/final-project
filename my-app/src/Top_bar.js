import React from 'react';
import './Top_bar.css';

function Top_bar() {
    return (
        <div className="top_bar">
            <div className="top">
            <div className="top_text">
                <span className="top_span">Welcome to Worldwide Electronics Store</span>
            </div>
            
            <div className="top_nav">
            
             <div className="for_nav">
             <svg aria-hidden="true" focusable="false" opacity= ".7" width="10px" height="10px" data-prefix="fas" data-icon="map-marker-alt" class="top_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#333e48" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
             <p className="top_p">Store Locator</p>
             </div>

             <div className="for_nav">
             <svg aria-hidden="true" focusable="false" opacity= ".7" width="10px" height="10px" data-prefix="fas" data-icon="truck" class="top_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#333e48" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path></svg>
            <p className="top_p">Track Your Order</p>
             </div>

             <div className="for_nav">
             <svg aria-hidden="true" focusable="false" opacity= ".7" width="10px" height="10px" data-prefix="fas" data-icon="shopping-bag" class="top_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#333e48" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path></svg>
               <p className="top_p">Shop</p>
               </div>

              <div className="for_nav">
              <svg aria-hidden="true" focusable="false" opacity= ".7"  width="10px" height="10px" data-prefix="far" data-icon="user" class="top_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#333e48" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
              <p className="top_p">My Account</p></div>

              <div className="top_navlast">
              <p className="top_p">Switch to RTL</p>
              </div>

            </div>
            </div>
        </div>
    )
}

export default Top_bar
