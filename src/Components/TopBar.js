import React, {Fragment} from 'react';
import phone from '../Resources/phone.svg'
import envelope from '../Resources/envelope.svg';   
import facebook2 from '../Resources/facebook2.svg';
import instagram from '../Resources/instagram.svg';
import './TopBar.css';

const Topbar = () => (

<div class="topbar first-template">
 <div class="topbar-contact">
  
  <span class="topbar-phone">
   <img src={phone} alt="phone"/>
    <a href="tel:(512) 825-2633">(512)825-2633</a>
  </span>
   
  <span class = "topbar-email">
    <img src={envelope} alt="email" />
     <a href="mailto:monica.arroyo1319@gmail.com">monica.arroyo1319@gmail.com</a>
  </span>

 </div>
 <div class="topbar-socials">
    <a href="" target="_blank">
     <img src={facebook2}></img>
    </a>
    <a href="" target="_blank">
     <img src={instagram}></img>
    </a>
 </div>
</div>

);

export default Topbar;