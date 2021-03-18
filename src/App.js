import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route, Link, NavLink } from "react-router-dom";
import { Button } from 'reactstrap';
import {Form ,FormGroup , Label ,Input} from 'reactstrap';
import defaultExport from 'module';
import './index.js';
import EspaceAdminLiv from './EspaceAdminLiv';
import EspaceAdminLivRegister from './EspaceAdminLivRegister';



const App=() =>{

  return (<Router>
    
    <div className="App" id="App">
       <EspaceAdminLiv/>
       </div>
      <Switch>
        <Route path="/EspaceAdminLivRegister">
          <EspaceAdminLivRegister/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;