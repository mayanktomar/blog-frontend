import React, { Component } from 'react'

export class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    })
  }
  render() {
    return (
      <>
        <Modal isOpen={this.props.isLoginModalOpen} toggle={this.props.toggleLoginModal}>
        <ModalHeader toggle={this.props.toggleLoginModal}>Login Modal</ModalHeader>
        <ModalBody>
          <Form>
          <FormGroup>
            <Label for="exampleEmail">
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="email"
              onChange = {this.onInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">
              Password
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="password"
              onChange = {this.onInputChange}
            />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.toggleLoginModal}>
            Login
          </Button>{' '}
          <Button color="secondary" onClick={this.props.toggleLoginModal}>
            Cancel
          </Button>
        </ModalFooter>
        </Modal>
      </>
    )
  }
}

export default LoginModal