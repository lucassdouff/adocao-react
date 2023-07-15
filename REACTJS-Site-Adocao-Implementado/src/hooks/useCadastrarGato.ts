import { useMutation, useQueryClient } from "@tanstack/react-query";
import ApiGato from "../api/apiGato";

const apiGato = new ApiGato();

const useCadastrarGato = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: apiGato.cadastrar,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['gatos']
            })
        }
    })
}

export default useCadastrarGato;
