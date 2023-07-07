import { useParams } from "react-router-dom"
import useGatoPorId from "../../hooks/useGatoPorId";

export function SingleCat() {
    const { id } = useParams();

    const {
        data: resultado,
        isLoading,
        error,

    } = useGatoPorId(id);
    
    if (isLoading) return <h6>Carregando...</h6>;

    if(error || !resultado) throw error;

    const gato = resultado;

    return(
        <>
        <div className="container text-center text-center mb-4 pt-5 pb-2">
            <div className="singleCatImgDiv">
                <img src={"/images/" + gato.imagem} alt="" />
            </div>
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
                <form action="">
                    <fieldset className="mb-3">
                        <legend><strong>Quero adotar!</strong></legend>
                        <div className="mb-3 row">
                            <label htmlFor="name" className="col-form-label col-lg-2">Nome</label>
                            <div className="col-lg-10">
                                <input type="text" id="name" 
                                name="name"
                                className="form-control" placeholder="Nome" />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="endereco" className="col-form-label col-lg-2">Endereço</label>
                            <div className="col-lg-10">
                                <input type="text" id="endereco" 
                                name="endereco"
                                className="form-control" placeholder="Endereço" />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="email" className="col-form-label col-lg-2">Email</label>
                            <div className="col-lg-10">
                                <input type="text" id="email" 
                                name="email"
                                className="form-control" placeholder="Email" />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-form-label col-lg-2">Lorem ipsum</label>
                            <div className="col-lg-10" style={{paddingTop: "0.4375rem"}}>
                                <div className="form-check form-check-inline">
                                    <input type="radio" id="sim-opt" name="opt" value="S" className="form-check-input" />
                                    <label htmlFor="sim" className="form-check-label">Sim</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio" id="nao-opt" name="opt" value="N" className="form-check-input" />
                                    <label htmlFor="nao" className="form-check-label">Não</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="mb-3">
                        <legend><strong>Informações adicionais</strong></legend>
                        <div className="mb-3 row">
                            <label htmlFor="other-animals" className="col-form-label col-lg-2">Lorem Ipsum</label>
                            <div className="col-lg-10">
                                <select className="form-control" name="other-animals" id="other-animals" multiple>
                                    <option value="1">Lo</option>
                                    <option value="2">rem</option>
                                    <option value="3">Ip</option>
                                    <option value="4">sum</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-form-label col-lg-2">Lorem Ipsum</label>
                            <div className="col-lg-10">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" name="social-media" id="social-media" />
                                    <label className="form-check-label" htmlFor="social-media">
                                        Redes Sociais
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" name="recommendation" id="recommendation" />
                                    <label className="form-check-label" htmlFor="recommendation">
                                        Recomendação
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" name="others" id="others" />
                                    <label className="form-check-label" htmlFor="others">
                                        Outros
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className="row text-center">
                        <div className="col-lg-10 flex-grow-1">
                            <button type="button" className="btn btn-dark">Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
