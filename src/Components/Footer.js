import React, { Component } from "react";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer
        className="page-footer font-small"
        style={{ backgroundColor: "#1C2331" }}
      >
        <div style={{ backgroundColor: "#37474F" }}>
          <div className="container">
            <div className="row py-4 d-flex align-items-center">
              <div
                className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0"
                style={{ color: "#fff" }}
              >
                <h6 className="mb-0" style={{ fontSize: ".90rem" }}>
                  Get connected with us on social networks!
                </h6>
              </div>

              <div
                className="col-md-6 col-lg-7 text-center text-md-right"
                style={{ color: "#fff" }}
              >
                <a className="gh-ic" href="https://github.com/monicamarroyo"
                    target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github white-text mr-4"> </i>
                </a>

                <a className="li-ic" href="https://www.linkedin.com/in/monica-arroyo-765b7111a/"
                    target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in white-text mr-4"> </i>
                </a>

                <a className="gplus-ic"  href="https://plus.google.com/u/0/102825695436822534554"
                    target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-google-plus-g white-text mr-4"> </i>
                </a>

                <a className="tw-ic"  href="https://twitter.com"
                    target="_blank"rel="noopener noreferrer">
                  <i className="fab fa-twitter white-text mr-4"> </i>
                </a>

                <a className="ins-ic"   href="https://instagram.com"
                    target="_blank"rel="noopener noreferrer">
                  <i className="fab fa-instagram white-text"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container text-center text-md-left mt-5"
          style={{ color: "#fff" }}
        >
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6
                className="text-uppercase font-weight-bold"
                style={{ fontSize: ".90rem" }}
              >
                Monica's Hair Salon
              </h6>
              <hr
                className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", backgroundColor: '#37474F'}}
              />
              <p style={{fontSize: '.75rem'}}>
                Our mission is to provide our clients with results based on our clients needs and the advice of our professional hair stylist. Thank you to all of our clients who continue to support us and in making us one of the leading Hair Salons in the Austin Area.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6
                className="text-uppercase font-weight-bold"
                style={{ fontSize: ".90rem" }}
              >
                Products
              </h6>
              <hr
                className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" , backgroundColor: '#37474F'}}
              />
              <p style={{ fontSize: ".75rem" }}>
                <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap 4</a>
              </p>
              <p style={{ fontSize: ".75rem" }}>
                <a href="https://material-ui.com/" target="_blank"rel="noopener noreferrer">Material-UI</a>
              </p>
              <p style={{ fontSize: ".75rem" }}>
                <a href="https://reactjs.org/" target="_blank"rel="noopener noreferrer">React JS</a>
              </p>
              <p style={{ fontSize: ".75rem" }}>
                <a href="https://yarnpkg.com/en/" target="_blank"rel="noopener noreferrer">Yarn JS</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6
                className="text-uppercase font-weight-bold"
                style={{ fontSize: ".90rem" }}
              >
                Useful links
              </h6>
              <hr
                className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" ,  backgroundColor: '#37474F'}}
              />
              <p style={{ fontSize: ".75rem" }}>
                <a href="#!">About Us</a>
              </p>
              <p style={{ fontSize: ".75rem" }}>
                <a href="#!">Your Account</a>
              </p>
              <p style={{ fontSize: ".75rem" }}>
                <a href="#!">Awards</a>
              </p>
              <p style={{ fontSize: ".75rem" }}>
                <a href="#!">Help</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6
                className="text-uppercase font-weight-bold"
                style={{ fontSize: ".90rem" }}
              >
                Contact
              </h6>
              <hr
                className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" ,  backgroundColor: '#37474F'}}
              />
              <p style={{ fontSize: ".75rem" }}>
                <i className="fas fa-home mr-3" />Austin TX 78744
              </p>
              <p style={{ fontSize: ".75rem" }}>
                <i className="fas fa-envelope mr-3" /> monica.arroyo1319@gmail.com
              </p>
              <p style={{ fontSize: ".75rem" }}>
                <i className="fas fa-phone mr-3" />
                 <a href="tel:1-512-825-2633" >
                    (512) 825-2633
                  </a>
              </p>
            </div>
          </div>
        </div>

        <div
          className="footer-copyright text-center py-3"
          style={{
            fontSize: ".75rem",
            color: "#fff",
            backgroundColor: "#212121" 
          }}
        >
          © 2018 Copyright: Monica Arroyo inspired by 
          <a
            href="https://urbanhair-atx.com" target="_blank"rel="noopener noreferrer"
            style={{ fontSize: ".75rem" }}
          >
            {" "}
            Urban Hair Atx
          </a>
        </div>
      </footer>
    );
  }
}

