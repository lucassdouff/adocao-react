import { useState } from "react";
import useCategorias from "../../hooks/useCategorias"
import useGatosPorCategoria from "../../hooks/useGatosPorCategoria";
import { CardsDeGatos } from "../../components/CardsDeGatos";
import { NavLink, useParams } from "react-router-dom";

export function PorRaca() {

    const { idCategoria } = useParams();

    const [ nome ] = useState("");

    const { data: categorias, error: errorCategoria } = useCategorias();

    const {
        data: resultado,
        isLoading,
        error
    } = useGatosPorCategoria({idCategoria, nome});

    if (isLoading) return <h6>Carregando...</h6>

    if(error || !resultado) throw error;
    if(errorCategoria) throw errorCategoria;

    const gatos = resultado;

    return (
        <>
        <div className="d-flex justify-content-center mt-4">
            <h3>Escolha uma raça</h3>
        </div>
        <div className="d-flex justify-content-center gap-2 my-4 p-2">
            <NavLink className="nav-link nav-item" style={{backgroundColor: "rgb(185, 233, 227)", textDecoration: "none", color: "#FFF", padding: "0.5rem", borderRadius: "5px"}} to="/por-raca/0">
                Todas
            </NavLink>
            {categorias?.map((categoria) => 
                <NavLink className="nav-link nav-item" style={{backgroundColor: "rgb(185, 233, 227)", textDecoration: "none", color: "#FFF", padding: "0.5rem", borderRadius: "5px"}} key={categoria.id} to={"/por-raca/" + categoria.id}>
                    {categoria.nome}
                </NavLink>
            )}
        </div>
        
        <div className="container mb-4">
            <div className="row">
            {gatos.length > 0 ? <CardsDeGatos gatos={gatos} /> : <h6 style={{height: "100vh", marginTop: "2rem"}}>Não há gatinhos dessa raça cadastrados 😢</h6>}
            </div>
        </div>
        </>
    )
}
