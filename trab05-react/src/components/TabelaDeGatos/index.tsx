import moment from "moment";
import Gato from "../../interfaces/Gato"
import { NavLink } from "react-router-dom";

interface TabelaDeGatosProps {
    gatos: Gato[];
}

export function TabelaDeGatos({ gatos }:TabelaDeGatosProps) {
    return (
        <>
        <table className="table table-responsive table-bordered table-hover table-sm">
        <thead>
            <tr>
            <th className="align-middle text-center">Id</th>
            <th className="align-middle text-center">Imagem</th>
            <th className="align-middle text-center">Raça</th>
            <th className="align-middle text-center">Nome</th>
            <th className="align-middle text-center">Data de nascimento</th>
            <th className="align-middle text-center">Sobre</th>
            <th className="align-middle text-center">Sexo</th>
            </tr>
        </thead>
        <tbody>
            {gatos?.map((gato) => (
            <tr key={gato.id}>
                <td width="5%" className="align-middle text-center">
                {gato.id}
                </td>
                <td width="20%" className="align-middle text-center">
                <img src={'images/' + gato.imagem} style={{ width: "100px" }} />
                </td>
                <td width="10%" className="align-middle text-center">
                {gato.categoria.nome}
                </td>
                <td width="10%" className="align-middle text-center">
                {gato.nome}
                </td>
                <td width="15%" className="align-middle text-center">
                {moment(gato.dataNascimento).format("DD/MM/YYYY")}
                </td>
                <td width="10%" className="align-middle text-center pe-3">
                {gato.descricao}
                </td>
                <td width="10%" className="align-middle text-center pe-3">
                {gato.sexo}
                </td>
                <td width="10%" className="align-middle text-center">
                <NavLink to={"/gatos/" + gato.id}>
                    <button
                        className="btn btn-dark btn-sm"
                    >
                        Ver mais
                    </button>
                </NavLink>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
        </>
    )
}
