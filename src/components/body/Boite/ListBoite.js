import React, { Component } from "react";
import axios from "axios";
import DataTable from 'react-data-table-component';
class ListBoite extends Component {
    state = {
        boits: [],
        email: '',
        body: '',
        subjet: ''
    };
    constructor(props) {
        super(props);
        this.state = {email: '', body: '', subjet: ''};
        this.sendEmail = this.sendEmail.bind(this);
      }
    fetchUsers = async () => {
        return axios.get(`http://localhost:8080/boit/`).then((res) => {
            const boits = res.data;
            console.log(boits);
            this.setState({ boits });
        });
    };

    componentDidMount = () => {
        this.fetchUsers();
    };

   
    sendEmail(email){
        console.log(this.state);
        axios.post('http://localhost:8080/boit/send',this.state, {
            headers: {
              'Content-Type': 'application/json'
            }
            })
            .then(res => {
              console.log(res);
              alert('votre message a été envoyé');
            })
            .catch(error => console.error(error))
        
    };
    handleRowClick = (e) => {
        console.log(e.email);
        const email = e.email;
        this.setState({email})
        
    };
  

    render() {
        const columns = [
            {
                name: "nom",
                selector: "nom",
                sortable: true
            },
            {
                name: "email",
                selector: "email",
                sortable: true
            },
            {
                name: "body",
                selector: "body",
                sortable: false
            },
            {
                name: "etat",
                selector: "state",
                sortable: true,
                cell: row =>  <p>{row.etat ? "repondu" : "Non repondu"}</p>,
            },
            {
                name: "date d'envoie",
                selector: "date",
                sortable: true
            }
        ];
        let head = '';
        if(this.state.email != '') {
            head = <h5>mail a : {this.state.email}</h5>
        }
        return (

            <>
              <div>
              <div class="form-group">
                  {head}
                  <label>
                    subject<span>*</span>
                  </label>
                  <input class="form-control" name="nom" value={this.state.subjet} type="text" onChange={e => {
                      const subjet = e.target.value;
                      this.setState({subjet})
                  }}/>
                </div>
                <div class="form-group">
                  <label>
                    Votre message<span>*</span>
                  </label>
                  <textarea class="form-control" value={this.state.body} rows="4" onChange={e => {
                      const body = e.target.value;
                      this.setState({body})
                  }}></textarea>
                </div>
                <div class="form-group text-center">
                  <button class="ps-btn" onClick={this.sendEmail} disabled={this.state.email === ''}>
                    Envoyer message<i class="fa fa-angle-right"></i>
                  </button>
                </div>
               </div> 
                <div
                    style={{
                        margin: "50px",
                    }}
                >
                    <DataTable
                        title="Boite des message"
                        columns={columns}
                        noDataComponent="pas un message"
                        data={this.state.boits}
                        onRowClicked={this.handleRowClick}
                    />
                </div>
            </>
        );
    }
}

export default ListBoite;