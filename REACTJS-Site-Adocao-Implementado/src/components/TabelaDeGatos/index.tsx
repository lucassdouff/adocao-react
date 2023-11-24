import moment from "moment";
import Gato from "../../interfaces/Gato"
import { NavLink } from "react-router-dom";

interface TabelaDeGatosProps {
    gatos: Gato[];
}

export function TabelaDeGatos({ gatos }:TabelaDeGatosProps) {
    return (
        <>
        <div className="row container ms-1">
            {gatos?.map((gato) => 
                <NavLink key={gato.id} to={"/gatos/" + gato.id} id="cat" className="col-lg-4 col-md-6 mb-4 text-center hover px-2 py-2 cat-hover" style={{cursor: "pointer", textDecoration: "none", color: "#000"}}>
                    <img src={'images/' + gato.imagem} className="catImg" />
                    <strong>{gato.nome}</strong>
                    <div className="d-flex justify-content-center gap-2 flex-wrap">
                        <span className="badge bg-dark">{gato.sexo}</span>
                        <span className="badge bg-dark">{moment(gato.dataNascimento).format("DD/MM/YYYY")}</span>
                        <span className="badge bg-dark">{gato.categoria.nome}</span>
                    </div>
                </NavLink>
            )}
        </div>
        </>
    )
}
