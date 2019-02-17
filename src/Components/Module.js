import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup,Label,Input,FormText,Row,Col } from 'reactstrap';
import './Module.css';
class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button style={{backgroundColor:"#76323F"}} onClick={this.toggle}>{this.props.buttonLabel}Book Now!</Button>
        <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
          toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} >Booking Request</ModalHeader>
          <ModalBody>
            <AvForm>
              <Row form>
               <Col md={6}>
                
                  <AvField name="fName" label="First Name" type="text" errorMessage="Invalid name" validate={{
                  required: {value: true},
                  pattern: {value: '^[A-Za-z0-9]+$'},
                  minLength: {value: 2},
                  maxLength: {value: 16}
                  }} />
                
               </Col>
               <Col md={6}>
                
                  <AvField name="lName" label="Last Name" type="text" errorMessage="Invalid name" validate={{
                  required: {value: true},
                  pattern: {value: '^[A-Za-z0-9]+$'},
                  minLength: {value: 2},
                  maxLength: {value: 16}
                  }} />
                 
               </Col>
              </Row>
              <Row>
               <Col md={6}>
                <AvField name="email" label="Email" type="email" />
               </Col>
               <Col md={6}>
                <AvField name="telephone" label="Phone" type="tel"/>
               </Col>
              </Row>
            </AvForm>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Modal2;