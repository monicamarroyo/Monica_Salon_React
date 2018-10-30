import React, {Component} from 'react';
//import logo from '../Resources/logo.svg';
import {
  Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Button,Modal,ModalHeader,ModalBody,ModalFooter, Container,Col,Row
} from 'reactstrap';

export default class Header extends Component {
  constructor(props) {
    super(props);
    
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleMod=this.toggleMod.bind(this);
    this.state = {
      isOpen: false,
      module: false
    };
  }
  toggleNav() {
    this.setState({
      isOpen: !this.state.isOpen
      
    });
  }
  toggleMod() {
    this.setState({
      modal: !this.state.modal
    });
  }
  

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Clean Body</NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Aboutus">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href = "/Services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href = "/Contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                
              <Button color="danger" onClick={this.toggleMod}>Booking{this.props.buttonLabel}</Button>
              
        <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
          toggle={this.toggleMod} className={this.props.className}>
          <Container>
          <Row>
          <Col>
           <h3 style={{fontFamily:"Georgia", padding: "12.5px", borderBottom: "1px solid #000"}} >Booking Request</h3>
           <p>Thank you for choosing Clean Body, please fill out the form and one of our specialist would contact you shorty for a confimation.</p>
          </Col>
          <Col style={{background:"#8D8741"}}>
          <ModalHeader toggle={this.toggleMod}>Booking</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleMod}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggleMod}>Cancel</Button>
          </ModalFooter>
          
          </Col>  
          </Row>
          </Container>      
          
        </Modal>
             
        </NavItem>
              
              
              
             
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

}



/*import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
*/

//const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';

/*const Header = () => (
  <header>
    <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>
    
      <Container>
        <Row noGutters className="position-relative w-100 align-items-center">
        
          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>
            
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">
                  <img src={AVATAR} alt="avatar" className="img-fluid rounded-circle" style={{ width: 36 }} />
                </NavLink>
              </NavItem>
              
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Home</NavLink>
              </NavItem>
              
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Events</NavLink>
              </NavItem>
              
              <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
                <DropdownToggle className="font-weight-bold" nav caret>Learn</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="font-weight-bold text-secondary text-uppercase" header disabled>Learn React</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Documentation</DropdownItem>
                  <DropdownItem>Tutorials</DropdownItem>
                  <DropdownItem>Courses</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              
            </Nav>
          </Col>
          
          <Col className="d-flex justify-content-xs-start justify-content-lg-center">
            <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }}>
              <img src={logo} alt="logo" className="position-relative img-fluid" />
            </NavbarBrand>
          </Col>
          
          <Col className="d-none d-lg-flex justify-content-end">
            <Form inline>
              <Input type="search" className="mr-3" placeholder="Search React Courses" />
              <Button type="submit" color="info" outline>Search</Button>
            </Form>
          </Col>
          
        </Row>
      </Container>
      
    </Navbar>
  </header>
);

export default Header;

*/