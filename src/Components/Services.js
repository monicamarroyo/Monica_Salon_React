import React, {Component} from 'react';
import femalehairs from '../Resources/female-hairs.png';
import bowl from '../Resources/bowl.png';
import braid from '../Resources/braid.png';
import cream from '../Resources/cream.png';
import barbershop from '../Resources/barbershop.png';
import './Services.scss';

export default class Services extends Component {

    render() { 
     return (
        <div>
         <div className="container-fluid">
          <div className="row">
           <div className="col-12 text-center">
            <h2 className="section-services">Our Services</h2>
            <p>Select service below for full description and pricing</p>
           </div> 
          </div>
        </div>
        <div className="grid-services">
         <div className="img-container">
          <img src= {barbershop}  style={{border: 'none', padding: '10px', filter:'brightness(0) invert(1)'}}alt="Cut"></img>
          <div style={{paddingTop: '24px',paddingLeft: '5px', fontSize: '17px'}}>Cut</div>
         </div>
         
         <div className="img-container">
          <img src= {bowl}  style={{border: 'none', padding: '10px',filter:'brightness(0) invert(1)'}}alt="Color"></img>
          <div style={{paddingTop: '21px',fontSize: '17px', paddingLeft: '5px'}}>Color</div>
         </div>

        <div className="img-container">
         <img src= {cream}  style={{border: 'none', padding: '10px', filter:'brightness(0) invert(1)'}}alt="Cut"></img>
         <div style={{paddingTop: '20px',fontSize: '17px', marginLeft: '-18px'}}>Treatment</div>
        </div>

        <div className="img-container">
         <img src= {braid}  style={{border: 'none', padding: '10px',filter:'brightness(0) invert(1)'}}alt="Cut"></img>
         <div style={{paddingTop: '20px',fontSize: '17px',marginLeft: '-35px', whiteSpace: 'nowrap'}}>Extension Services</div>
        </div>

        <div className="img-container">
         <img src= {femalehairs}  style={{border: 'none', padding: '10px',filter:'brightness(0) invert(1)'}}alt="Cut"></img>
         <div style={{paddingTop: '24px', paddingLeft: '5px', fontSize: '17px',marginLeft:'-20px',whiteSpace: 'nowrap'}}>Hair Styling</div>
        </div>
      </div>
     </div>
     )
    }

}