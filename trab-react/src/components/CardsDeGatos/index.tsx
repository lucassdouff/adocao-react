import { NavLink } from "react-router-dom";
import Gato from "../../interfaces/Gato";

interface CardsDeGatosProps {
    gatos: Gato[];
}

export function CardsDeGatos({ gatos }:CardsDeGatosProps) {
    return(
        <>
        {gatos.map((gato) => {
            return(
                <NavLink key={gato.id} to={"/gatos/" + gato.id} id="cat" className="col-lg-4 col-md-6 mb-2 px-2 py-2 text-center cat-hover" style={{cursor: "pointer", textDecoration: "none", color: "#000"}}>
                    <img src={'images/' + gato.imagem} className="catImg" />
                    <strong>{gato.nome}</strong>
                    <div className="d-flex justify-content-center gap-2">
                        <span className="badge bg-dark">{gato.sexo}</span>
                        <span className="badge bg-dark">{gato.dataNascimento.toString()}</span>
                    </div>
                </NavLink>
            )
        })}
        </>
    )
}
