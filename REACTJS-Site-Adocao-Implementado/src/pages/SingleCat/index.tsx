import { useNavigate, useParams } from "react-router-dom"
import useGatoPorId from "../../hooks/useGatoPorId";
import useRemoverGato from "../../hooks/useRemoverGato";

export function SingleCat() {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('session') || '{}');

    const { id } = useParams();

    const removerGato = useRemoverGato();

    const handleRemoveGato = (id: number) => {
        removerGato.mutate(id);
        alert('Gatinho adotado com sucesso! 🐱')
        navigate('/')
    }

    const {
        data: resultado,
        isLoading,
        error,

    } = useGatoPorId(id as unknown as number);

    
    if (isLoading) return <h6>Carregando...</h6>;

    if(error || !resultado) throw error;

    const gato = resultado;

    return(
        <>
        <div className="container text-center text-center mb-4 pt-5 pb-2">
            <img className="singleCatImg" src={"/images/" + gato.imagem} alt="" />
            <div className="mt-4">
                <h3><strong>{gato.nome}</strong></h3>
                <p>
                    {gato.sexo} {gato.dataNascimento?.toString()}
                    <br />
                    {gato.descricao}
                </p>
            </div>
        </div>

        <div style={{backgroundColor: "#B9E9E3"}}>
            <div className="container py-5">
                <h3 className="mb-4"><strong>Quero adotar!</strong></h3>
                {
                    user.id ? (
                        <button className="btn btn-dark" onClick={() => {
                            if(gato.id) {
                                handleRemoveGato(gato.id);
                            }
                        }}>Adotar</button>
                    ) : (
                        <button className="btn btn-dark" onClick={() => navigate('/login')}>Fazer login</button>
                    )
                }
            </div>
        </div>
        </>
    )
}
