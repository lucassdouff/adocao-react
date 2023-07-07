import Categoria from "../interfaces/Categoria";
import ApiGenerica from "./apiGenerica";

class ApiCategoria extends ApiGenerica<Categoria> {
  constructor() {
    super("/categorias");
  }
}

export default ApiCategoria;
