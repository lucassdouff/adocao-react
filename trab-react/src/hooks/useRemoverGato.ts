import { useMutation, useQueryClient } from "@tanstack/react-query";
import ApiGato from "../api/apiGato";

const apiGato = new ApiGato();

const useRemoverGato = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: apiGato.remover,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['gatos']
            })
        }
    })
}

export default useRemoverGato;
