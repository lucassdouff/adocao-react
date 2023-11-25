import { AxiosRequestConfig } from "axios";
import Usuario from "../interfaces/Usuario";
import ApiGenerica from "./apiGenerica";

class ApiUsuario extends ApiGenerica<Usuario> {
  constructor() {
    super("/usuarios");
  }

  login = (config: AxiosRequestConfig) =>   
    ApiGenerica.axiosInstance
    .get<Usuario>(this.endpoint + "/login", config)
    .then((res) => res.data);

}

export default ApiUsuario;