import { NavLink } from 'react-router-dom'
import cover1 from '../../assets/main-background-cover.jpg'
import cover2 from '../../assets/main-background-cover2.jpg'
import { CardsDeGatos } from '../../components/CardsDeGatos';
import useGatosRecentes from '../../hooks/useGatosRecentes';

export function Home(){

    const {
        data: resultado,
        isLoading,
        error,
    } = useGatosRecentes();

    console.log(resultado)
    if (isLoading) return <h6>Carregando...</h6>;

    if(error || !resultado) throw error;

    const gatos = resultado;

    return(
        <>
            <div id="carousel-id" className="carousel slide d-none d-md-block" data-ride="carousel">
            <ol className="carousel-indicators" style={{listStyleType: "none"}}>
                <li data-bs-target="#carousel-id" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carousel-id" data-bs-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={cover1} className="d-block w-100 object-fit-cover" style={{height: "45rem", filter: "brightness(75%)",}} alt="" />
                    <div className="carousel-caption" style={{top: "300px"}}>
                        <div className="text-center">
                            <h1>Que tal adotar? Diz que sim!</h1>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={cover2} className="d-block w-100 object-fit-cover" style={{height: "45rem", filter: "brightness(75%)",}} alt="" />
                    <div className="carousel-caption" style={{top: "300px"}}>
                        <div className="text-center">
                            <h1>O StrayCats já ajudou 1432 pets <br/> a encontrarem um lar.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#carousel-id" className="carousel-control-prev" role="button" data-bs-slide-to="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a href="#carousel-id" className="carousel-control-next" role="button" data-bs-slide-to="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>

        <div style={{backgroundColor: "#B9E9E3",}}>
            <div className="container text-center mb-4 py-4" style={{backgroundColor: "#B9E9E3",}}>
                <h1 className="mb-4"><strong>Conheça o StrayCats</strong></h1>
                <p>Seja bem-vindo à 'StrayCats', uma iniciativa apaixonada pela adoção de gatos. Nosso compromisso é resgatar, cuidar e encontrar lares amorosos para felinos abandonados. Valorizamos o bem-estar desses animais, proporcionando um ambiente seguro e acolhedor. Junte-se a nós nessa jornada de transformar vidas felinas e espalhar alegria por meio da adoção responsável. Juntos, podemos fazer a diferença na vida desses adoráveis companheiros.</p>
            </div>
        </div>

        <div className="container text-center mb-4 pb-2">
            <h1 className="mb-4"><strong>Como funciona a adoção</strong></h1>
            <div className="accordion" id="id-accordion">
                <div className="card mb-1">
                    <div className="card-header" id="id-header-interview">
                        <h5 className="mb-0">
                            <a style={{textDecoration: "none",}} href="#id-interview" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="id-interview">Entrevista</a>
                        </h5>
                    </div>
                    <div id="id-interview" className="collapse show" data-bs-parent="#id-accordion" aria-labelledby="id-header-interview">
                        <div className="card-body">
                            Contato inicial do interessado. <br />
                            Agendamento de uma entrevista para conhecer o adotante e suas expectativas. <br />
                            Troca de informações sobre o adotante e esclarecimento de dúvidas.
                        </div>
                    </div>
                </div>
                <div className="card mb-1">
                    <div className="card-header" id="id-header-safetycheck">
                        <h5 className="mb-0">
                            <a style={{textDecoration: "none",}} href="#id-safetycheck" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="id-safetycheck">Verificação de segurança</a>
                        </h5>
                    </div>
                    <div id="id-safetycheck" className="collapse" data-bs-parent="#id-accordion" aria-labelledby="id-header-safetycheck">
                        <div className="card-body">
                            Realização de uma verificação de segurança, que pode incluir visita à residência. <br />
                            Avaliação das condições do ambiente em que o gato irá viver. <br />
                            Confirmação do acordo de todos os membros da família.
                        </div>
                    </div>
                </div>
                <div className="card mb-1">
                    <div className="card-header" id="id-header-catdelivery">
                        <h5 className="mb-0">
                            <a style={{textDecoration: "none"}} href="#id-catdelivery" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="id-catdelivery">Entrega do gatinho</a>
                        </h5>
                    </div>
                    <div id="id-catdelivery" className="collapse" data-bs-parent="#id-accordion" aria-labelledby="id-header-catdelivery">
                        <div className="card-body">
                            Escolha do gato adequado ao adotante. <br />
                            Visita ao abrigo ou local temporário para conhecer o gato. <br />
                            Documentação da adoção e fornecimento de orientações. <br />
                            Entrega do gato ao adotante.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style={{backgroundColor: "#B9E9E3"}}>
            <div className="container text-center mb-4 py-4">
                <h1 className="mb-4"><strong>Onde encontar nossa turma</strong></h1>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="card mb-3">
                            <div className="card-body text-start">
                                <h5>São Paulo</h5>
                                <p>
                                    CEP: 01000-000 <br/>
                                    Endereço: Avenida Paulista, São Paulo - SP <br/>
                                    Descrição: São Paulo é a maior cidade do Brasil e uma das maiores metrópoles do mundo. É conhecida por sua agitada vida cultural, parques urbanos e diversidade gastronômica.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card mb-3">
                            <div className="card-body text-start">
                                <h5>Rio de Janeiro</h5>
                                <p>
                                    CEP: 20000-000 <br/>
                                    Endereço: Avenida Atlântica, Rio de Janeiro - RJ <br/>
                                    Descrição: O Rio de Janeiro é famoso por suas belas praias, incluindo Copacabana e Ipanema, o icônico Cristo Redentor no topo do Corcovado, o Pão de Açúcar e seu animado Carnaval.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card mb-3">
                            <div className="card-body text-start">
                                <h5>Salvador</h5>
                                <p>
                                    CEP: 40000-000 <br/>
                                    Endereço: Pelourinho, Salvador - BA <br/>
                                    Descrição: Salvador é conhecida por sua rica história, cultura afro-brasileira, música, dança e culinária. O Pelourinho é um bairro histórico que abriga belas construções coloniais e é um importante centro cultural da cidade.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card mb-3">
                            <div className="card-body text-start">
                                <h5>Manaus</h5>
                                <p>
                                    CEP: 69000-000 <br/>
                                    Endereço: Teatro Amazonas, Manaus - AM <br/>
                                    Descrição: Manaus é a maior cidade da região Norte do Brasil e está localizada no coração da Floresta Amazônica. O Teatro Amazonas é um dos principais pontos turísticos da cidade.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="d-flex align-items-center flex-column container text-center mb-4 pb-2">
            <h1 className="mb-4"><strong>Meow Meow</strong></h1>
            <div className="container">
                <div className="row">
                    <CardsDeGatos
                        gatos = {gatos}
                    />
                </div>
            </div>
            <NavLink to="/nossos-gatinhos" style={{textDecoration: "none"}}>
                <button className="btn btn-outline-dark mt-2">
                    <span>Mais gatinhos</span>
                    <i className="ph ph-arrow-right"></i>
                </button>
            </NavLink>
        </div>
        </>
    )
}
