import React, {Component} from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink, Button} from 'reactstrap';
import './Navigation.scss';


export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      collapsed: true,
      hidden: false
    };
  }
 componentWillMount() {
   window.addEventListener('scroll',this.handleScroll);
 }
 componentWillUnmount() {
   window.removeEventListener('scroll',this.handleScroll);
 }
 handleScroll(e) {
   let lastScrollTop = 0;
   const currentScrollTop = Navbar.scrollTop;
   if(!this.state.hidden && currentScrollTop > lastScrollTop) {
    this.setState({hidden:true});
   } else if(this.state.hidden) {
     this.setState({hidden:false});
   }
   lastScrollTop = currentScrollTop;
 }
 toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  
  render() {
    return (
     <div>
      <Navbar hidden={this.state.hidden} style ={{color:'#000'}} light expand="md" className="fixed-top" >
      <NavbarToggler onClick={this.toggleNavbar} className="mr-2 custom-toggler"/>
       <NavbarBrand href="/" className="mx-auto">Monica's Salon</NavbarBrand>
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
             <NavLink href="/Home/">Home</NavLink>
            </NavItem>
            <NavItem>
             <NavLink href="/Aboutus/">About Us</NavLink>
            </NavItem>
            <NavItem>
             <NavLink href="/Services/">Services</NavLink>
            </NavItem>
            <NavItem>
             <NavLink href="/Contactus/">Contact</NavLink>
            </NavItem>
            </Nav>
            <NavLink>
            <Button
              className="header_btn"
              style={{ backgroundColor: "#4ABDAC" }}
            >Log In
            </Button>
            </NavLink>
            <NavLink href="https://www.linkedin.com/in/monica-arroyo-765b7111a/" target="_blank" className="fa fa-linkedin-square fa-2x" style={{color: '#fff'}}>
           </NavLink>
           <NavLink href="https://github.com/monicamarroyo" target="_blank" className="fa fa-github-square fa-2x">
           </NavLink>
        </Collapse>
      </Navbar>    
     </div>
    );
  }
}



