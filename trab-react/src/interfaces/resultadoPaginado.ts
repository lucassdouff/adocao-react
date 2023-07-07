interface ResultadoPaginado<T> {
    totalDeGatos: number;
    totalDePaginas: number;
    paginaCorrente: number;
    gatos: T[];
}
  
export default ResultadoPaginado;
