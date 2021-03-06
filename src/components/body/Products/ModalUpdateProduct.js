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
} from "reactstrap";

import axios from "axios";

class UpdateProduct extends Component {
  state = {
    nomCat: "",
    idCat: "",
    nom: "",
    description: "",
    source: "",
    unit: "",
    etat: "",
    prix: "",
    qte: "",
    url: "",
  };

  fetchProductById = () => {
    axios.get(`http://localhost:8080/product/${this.props.id}`).then((res) => {
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
      } = res.data;
      this.setState({
        idCat,
        nom,
        description,
        source,
        unit,
        etat,
        prix,
        qte,
        url,
      });
    });
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

  checkCategory = () => {
    const { idCat } = this.state;
    if (idCat === 1) {
      this.setState({ nomCat: "Textile" });
    } else if (idCat === 2) {
      this.setState({ nomCat: "Cuir" });
    } else if (idCat === 3) {
      this.setState({ nomCat: "Tapis" });
    } else if (idCat === 4) {
      this.setState({ nomCat: "Vannerie" });
    }else if (idCat === 5) {
      this.setState({ nomCat: "Broderie" });
    }
  };

  componentDidMount = () => {
    this.fetchProductById();
    this.checkCategory();
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  fetchProductsUpdated = () => {
    this.props.fetchProducts();
    this.checkCategory();
  };

  handleUpdate = async () => {
    await this.chooseCategory(this.state.nomCat);

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
    console.log("test", idCat);
    axios
      .put(`http://localhost:8080/product/${this.props.id}`, {
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
      .then(async () => {
        console.log(" produit modifi?? ", this.props.id);
        this.props.toggleModalUpdateProduct();
        this.fetchProductsUpdated();
      });
  };

  render() {
    const {
      nomCat,
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
    return (
      <Modal
        isOpen={this.props.modalUpdateProduct}
        toggle={this.props.toggleModalUpdateProduct}
      >
        <ModalHeader toggle={this.props.toggleModalUpdateProduct}>
          Modifier Produit
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <img
              src={url}
              alt=""
              style={{
                width: "100px",
                height: "100px",
                display: "block",
                margin: "auto",
                marginBottom: "3px",
                borderRadius: "8px",
              }}
            />
            <Label>Nom de la cat??gorie</Label>
            <Input
              type="select"
              name="nomCat"
              onChange={this.handleOnChange}
              value={nomCat}
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
              value={nom}
            />
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <Input
              placeholder="Description..."
              name="description"
              onChange={this.handleOnChange}
              value={description}
            />
          </FormGroup>
          <FormGroup>
            <Label>Provenance et source</Label>
            <Input
              placeholder="Source..."
              name="source"
              onChange={this.handleOnChange}
              value={source}
            />
          </FormGroup>
          <FormGroup>
            <Label>Unit??</Label>
            <Input
              placeholder="Unit??..."
              name="unit"
              onChange={this.handleOnChange}
              value={unit}
            />
          </FormGroup>
          <FormGroup>
            <Label>Etat</Label>
            <Input
              type="select"
              name="etat"
              onChange={this.handleOnChange}
              value={etat}
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
              value={prix}
            />
          </FormGroup>
          <FormGroup>
            <Label>Quantit??</Label>
            <Input
              placeholder="Quantit??..."
              name="qte"
              onChange={this.handleOnChange}
              value={qte}
            />
          </FormGroup>
          <FormGroup>
            <Label>L'url de l'image</Label>
            <Input
              placeholder="Url..."
              name="url"
              onChange={this.handleOnChange}
              value={url}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleUpdate}>
            Modifier
          </Button>
          <Button
            color="secondary"
            onClick={this.props.toggleModalUpdateProduct}
          >
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default UpdateProduct;
