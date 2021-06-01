import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

import axios from "axios";

class ModalMessage extends Component {
  state = {
   object: '',
   email: '',
    body: ''
  };

 

  componentDidMount = () => {
    
  };
  

  render() {
    return (
      <Modal
        isOpen={this.props.modalUpdateUser}
        toggle={this.props.toggleModalUpdateUser}
      >
        <ModalHeader toggle={this.props.toggleModalUpdateUser}>
          Modifier un utilisateur
        </ModalHeader>
        <ModalBody>
          <FormGroup>
                <Label for="exampleFile"><img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Ff.hellowork.com%2Fblogdumoderateur%2F2019%2F03%2Fgmail-logo.jpg&imgrefurl=https%3A%2F%2Fwww.blogdumoderateur.com%2Fastuces-gmail%2F&tbnid=6NbxOOm81kknGM&vet=12ahUKEwj0rbfp9-PwAhUH0xoKHYKfD1UQMygBegUIARCzAQ..i&docid=s9yAWExfgav_cM&w=1520&h=960&q=gmail&safe=active&ved=2ahUKEwj0rbfp9-PwAhUH0xoKHYKfD1UQMygBegUIARCzAQ"/></Label>
               
              </FormGroup>

          <FormGroup>
            <Label>objet</Label>
            <Input
              value={objet}
              placeholder="entrer votre objet d'email"
              name="objet"
              autoComplete="off"
            />
          </FormGroup>
          <FormGroup>
            <Label>body</Label>
            <Input
              value={body}
              placeholder="entrer votre réponse aux clients"
              name="body"
              autoComplete="off"
            />
          </FormGroup>
         
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={this.handleUpdate}>
            envoyer
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              this.props.toggleModalUpdateUser();
            }}
          >
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default ModalMessage;