import axios from "axios";

class VentesApi {
  get_Ventes() {
    return axios.get(`http://localhost:8080/Ventes`);
  }
}
export default new VentesApi();
