import { useRef } from "react";

interface PesquisaProps {
    nome: string;
    onRetrieveNome: (nome: string) => void;
}

const Pesquisa = ({ nome, onRetrieveNome }:PesquisaProps) => {
    const pesqRef = useRef<HTMLInputElement>(null);

    return(
        <>
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if(pesqRef.current?.value) {
                    onRetrieveNome(pesqRef.current?.value);
                }
            }}
            className="d-flex mb-3 ms-2"
            role="search"
            >
            <input
                ref={pesqRef}
                className="form-control me-2 border-dark"
                placeholder="Digite o nome..."
                aria-label="Search"
                defaultValue={nome}
            />
            <button className="btn btn-outline-dark" type="submit">
                Pesquisar
            </button>
        </form>
        </>
    )
}

export default Pesquisa;
