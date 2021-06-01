import React, { Component } from "react";


import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import ListArticle from "../components/body/Articles/ListArticle";

import "../css/App.css";
import ListBoite from "../components/body/Boite/ListBoite";

class BoitePage extends Component {
    state = {
        search: "",
        dataSearch: {}
    };

    render() {
        return (
            <>
                <Header
                    onChangeSearchText={this.onChangeSearchText}
                    onSubmitSearchText={this.onSubmitSearchText}
                />
                <ListBoite dataSearch={this.dataSearch} />
                <Footer />
            </>
        );
    }
}

export default BoitePage;