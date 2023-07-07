import { useState } from "react";
import useGatosPaginados from "../../hooks/useGatosPaginados";
import { TabelaDeGatos } from "../../components/TabelaDeGatos";
import { Paginacao } from "../../components/Paginacao";
import Pesquisa from "../../components/Pesquisa";
import { CadastroDeGatosForm } from "../../components/CadastroDeGatosForm";

export function ListaDeGatos() {
    const tamanho = 5;
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
            <div className="mb-4">
            <h5>Cadastro de gatos para adoção</h5>
            <hr className="mt-0" />
            </div>

            <CadastroDeGatosForm />

            <div className="mb-4">
                <h5>Nossos gatinhos!</h5>
                <hr className="mt-0" />
            </div>
            <Pesquisa nome={nome} onRetrieveNome={handleRetrievedNome} />
            <TabelaDeGatos gatos={gatos} />
            <Paginacao
                pagina={pagina}
                totalDePaginas={totalDePaginas}
                onSelectPage={handleSelectedPage}
            />
        </div>
    );
}
