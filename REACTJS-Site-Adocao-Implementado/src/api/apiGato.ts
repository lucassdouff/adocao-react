import Gato from "../interfaces/Gato"
import ApiGenerica from "./apiGenerica"

class ApiGato extends ApiGenerica<Gato> {
    constructor() {
        super("/gatos");
    }
}

export default ApiGato;
