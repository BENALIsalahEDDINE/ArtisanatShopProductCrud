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
  FormText

} from "reactstrap";

import "../../../css/body/AddProduct.css";

import axios from "axios";


class ModalAddVendeur extends Component {
  state = {
    modalNewVendeur: false,
    nom: "",
    prenom: "",
    ville: "",
    region: "",
    img:"",
    nomError: "",
    prenomError: "",
    villeError: "",
    regionError: "",
    selectedFile: null,
    selectedFileBinary: "",
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleNewVendeurModal = () => {
    this.setState(prevState => ({
      modalNewVendeur: !prevState.modalNewVendeur
    }));
  };

  fileSelectedHandler = event => {

    this.getBase64(event.target.files[0]).then(data => {
     this.setState({
      selectedFileBinary : data,
     })
     console.log(this.state.selectedFileBinary);
    });
    this.setState({
      selectedFile: event.target.files[0]

    })
    
  }

  fileUploadHandler = async () => {
    const formData =new FormData();
    formData.append("file",this.state.selectedFile);
    formData.append("upload_preset","lgdqkovn");
    console.log(this.state.selectedFile);
    return axios.post("https://api.cloudinary.com/v1_1/ddowlqedx/image/upload",
    formData);
  };



  handleAddVendeur = e => {

    
    this.clearFormError();
    e.preventDefault();
    const isValid = true ; //this.validate()

   
    if (this.validate) {
      console.log("passed");
      this.fileUploadHandler().then(response => {
        console.log(response.data.img);
        this.setState({
          img: response.data.img,
        });

      const {
        img,
        nom,
        prenom,
        ville,
        region
        
    } = this.state;
    console.log(this.state)
      axios
        .post("http://localhost:8080/Vendeur", {
          img,
          nom,
          prenom,
          ville,
          region
        })
        .then(() => {
        console.log({   img,
          nom,
          prenom,
          ville,
          region});
          console.log("vendeur ajout??");
          this.toggleNewVendeurModal();
          this.props.fetchVendeurs();
        });
      });
     
      
      this.clearFormError();
    }
  };

  clearFormError = () => {
    this.setState({
    nomError: "",
    prenomError: "",
    /*villeError: "",
    regionError: ""*/
    });
  };

   getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  validate = () => {
    let nomError = "";
    let prenomError = "";
    let villeError = "";
    let regionError = "";

    if (!this.state.nom.match(/^[A-Za-z\s]+$/)) {
        nomError = "Votre nom doit contenir  que des lettres.";
    }

    if (!this.state.prenom.match(/^[A-Za-z\s]+$/)) {
        prenomError = "Votre pr??nom doit contenir que des lettres.";
    }

    /*if (!this.state.ville.match(/^[A-Za-z\s]+$/)) {
        villeError = "Votre ville doit contenir que des lettres.";
    }


    if (!this.state.region.match(/^[A-Za-z\s]+$/)) {
        regionError = "Votre region doit contenir que des lettres.";
    }*/

    if (nomError || prenomError) {
      this.setState({ nomError, prenomError});
      return false;
    }
    return true;
  };

  render() {
    
    return (
      <>
        <button className="add" onClick={this.toggleNewVendeurModal}>
          <i className="fas fa-plus"></i> Ajouter un fournisseur
        </button>
        <div>
          <Modal
            isOpen={this.state.modalNewVendeur}
            toggle={this.toggleNewVendeurModal}
          >
            <ModalHeader toggle={this.toggleNewVendeurModal}>
              Ajouter un nouveau vendeur
            </ModalHeader>
            <ModalBody>
            
              <FormGroup>
                <img
                  src={this.state.selectedFile == null? "https://n-allo.be/wp-content/uploads/2016/08/ef3-placeholder-image-450x350.jpg" : this.state.selectedFileBinary+ '' }
                  alt=""
                  style={{
                    width: "120px",
                    height: "120px",
                    display: "block",
                    margin: "auto",
                    marginBottom: "3px",
                    borderRadius: "50%"
                  }}
                />
              </FormGroup>

              <FormGroup>
        <Label for="exampleFile">Image</Label>
        <Input  type="file" name="file" id="exampleFile" accept="image/*" onChange={this.fileSelectedHandler}
        />
        <FormText color="muted">
          Veuillez choisir une image de profil.
        </FormText>
      </FormGroup>
              
              <FormGroup>
                <Label>Nom</Label>
                <Input
                  placeholder="Nom..."
                  name="nom"
                  onChange={this.handleOnChange}
                  autoComplete="off"
                ></Input>
                <p style={{ fontSize: 12, color: "red" }}>
                  {this.state.nomError}
                </p>
              </FormGroup>
              <FormGroup>
                <Label>Pr??nom</Label>
                <Input
                  placeholder="Pr??nom..."
                  name="prenom"
                  autoComplete="off"
                  onChange={this.handleOnChange}
                ></Input>
                <p style={{ fontSize: 12, color: "red" }}>
                  {this.state.prenomError}
                </p>
              </FormGroup>
              <FormGroup>
                <Label>Choisir la r??gion</Label>
                <Input
                    type="select"
                  name="region"
                  onChange={this.handleOnChange}
                >
                    <option disabled>Choisir un r??gion...</option>
                    <option value="Rabat-Sal??-K??nitra"> R??gion Rabat-Sal??-K??nitra</option>
                    <option value="Nord Oriental"> R??gion Nord Oriental</option>
                    <option value="Grand Casablanca-Settat"> R??gion Grand Casablanca-Settat</option>
                    <option value="Souss Grand Sud"> R??gion Souss Grand sud</option>
                    <option value="Marrakech-Beni Mellal-Moyen Atlas"> R??gion Marrakech-Beni Mellal-Moyen Atlas</option>
                    <option value="F??s-Mekn??s-Al wahates"> R??gion F??s-Mekn??s-Al wahates</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Ville</Label>
                <Input
                  placeholder="Ville..."
                  name="ville"
                  onChange={this.handleOnChange}
                ></Input>
              </FormGroup>
              
              
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={this.handleAddVendeur}>
                Ajouter
              </Button>
              <Button
                color="secondary"
                onClick={() => {
                  this.clearFormError();
                  this.toggleNewVendeurModal();
                }}
              >
                Annuler
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </>
    );
  }
}
export default ModalAddVendeur;