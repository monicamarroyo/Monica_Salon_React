import React, { Component } from "react";
import { Button } from "reactstrap";
import photo from "../Resources/building.jpg";
import "./Header.scss";

export default class Header extends Component {
  render() {
    return (
      <div className="header container-fluid">
        <div className="row align-items-center">
          <div className="col-md order-2 order-md-1 align-self-center header_img_container">
            <img
              className="header_img img-fluid"
              alt=""
              src={photo}
              style={{
                outline: "8px solid #4ABDAC",
                outlineOffset: "10px",
                borderColor: "#FC4A1A"
              }}
            />
          </div>
          <div className="col-md order-1 order-md-2 align-self-center header_text_container">
            <h3 className="header-text-1">Where bueaty meets design</h3>
            <h1 className="header-text-2">Monica's Hair Salon</h1>
            <Button
              className="header_btn"
              style={{ backgroundColor: "#4ABDAC" }}
            >
              Book Now!
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
