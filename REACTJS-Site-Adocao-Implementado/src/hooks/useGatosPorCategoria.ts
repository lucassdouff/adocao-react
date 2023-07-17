import { useQuery } from "@tanstack/react-query";
import ApiGato from "../api/apiGato";
import QueryStringCategoria from "../interfaces/queryStringCategoria";

const apiGato = new ApiGato();

const useGatosPorCategoria = (query: QueryStringCategoria) =>
    useQuery({
        queryKey: ["gatos", "categoria", query],
        queryFn: () => apiGato.recuperarPorCategoria({
            params: {
                idCategoria: query.idCategoria,
                nome: query.nome,
            },
        }),
        staleTime: 10_000,
        keepPreviousData: true
    });

export default useGatosPorCategoria;
