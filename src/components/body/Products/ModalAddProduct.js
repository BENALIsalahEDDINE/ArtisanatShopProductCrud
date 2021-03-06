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

import "../../../css/body/AddProduct.css";

class ModalAddProduct extends Component {
  state = {
    modalNewProduct: false,
    nomCat: "",
    idCat: "",
    nom: "",
    description: "",
    source: "",
    unit: "",
    etat: "",
    prix: "",
    qte: "",
    url:
      "https://n-allo.be/wp-content/uploads/2016/08/ef3-placeholder-image-450x350.jpg",
    nomError: "",
    descError: "",
    srcError: "",
    unitError: "",
    prixError: "",
    qteError: "",
    selectedFile: null,
    selectedFileBinary: "",
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleNewProductModal = () => {
    this.setState((prevState) => ({
      modalNewProduct: !prevState.modalNewProduct,
    }));
  };

  fileSelectedHandler = (event) => {
    this.getBase64(event.target.files[0]).then((data) => {
      this.setState({
        selectedFileBinary: data,
      });
      console.log(this.state.selectedFileBinary);
    });
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  fileUploadHandler = async () => {
    const formData =new FormData();
    formData.append("file",this.state.selectedFile);
    formData.append("upload_preset","lgdqkovn");
    console.log(this.state.selectedFile);
    return axios.post("https://api.cloudinary.com/v1_1/ddowlqedx/image/upload",
    formData);
  };

  handleAddProduct = (e) => {
    this.chooseCategory(this.state.nomCat);

    e.preventDefault();
    const isValid = this.validate();
     
    if (isValid) {
      this.fileUploadHandler().then((result) => {
        console.log(result.data.url);
        this.setState({
          url: result.data.url,
        });


        const {
          idCat,
          nom,
          description,
          source,
          unit,
          etat,
          prix,
          qte,
          url,
        } = this.state;
        console.log(this.state)
        axios
          .post(`http://localhost:8080/product`, {
            idCat,
            nom,
            description,
            source,
            unit,
            etat,
            prix,
            qte,
            url,
          })
          .then(() => {
            console.log("produit ajout??");
            this.toggleNewProductModal();
            this.props.fetchProducts();
          });
      });

      this.clearFormError();
    }
  };

  clearFormError = () => {
    this.setState({
      nomError: "",
      descError: "",
      srcError: "",
      unitError: "",
      prixError: "",
      qteError: "",
    });
  };

  validate = () => {
    let nomError = "";
    let descError = "";
    // let srcError = "";
    let unitError = "";
    let prixError = "";
    let qteError = "";

    if (!this.state.nom.match(/^[A-Za-z\s]+$/)) {
      nomError = "Le nom doit contenir des lettres";
    }

    if (!this.state.description) {
      descError = "La description du produit est obligatoire";
    }
    // if (!this.state.srcError) {
    //   srcError = "Le nom du produit est obligatoire";
    // }

    if (!this.state.unit) {
      unitError = "L'unit?? du produit est obligatoire";
    }

    if (!this.state.prix.match(/\d/)) {
      prixError = "Veuillez entrer un nombre dans le prix";
    }
    if (!this.state.qte.match(/^[0-9]+$/)) {
      qteError = "Veuillez entrer un nombre dans la quantit??";
    }

    if (nomError || descError || prixError || qteError) {
      this.setState({ nomError, descError, unitError, prixError, qteError });
      return false;
    }
    return true;
  };
 
  chooseCategory = (name) => {
    if (name === "Textile") {
      this.setState({ idCat: 1 });
    } else if (name === "Cuir") {
      this.setState({ idCat: 2 });
    } else if (name === "Tapis") {
      this.setState({ idCat: 3 });
    } else if (name === "Vannerie") {
      this.setState({ idCat: 4 });
    }else if (name === "Broderie") {
      this.setState({ idCat: 5 });
    }
  };

  render() {
    return (
      <>
        <button className="add" onClick={this.toggleNewProductModal}>
          <i className="fas fa-plus" /> Ajouter un produit
        </button>
        <div>
          <Modal
            isOpen={this.state.modalNewProduct}
            toggle={this.toggleNewProductModal}
          >
            <ModalHeader toggle={this.toggleNewProductModal}>
              Ajouter un nouveau Produit
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <img
                  src={
                    this.state.selectedFile == null
                      ? "https://n-allo.be/wp-content/uploads/2016/08/ef3-placeholder-image-450x350.jpg"
                      : this.state.selectedFileBinary
                  }
                  alt=""
                  style={{
                    width: "100px",
                    height: "100px",
                    display: "block",
                    margin: "auto",
                    objectFit: "cover",
                    marginBottom: "3px",
                    borderRadius: "8px",
                  }}
                />
                <FormGroup>
                  <Label for="exampleFile">Image</Label>
                  <Input
                    type="file"
                    name="file"
                    id="exampleFile"
                    accept="image/*"
                    onChange={this.fileSelectedHandler}
                  />
                  <FormText color="muted">
                    Veuillez choisir une image de produit.
                  </FormText>
                </FormGroup>
                <Label>Nom de la cat??gorie</Label>
                <Input
                  type="select"
                  name="nomCat"
                  onChange={this.handleOnChange}
                  defaultValue="Choisir une cat??gorie..."
                >
                  <option disabled>Choisir une cat??gorie...</option>
                  <option>Textile</option>
              <option>Cuir</option>
              <option>Tapis</option>
              <option>Vannerie</option>
              <option>Broderie</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Nom</Label>
                <Input
                  placeholder="Nom..."
                  name="nom"
                  onChange={this.handleOnChange}
                  autoComplete="off"
                />
                <p style={{ fontSize: 12, color: "red" }}>
                  {this.state.nomError}
                </p>
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input
                  placeholder="Description..."
                  name="description"
                  onChange={this.handleOnChange}
                />
                <p style={{ fontSize: 12, color: "red" }}>
                  {this.state.descError}
                </p>
              </FormGroup>
              <FormGroup>
                <Label>Provenance et source</Label>
                <Input
                  placeholder="Source..."
                  name="source"
                  onChange={this.handleOnChange}
                />
                <p style={{ fontSize: 12, color: "red" }}>
                  {this.state.srcError}
                </p>
              </FormGroup>
              <FormGroup>
                <Label>Unit??</Label>
                <Input
                  placeholder="Unit??..."
                  name="unit"
                  onChange={this.handleOnChange}
                />
                <p style={{ fontSize: 12, color: "red" }}>
                  {this.state.unitError}
                </p>
              </FormGroup>
              <FormGroup>
                <Label>Etat</Label>
                <Input
                  type="select"
                  name="etat"
                  onChange={this.handleOnChange}
                  defaultValue="Choisir un ??tat..."
                >
                  <option disabled>Choisir un ??tat...</option>
                  <option>Vente</option>
                  <option>Rupture de stock</option>
                  <option>Approvisionnement</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Prix en DH</Label>
                <Input
                  placeholder="Prix..."
                  name="prix"
                  onChange={this.handleOnChange}
                />
                <p style={{ fontSize: 12, color: "red" }}>
                  {this.state.prixError}
                </p>
              </FormGroup>
              <FormGroup>
                <Label>Quantit??</Label>
                <Input
                  placeholder="Quantit??..."
                  name="qte"
                  onChange={this.handleOnChange}
                />
                <p style={{ fontSize: 12, color: "red" }}>
                  {this.state.qteError}
                </p>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={this.handleAddProduct}>
                Ajouter
              </Button>
              <Button
                color="secondary"
                onClick={() => {
                  this.toggleNewProductModal();
                  this.clearFormError();
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
export default ModalAddProduct;
