import { useQuery } from "@tanstack/react-query";
import ApiGato from "../api/apiGato";
import QueryStringGato from "../interfaces/queryStringGato";

const apiGato = new ApiGato();

const useGatosPaginados = (query: QueryStringGato) =>
    useQuery({
        queryKey: ["gatos", "paginacao", query],
        queryFn: () => apiGato.recuperarPagina({
            params: {
                pagina: query.pagina,
                tamanho: query.tamanho,
                nome: query.nome,
            },
        }),
        staleTime: 10_000,
        keepPreviousData: true
    });

export default useGatosPaginados;
