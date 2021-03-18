import logo from "./images/logoshop.jpg";
import { withRouter } from "react-router-dom";

import { BrowserRouter as Router, Switch,  Link, NavLink,Redirect } from "react-router-dom";



const EspaceAdminLiv=(props) =>{
      return (
      
      <div className="App" id="App">
        <section>
          <div class="ArtisanatShop">
         <h1>ArtisanatShop</h1>
         <div class="vert-left">
           <div class="content">
               <h2>Bienevenue à l'application d'administration ARTISANATSHOP<br/>Rendez l'achat artisanal plus facile ! .. </h2>
           </div>
         
         </div>
          </div>
          </section>
          <div class="form-container">
             <form action="#">
                <div class="control">
                  <img src={logo} />
                    <label for="name" id="email">Email</label>
                    <input type="email" name="name" id="name" placeholder="Adresse Email" required/>
                </div>
                <br/>
                <div class="control">
                    <label for="psw" id="password">Password</label>
                    <input type="password" name="psw" id="psw" placeholder="Mot de passe " required/>
                </div>
                <br/>
                <span><input type="checkbox" id="checkbox"/> &nbsp;<label id="remember">Remember me.</label></span>
                <div class="control">
                   <input type="submit" value="Se connecter"/>
                </div>
             </form>
                <br/>
             <div class="link">
                    <a href="#" ><center><label>Mot de passe oublié ?</label></center></a>
             </div>
             

         </div>
                 </div>
    );
  }
  
  export default EspaceAdminLiv;