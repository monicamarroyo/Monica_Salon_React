import React, { Component } from "react";
import { Button } from "reactstrap";
import "./Locations.scss";

export default class Locations extends Component {
  render() {
    return (
      <div>
        <div className="section_location">
          <div className="section_location--text">
            <h3 style={{ textShadow: "1px 3px 2px rgba(28,110,164,0)" }}>
              Register and Create Account
            </h3>
            <p>
              Join our rewards program and recive special discounts towards earning a free Haircut.
            </p>
            <Button style={{ color: "#fff" }}>
              Sign Up
            </Button>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon
              className="svg--sm"
              fill="white"
              points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"
            />
            <polygon
              className="svg--lg"
              fill="white"
              points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100"
            />
          </svg>
        </div>
        <div>
          <h2 className="location-text-1"style={{textAlign:'center', marginTop:'20px', color:'#484848'}}>Get In Touch</h2>
          <p
            style={{
              color: "#777",
              textAlign: "center",
              paddingLeft: "11%",
              paddingRight: "11%"
            }}
          >
            Located in the hottest area of 78744, the new Monica Hair is here to
            create an authentic and delightful experience for its Austin
            Clientele.
          </p>
          <div className="row">
            <div className="col-md-6 col-sm-6 loc_address-section" style={{paddingLeft:'8%',paddingTop:'2%'}}>
              <h5 className="loc_address-text-2" style={{color: '#00c5b1'}}>Location</h5>
              <div className="loc_address">5710 Peppertree Pkwy #B</div>
              <div className="loc_address">Austin, Texas 78744</div>
              <div className="loc_address">512-825-2633</div>
              <div className="loc_address">
                Email: monica.arroyo1319@gmail.com
              </div>
            </div>

            <div className="col-md-6 col-sm-6 loc_table" style={{paddingTop:'2%'}}>
              <h5 className="loc_table_heading"style={{color:'#00c5b1'}}>Hours</h5>
              <table className="table table-sm">
                <tbody>
                  <tr>
                    <th scope="row" >Monday:</th>
                    <td >Closed</td>
                  </tr>
                  <tr>
                    <th scope="row">Tuesday:</th>
                    <td>10 am to 6 pm</td>
                  </tr>
                  <tr>
                    <th scope="row">Wedneday:</th>
                    <td>10 am to 6 pm</td>
                  </tr>
                  <tr>
                    <th scope="row">Thursday:</th>
                    <td>10 am to 6 pm</td>
                  </tr>
                  <tr>
                    <th scope="row">Friday:</th>
                    <td>9 am to 7 pm</td>
                  </tr>
                  <tr>
                    <th scope="row">Saturday:</th>
                    <td>9 am to 7 pm</td>
                  </tr>
                  <tr>
                    <th scope="row">Sunday:</th>
                    <td>Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*
className="location-text-1" style={{ color: "#00c5b1", textAlign: 'center',textShadow: '1px 3px 2px rgba(28,110,164,0)'}}
<p style={{color: "#000", textAlign: 'center'}}>
              Located in the hottest area of 78744, the new Monica Hair is here
              to create an authentic and delightful experience for its Austin
              Clientele.
            </p>
<div>
        <div className="grid-container-location locations-sides">
          <div className="location-item"></div>
          <div className="location-item">
           
          </div>
        </div>
      </div>
*/
