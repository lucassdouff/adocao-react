import { useState } from "react";
import useCategorias from "../../hooks/useCategorias"
import useGatosPorCategoria from "../../hooks/useGatosPorCategoria";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardsDeGatos } from "../../components/CardsDeGatos";

const schema = z.object({
    raca: z
    .enum(["0", "1", "2", "3"] as const, {
        errorMap: () => ({ message: "Não há nenhuma raça registrada." }),
    } ),
})

type FormData = z.infer<typeof schema>

export function PorRaca() {

    const [idCategoria, setIdCategoria] = useState(0);
    const [nome, setNome] = useState("");

    const { data: categorias, error: errorCategoria } = useCategorias();

    const {
        register,
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const {
        data: resultado,
        isLoading,
        error
    } = useGatosPorCategoria({idCategoria, nome});

    if (isLoading) return <h6>Carregando...</h6>

    if(error || !resultado) throw error;
    if(errorCategoria) throw errorCategoria;

    const gatos = resultado;

    const isChecked = () => {
        return idCategoria == 0;
    }

    return (
        <>
        <form action="" className="p-2 mb-4" style={{backgroundColor: "#99c2bd"}}>
            <div className="d-flex justify-content-center mt-4">
                <h3>Escolha uma raça</h3>
            </div>
            <div className="d-flex justify-content-center gap-2 my-4 p-2">
                <input checked={isChecked()} value="0" type="radio" className="btn-check" id="0" autoComplete="off" {...register("raca", {
                    onChange: (e) => {
                        setIdCategoria(e.target.value)
                    }
                })}/>
                <label className="btn btn-dark" htmlFor="0">Todas</label>           
                {categorias?.map((categoria) => (
                    <div key={categoria.id}>
                        <input value={categoria.id} type="radio" className="btn-check" id={categoria.id.toString()} autoComplete="off" {...register("raca", {
                            onChange: (e) => {
                                setIdCategoria(e.target.value)
                            }
                        })}/>
                        <label className="btn btn-dark" htmlFor={categoria.id.toString()}>{categoria.nome}</label>
                    </div>
                ))}
            </div>
        </form>
        
        <div className="container mb-4">
            <div className="row">
            {gatos.length > 0 ? <CardsDeGatos gatos={gatos} /> : <h6 style={{height: "100vh", marginTop: "2rem"}}>Não há gatinhos dessa raça cadastrados 😢</h6>}
            </div>
        </div>
        </>
    )
}
