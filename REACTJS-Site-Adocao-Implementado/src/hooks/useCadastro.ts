import { useMutation, useQueryClient } from "@tanstack/react-query";
import ApiUsuario from "../api/apiUsuario";

const apiUsuario = new ApiUsuario();

const useCadastrarUsuario = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: apiUsuario.cadastrar,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['usuarios']
            })
        }
    })
}

export default useCadastrarUsuario;
