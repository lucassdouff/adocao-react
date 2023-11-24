import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import useCadastrarGato from "../../hooks/useCadastrarGato";
import useCategorias from "../../hooks/useCategorias";
import Gato from "../../interfaces/Gato";
import { useNavigate } from "react-router-dom";

const regexImagem = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
const regexData = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

const schema = z.object({
    sexo: z
        .enum(["Macho", "Fêmea"] as const, {
            errorMap: () => ({ message: "O sexo informado deve ser 'Macho' ou 'Fêmea'." })
        }),
    nome: z
        .string()
        .min(1, { message: "O nome deve ser informado." })
        .min(2, { message: "O nome deve conter pelo menos 2 caracteres." }),
    descricao: z
        .string()
        .min(1, { message: "A descrição deve ser informada." })
        .min(10, { message: "A descrição deve conter pelo menos 10 caracteres." }),
    raca: z
        .enum(["1", "2", "3"] as const, {
            errorMap: () => ({ message: "Uma raça deve ser informada." }),
        } ),
    data_nascimento: z
    .string()
    .min(1, { message: "A data de nascimento deve ser informada." })
    .regex(regexData, { message: "Data inválida." }),
    imagem: z
    .string()
    .min(1, { message: "A imagem deve ser informada." })
    .regex(regexImagem, { message: "Extensão de imagem inválida." }),
})

type FormData = z.infer<typeof schema>

export function CadastroDeGatosForm() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },

    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const cadastrarGato = useCadastrarGato();
    const { data: categorias, error: errorCategoria } = useCategorias();

    const onSubmit = ({
        nome,
        descricao,
        raca,
        data_nascimento,
        imagem,
        sexo,
    }: FieldValues) => {
        const gato: Gato = {
            nome: nome,
            descricao: descricao,
            categoria: { id: raca, nome: "" },
            dataNascimento: new Date(
                data_nascimento.substring(6, 10) +
                "-" +
                data_nascimento.substring(3, 5) +
                "-" +
                data_nascimento.substring(0, 2)  
            ),
            imagem: imagem,
            sexo: sexo,
        };
        reset();
        alert('Gatinho posto para adoção com sucesso! 🐱');
        navigate('/nossos-gatinhos');
        cadastrarGato.mutate(gato);
    };

    if(cadastrarGato.error) throw cadastrarGato.error;
    if(errorCategoria) throw errorCategoria;

    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-xl-6">
                    <div className="row mb-4">
                        <label htmlFor="nome" className="col-xl-2 fw-bold">
                        Nome
                        </label>
                        <div className="col-xl-10">
                        <input
                            {...register("nome")}
                            type="text"
                            id="nome"
                            className={
                            errors.nome
                                ? "border-dark form-control form-control-sm is-invalid"
                                : "border-dark form-control form-control-sm"
                            }
                        />
                        <div className="invalid-feedback">{errors.nome?.message}</div>
                        {/* 
                        {errors.nome && <p className="text-danger">{errors.nome.message}</p>}
                        */}
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="row mb-4">
                        <label htmlFor="descricao" className="col-xl-3 fw-bold">
                        Descrição
                        </label>
                        <div className="col-xl-9">
                        <input
                            {...register("descricao")}
                            type="text"
                            id="descricao"
                            className={
                            errors.descricao
                                ? "form-control form-control-sm is-invalid"
                                : "border-dark form-control form-control-sm"
                            }
                        />
                        <div className="invalid-feedback">
                            {errors.descricao?.message}
                        </div>
                        {/* 
                        {errors.descricao && <p className="text-danger">{errors.descricao.message}</p>}
                        */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-6">
                    <div className="row mb-4">
                        <label htmlFor="categoria" className="col-xl-2 fw-bold">
                        Raça
                        </label>
                        <div className="col-xl-10">
                        <select
                            {...register("raca")}
                            id="raca"
                            className={
                            errors.raca
                                ? "border-dark form-control form-control-sm is-invalid"
                                : "border-dark form-control form-control-sm"
                            }
                        >
                            <option key={0} value="0">
                            Selecione uma raça
                            </option>
                            {categorias?.map((categoria) => (
                            <option key={categoria.id} value={categoria.id}>
                                {categoria.nome}
                            </option>
                            ))}
                        </select>
                        <div className="invalid-feedback">
                            {errors.raca?.message}
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="row mb-4">
                        <label htmlFor="data_nascimento" className="col-xl-3 fw-bold">
                        Data Nascimento
                        </label>
                        <div className="col-xl-9">
                        <input
                            {...register("data_nascimento")}
                            type="text"
                            id="data_nascimento"
                            className={
                            errors.data_nascimento
                                ? "border-dark form-control form-control-sm is-invalid"
                                : "border-dark form-control form-control-sm"
                            }
                        />
                        <div className="invalid-feedback">
                            {errors.data_nascimento?.message}
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-1">
                <div className="col-xl-6">
                    <div className="row mb-4">
                        <label htmlFor="imagem" className="col-xl-2 fw-bold">
                        Imagem
                        </label>
                        <div className="col-xl-10">
                        <input
                            {...register("imagem")}
                            type="text"
                            id="imagem"
                            className={
                            errors.imagem
                                ? "border-dark form-control form-control-sm is-invalid"
                                : "border-dark form-control form-control-sm"
                            }
                        />
                        <div className="invalid-feedback">{errors.imagem?.message}</div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="row mb-4">
                        <label htmlFor="sexo" className="col-xl-3 fw-bold">
                        Sexo
                        </label>
                        <div className="col-xl-9">
                        <input
                            {...register("sexo")}
                            type="text"
                            min="0"
                            id="sexo"
                            className={
                            errors.sexo
                                ? "border-dark form-control form-control-sm is-invalid"
                                : "border-dark form-control form-control-sm"
                            }
                        />
                        <div className="invalid-feedback">
                            {errors.sexo?.message}
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-xl-6">
                <div className="row">
                    <div className="col-xl-10 offset-xl-2">
                    <button id="botao" type="submit" className="btn btn-dark btn-sm">
                        Cadastrar
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </form>
        </>
    )
}
