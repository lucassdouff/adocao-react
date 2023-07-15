import { useQuery } from "@tanstack/react-query";
import Gato from "../interfaces/Gato";
import axios from "axios";

const useGatosRecentes = () => useQuery({
    queryKey: ['gatos', 'recentes'],
    queryFn: () => axios
        .get<Gato[]>("http://localhost:8080/gatos/recentes")
        .then((res) => res.data),
        staleTime: 10_000,
})

export default useGatosRecentes;