/*
 <footer
          className="page-footer font-small"
          style={{
            backgroundColor: "#252525",
            fontSize: "medium",
            overflow: "hidden"
          }}
        >
          <div style={{ backgroundColor: "#fff" }}>
            <div className="container">
              <div className="row py-4 d-flex align-items-center">
                <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                  <h6 style={{ fontSize: ".90rem" }} className="mb-0 ">
                    Get connected with us on social networks!
                  </h6>
                </div>

                <div className="col-md-6 col-lg-7 text-center text-md-right">
                  <a
                    className="gh-ic"
                    href="https://www.linkedin.com/in/monica-arroyo-765b7111a/"
                    target="_blank"
                  >
                    <i className="fab fa-github white-text mr-4"> </i>
                  </a>
                  <a
                    className="li-ic"
                    href="https://github.com/monicamarroyo"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in white-text mr-4"> </i>
                  </a>
                  <a
                    className="tw-ic"
                    href="https://twitter.com"
                    target="_blank"
                  >
                    <i className="fab fa-twitter white-text mr-4"> </i>
                  </a>
                  <a
                    className="gplus-ic"
                    href="https://plus.google.com/u/0/102825695436822534554"
                    target="_blank"
                  >
                    <i className="fab fa-google-plus-g white-text mr-4"> </i>
                  </a>
                  <a
                    className="ins-ic"
                    href="https://instagram.com"
                    target="_blank"
                  >
                    <i className="fab fa-instagram white-text mr-4"> </i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
              <h6
                className="text-uppercase font-weight-bold white-text"
                style={{ color: "#fff" }}
              >
                Monica's Hair Salon
              </h6>
              <hr
                className="red accent-2 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", color:'red'}}
              />
              <p style={{ color: "#fff" }}>
                Our mission here at Monica's Hair Salon is to provide excellent
                services to our clients. We make sure our listen to our clients
                needs and provide results based on our stylist and clinets
                vision. Thank to our clients, we are one of the leading Salon's
                of the Greater Austin Area!
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6
                className="text-uppercase font-weight-bold"
                style={{ color: "#fff" }}
              >
                About
              </h6>
              <hr
                className="deep-purple accent-2 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="#!" style={{ color: "#fff" }}>
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" style={{ color: "#fff" }}>
                  Awards
                </a>
              </p>
              <p>
                <a href="#!" style={{ color: "#fff" }}>
                  Your Acount
                </a>
              </p>
              <p>
                <a href="#!" style={{ color: "#fff" }}>
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto">
              <h6
                className="text-uppercase font-weight-bold"
                style={{ color: "#fff" }}
              >
                Contact
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <div style={{ color: "#fff" }}>
                <p className="footer_address">
                  <i className="fas fa-home mr-3" />
                  5710 peppertree Pkwy #B, Austin Tx 78744
                </p>
              </div>
              <div style={{ color: "#fff" }}>
                <p className="footer_email">
                  <i className="fas fa-envelope mr-3" />
                  monica.arroyo1319@gmail.com
                </p>
              </div>
              <div style={{ color: "#fff" }}>
                <p className="footer_phone">
                  <i className="fas fa-phone mr-3" />{" "}
                  <a href="tel:1-512-825-2633" style={{ color: "#fff" }}>
                    (512) 825-2633
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <ul className="list-unstyled list-inline text-center py-2">
              <li className="list-inline-item">
                <h5 className="mb-1" style={{ color: "#fff" }}>
                  Register for free
                </h5>
              </li>
              <li className="list-inline-item">
                <a
                  href="#!"
                  className="btn btn-outline-white btn-rounded"
                  style={{ color: "#fff" }}
                >
                  Sign up!
                </a>
              </li>
            </ul>
          </div>
        </footer>
      

*/

/*
 <div
            className="footer-copyright text-center py-3"
            style={{ color: "#fff" }}
          >
            © 2018 copyright: Monica Arroyo inspired by
            <a href="http://urbanhair-atx.com/"> Urban Hair Atx</a>
          </div>
*/
