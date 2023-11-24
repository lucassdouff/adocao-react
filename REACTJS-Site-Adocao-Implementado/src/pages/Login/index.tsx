import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import * as z from 'zod';

const schema = z.object({
    email: z
        .string()
        .min(1, { message: "O email deve ser informado." }),
    senha: z
        .string()
        .min(1, { message: "A senha deve ser informada." }),
})

type FormData = z.infer<typeof schema>

export default function Login() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },

    } = useForm<FormData>({ resolver: zodResolver(schema) });
    

    const onSubmit = async (data: FormData) => {
        console.log(data);
        reset();
    };

    return (
        <div className="container mt-4 mb-4 pb-2">
            <h3 className="text-start mb-4">Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="row mb-3">
                    <div className="col-xl-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Digite seu email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <p className="text-danger">{errors.email.message}</p>}
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-xl-6">
                        <label htmlFor="senha" className="form-label">Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            id="senha"
                            placeholder="Digite sua senha"
                            {...register("senha", { required: true })}
                        />
                        {errors.senha && <p className="text-danger">{errors.senha.message}</p>}
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-xl-6">
                        <div className="row">
                            <div className="col-xl-10 mt-1">
                                <button id="botao" type="submit" className="btn btn-dark btn-sm">
                                    Entrar
                                </button>
                                <NavLink to="/signup" className="btn btn-dark btn-sm ms-2">
                                    Cadastrar-se
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}