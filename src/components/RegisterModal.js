import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

export default function RegisterModal(props) {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [gender,setGender] = useState('');
  const [interestsInput,setInterestsInput] = useState('');

  const setNameHandler = (e) => setName(e.target.value);
  const setEmailHandler = (e) => setEmail(e.target.value);
  const setPasswordHandler = (e) => setPassword(e.target.value);
  const setGenderHandler = (e) => setGender(e.target.value);
  const setInterestsInputHandler = (e) => setInterestsInput(e.target.value);

  return (
    <>
      <Modal isOpen={props.isRegisterModalOpen} toggle={props.toggleRegisterModal}>
        <ModalHeader toggle={props.toggleRegisterModal}>Register</ModalHeader>
        <ModalBody>
        <Form>
        <FormGroup>
            <Label for="examplePassword">
              Name
            </Label>
            <Input
              id="examplePassword"
              name="name"
              placeholder="password placeholder"
              type="text"
              onChange = {setNameHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="email"
              onChange = {setEmailHandler}
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
              onChange = {setPasswordHandler}
            />
          </FormGroup>
          <FormGroup tag="fieldset">
    <legend>
      Gender
    </legend>
    <FormGroup check>
      <Input
        name=""
        type="radio"
      />
      {' '}
      <Label check>
        Option one is this and that—be sure to include why it‘s great
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
        Option two can be something else and selecting it will deselect option one
      </Label>
    </FormGroup>
    </FormGroup>
    <FormGroup>
            <Label for="examplePassword">
              Interests
            </Label>
            <Input
              id="examplePassword"
              name="interests"
              placeholder="password placeholder"
              type="text"
            />
          </FormGroup>
        </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.toggleRegisterModal}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={props.toggleRegisterModal}>
            toggleRegisterModal
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}