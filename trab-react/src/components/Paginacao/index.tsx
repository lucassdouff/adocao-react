interface PaginacaoProps {
    pagina: number;
    totalDePaginas: number;
    onSelectPage: (pagina: number) => void;
}

export function Paginacao({ pagina, totalDePaginas, onSelectPage }:PaginacaoProps) {
    const arrayDePaginas = [];

    for (let i = 0; i < totalDePaginas; i++) {
        arrayDePaginas.push(
            <li key={i} className={pagina === i ? "page-item active" : "page-item"}>
                <a onClick={() => onSelectPage(i)} className="page-link">
                {i + 1}
                </a>
            </li>
        )
    }

    if (totalDePaginas <= 1) return null;

    return(
        <>
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={pagina === 0 ? "page-item disabled" : "page-item"}>
                <a onClick={() => onSelectPage(pagina - 1)} className="page-link">Anterior</a>
                </li>
                {arrayDePaginas}
                <li className={pagina === totalDePaginas - 1 ? "page-item disabled" : "page-item"}>
                <a onClick={() => onSelectPage(pagina + 1)} className="page-link">Próxima</a>
                </li>
            </ul>
        </nav>
        </>
    )
}

