import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Usuario from '../../interfaces/Usuario';
import useCadastrarUsuario from '../../hooks/useCadastro';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
    nome: z
        .string()
        .min(1, { message: "O nome deve ser informado." }),
    email: z
        .string()
        .min(1, { message: "O email deve ser informado." }),
    cpf: z
        .string()
        .min(1, { message: "O CPF deve ser informado." }),
    senha: z
        .string()
        .min(1, { message: "A senha deve ser informada." }),
    confirmarSenha: z
        .string()
        .min(1, { message: "A confirmação de senha deve ser informada." }),
}).refine(schema => schema.senha === schema.confirmarSenha, { message: "As senhas devem ser iguais." })

type FormData = z.infer<typeof schema>

export default function Cadastro() {

    const navigate = useNavigate();
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },

    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const cadastrarUsuario = useCadastrarUsuario();
    
    const onSubmit = async (data: FormData) => {
        const user : Usuario = {
            nome: data.nome,
            email: data.email,
            cpf: data.cpf,
            senha: data.senha,
        }

        cadastrarUsuario.mutate(user);
        alert('Cadastro realizado com sucesso!');
        navigate('/login');
        reset();
    };

    return(
        <div className="container mt-4 mb-4 pb-2">
            <h3 className="text-start mb-4">Cadastro</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="row mb-3">
                    <div className="col-xl-6">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            placeholder="Digite seu nome"
                            {...register("nome", { required: true })}
                        />
                        {errors.nome && <p className="text-danger">{errors.nome.message}</p>}
                    </div>
                </div>

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
                        <label htmlFor="cpf" className="form-label">CPF</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cpf"
                            placeholder="Digite seu CPF"
                            {...register("cpf", { required: true })}
                        />
                        {errors.cpf && <p className="text-danger">{errors.cpf.message}</p>}
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

                <div className="row mb-3">
                    <div className="col-xl-6">
                        <label htmlFor="confirmarSenha" className="form-label">Confirmar Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmarSenha"
                            placeholder="Confirme sua senha"
                            {...register("confirmarSenha", { required: true })}
                        />
                        {errors.confirmarSenha && <p className="text-danger">{errors.confirmarSenha.message}</p>}
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-xl-6">
                        <div className="row">
                            <div className="col-xl-10 mt-1">
                                <button id="botao" type="submit" className="btn btn-dark btn-sm">
                                    Cadastrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}