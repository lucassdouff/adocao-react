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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquid natus omnis deserunt quos reiciendis quia cum, porro, ipsum minus, dolores tempora quas commodi officia perspiciatis dolore quidem. Ratione, sint.Voluptate delectus, voluptatum repudiandae suscipit perspiciatis quis voluptas dicta repellat vel id ducimus sit assumenda beatae voluptatem neque ut dolore corporis provident temporibus doloremque quas cum. Consectetur excepturi laboriosam optio!</p>
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure itaque eius quia, quod ab, libero distinctio deserunt molestiae eligendi, ea quasi excepturi provident architecto ut. Soluta sunt voluptates corrupti labore?
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure itaque eius quia, quod ab, libero distinctio deserunt molestiae eligendi, ea quasi excepturi provident architecto ut. Soluta sunt voluptates corrupti labore?
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure itaque eius quia, quod ab, libero distinctio deserunt molestiae eligendi, ea quasi excepturi provident architecto ut. Soluta sunt voluptates corrupti labore?
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
                                <h5>Maecenas rhoncus vulputate sodales.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Praesentium autem totam similique expedita, molestiae deleniti distinctio officia.<br/> Voluptas asperiores error provident dolores laboriosam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card mb-3">
                            <div className="card-body text-start">
                                <h5>Maecenas rhoncus vulputate sodales.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Praesentium autem totam similique expedita, molestiae deleniti distinctio officia.<br/> Voluptas asperiores error provident dolores laboriosam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card mb-3">
                            <div className="card-body text-start">
                                <h5>Maecenas rhoncus vulputate sodales.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Praesentium autem totam similique expedita, molestiae deleniti distinctio officia.<br/> Voluptas asperiores error provident dolores laboriosam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card mb-3">
                            <div className="card-body text-start">
                                <h5>Maecenas rhoncus vulputate sodales.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Praesentium autem totam similique expedita, molestiae deleniti distinctio officia.<br/> Voluptas asperiores error provident dolores laboriosam.</p>
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
