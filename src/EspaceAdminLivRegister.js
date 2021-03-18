import logo from "./images/logoshop.jpg";
const EspaceAdminLivRegister=() =>{

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
               <label for="name" id="email">Nom d'utilisateur</label>
              <input type="text" name="name" id="name" placeholder="Adresse Email" required/>
               </div>
               <br/>
                <div class="control">
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
                    <input type="submit" value="S'inscrire"/>
                </div>
             </form>
                <br/>
             <div class="link">
                    <a href="#" ><center><label>avez-vous déjà un compte ?</label></center></a>
             </div>


         </div>
                 </div>
    );
  }
  
  export default EspaceAdminLivRegister;