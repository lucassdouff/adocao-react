import { useState } from "react";
import useGatosPaginados from "../../hooks/useGatosPaginados";
import { TabelaDeGatos } from "../../components/TabelaDeGatos";
import { Paginacao } from "../../components/Paginacao";
import Pesquisa from "../../components/Pesquisa";

export function ListaDeGatos() {
    const tamanho = 6;
    const [pagina, setPagina] = useState(0);
    const [nome, setNome] = useState("");

    const handleRetrievedNome = (nome: string) => {
        setNome(nome);
        setPagina(0);
    }

    const handleSelectedPage = (pagina: number) => setPagina(pagina);

    const {
        data: resultadoPaginado,
        isLoading,
        error,
    } = useGatosPaginados({ pagina, tamanho, nome });

    if (isLoading) return <h6>Carregando...</h6>

    if(error || !resultadoPaginado) throw error;

    const gatos = resultadoPaginado.gatos;
    const totalDePaginas = resultadoPaginado.totalDePaginas;

    return (
        <div className="container mt-2 mb-4 pb-2">
            <div className="mb-3 mt-4">
                <div className="d-flex justify-content-between">
                    <h5>Nossos gatinhos!</h5>
                </div>
            </div>
            <Pesquisa nome={nome} onRetrieveNome={handleRetrievedNome} />
            {gatos.length > 0 ? <TabelaDeGatos gatos={gatos} /> : <h6 style={{height: "100vh", marginTop: "2rem"}}>Não há gatinhos cadastrados 😢</h6>}
            <Paginacao
                pagina={pagina}
                totalDePaginas={totalDePaginas}
                onSelectPage={handleSelectedPage}
            />
        </div>
    );
}
