import { useState } from "react";
import useGatosPaginados from "../../hooks/useGatosPaginados";
import { TabelaDeGatos } from "../../components/TabelaDeGatos";
import { Paginacao } from "../../components/Paginacao";
import Pesquisa from "../../components/Pesquisa";
import { CadastroDeGatosForm } from "../../components/CadastroDeGatosForm";
import useCategorias from "../../hooks/useCategorias";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export function ListaDeGatos() {
    const tamanho = 6;
    const [pagina, setPagina] = useState(0);
    const [nome, setNome] = useState("");
    const [categoria, setCategoria] = useState("");
    
    const { data: categorias } = useCategorias();

    const schema = z.object({
        categoria: z
        .enum(["", "siames", "persa", "brasileiro"] as const, {
            errorMap: () => ({ message: "Uma raça deve ser informada." }),
        })
    })
    
    type FormData = z.infer<typeof schema>

    const {
        register,
        handleSubmit,

    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const handleRetrievedNome = (nome: string) => {
        setNome(nome);
        setPagina(0);
    }
    
    const onSubmit = ({ categoria }: FieldValues) => {
        setCategoria(categoria);
    }

    const handleSelectedPage = (pagina: number) => setPagina(pagina);


    const {
        data: resultadoPaginado,
        isLoading,
        error,
    } = useGatosPaginados({ pagina, tamanho, nome, categoria });

    if (isLoading) return <h6>Carregando...</h6>

    if(error || !resultadoPaginado) throw error;

    const gatos = resultadoPaginado.gatos;
    const totalDePaginas = resultadoPaginado.totalDePaginas;

    return (
        <div className="container mt-2 mb-4 pb-2">
            <div className="mb-4">
            <h5>Cadastro de gatos para adoção</h5>
            <hr className="mt-0" />
            </div>

            <CadastroDeGatosForm />

            <div className="mb-4">
                <div className="d-flex justify-content-between">
                    <h5>Nossos gatinhos!</h5>
                    <form onChange={handleSubmit(onSubmit)}>
                        <select
                            {...register("categoria")}
                            id="categoria"
                        >
                            <option key={0} value="">
                            Selecione uma categoria
                            </option>
                            {categorias?.map((categoria) => (
                            <option key={categoria.id} value={categoria.slug}>
                                {categoria.nome}
                            </option>
                            ))}
                        </select>
                    </form>
                </div>
                <hr className="mt-0" />
            </div>
            <Pesquisa nome={nome} onRetrieveNome={handleRetrievedNome} />
            <TabelaDeGatos gatos={gatos} />
            <Paginacao
                pagina={pagina}
                totalDePaginas={totalDePaginas}
                onSelectPage={handleSelectedPage}
            />
        </div>
    );
}
