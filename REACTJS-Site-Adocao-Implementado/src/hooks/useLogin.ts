import { useQuery } from "@tanstack/react-query";
import ApiUsuario from "../api/apiUsuario";
import QueryLogin from "../interfaces/queryLogin";

const apiUsuario = new ApiUsuario();

const useLogin = (query: QueryLogin) =>
    useQuery({
        queryKey: ["usuarios", "login", query],
        queryFn: () => apiUsuario.login({
            params: {
                email: query.email,
                senha: query.senha,
            },
        }),
        enabled: query.email !== "" && query.senha !== "",
    });

export default useLogin;
