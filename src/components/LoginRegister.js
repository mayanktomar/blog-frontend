import React, { Component } from 'react';
import login from '../assets/login.svg';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

export class LoginRegister extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginModalOpen: false,
      isRegisterModalOpen: false
    }
  }

  toggleLoginModal = () => {
    this.setState({
      isLoginModalOpen: !this.state.isLoginModalOpen
    })
  }

  toggleRegisterModal = () => {
    this.setState({
      isRegisterModalOpen: !this.state.isRegisterModalOpen
    })
  }


  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-6' style={{paddingTop:'10%'}}>
            <img src={login} alt="loginImage"/>
          </div>

          <div className='col-6' style={{padding:'10%'}}>
            <h4>A blog website</h4>
            <p>A place to explore through blogs.....</p>

            <Button style={{
              backgroundColor: "#6C63FF",
              width: '75%',
              color: 'white'
            }} onClick={this.toggleLoginModal}>
              Login
            </Button>

            <br/> <br/> <br/>
            <Button style={{
              backgroundColor: "#6C63FF",
              width: '75%',
              color: 'white'
            }} onClick={this.toggleRegisterModal}>
              Register
            </Button>
          </div>
        </div>

        <Modal isOpen={this.state.isLoginModalOpen} toggle={this.toggleLoginModal}>
        <ModalHeader toggle={this.toggleLoginModal}>Login Modal</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggleLoginModal}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={this.toggleLoginModal}>
            Cancel
          </Button>
        </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.isRegisterModalOpen} toggle={this.toggleRegisterModal}>
        <ModalHeader toggle={this.toggleRegisterModal}>Register Modal</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggleRegisterModal}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={this.toggleRegisterModal}>
            toggleRegisterModal
          </Button>
        </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default LoginRegister