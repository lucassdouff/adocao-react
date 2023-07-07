import { useQuery } from "@tanstack/react-query";
import Gato from "../interfaces/Gato";
import axios from "axios";

const useGatos = () => useQuery({
    queryKey: ['gatos'],
    queryFn: () => axios
        .get<Gato[]>("http://localhost:8080/gatos")
        .then((res) => res.data.slice(0,6)),
        staleTime: 10_000,
})

export default useGatos;
