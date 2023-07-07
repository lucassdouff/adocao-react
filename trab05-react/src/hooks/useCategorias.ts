import { useQuery } from "@tanstack/react-query";
import ApiCategoria from "../api/apiCategoria";

const apiCategoria = new ApiCategoria();

const useCategorias = () =>
  useQuery({
    queryKey: ["categorias"],
    queryFn: () => apiCategoria.recuperarTodos(),
      staleTime: 24 * 60 * 60 * 1000, // 24h
      keepPreviousData: true
  });
export default useCategorias;
