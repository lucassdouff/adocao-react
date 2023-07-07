import { useQuery } from "@tanstack/react-query";
import ApiGato from "../api/apiGato";

const apiGato = new ApiGato();

const useGatoPorId = (query: any) =>
    useQuery({
        queryKey: ["gatos", query],
        queryFn: () => apiGato.recuperarPorId(query),
        staleTime: 10_000,
        keepPreviousData: true
    });

export default useGatoPorId;
