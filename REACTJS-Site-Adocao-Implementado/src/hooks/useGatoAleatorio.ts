import { useQuery } from "@tanstack/react-query";
import Gato from "../interfaces/Gato";
import axios from "axios";

const useGatoAleatorio = () => useQuery({
    queryKey: ['gatos', 'adote'],
    queryFn: () => axios
        .get<Gato>("http://localhost:8080/gatos/adote")
        .then((res) => res.data),
        staleTime: 10_000,
})

export default useGatoAleatorio;
