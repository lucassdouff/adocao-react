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
                            <h1>Que tal adotar?</h1>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={cover2} className="d-block w-100 object-fit-cover" style={{height: "45rem", filter: "brightness(75%)",}} alt="" />
                    <div className="carousel-caption" style={{top: "300px"}}>
                        <div className="text-center">
                            <h1>Ajude um gato a encontrar um lar</h1>
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

        <div className="d-flex align-items-center flex-column container text-center mb-4 mt-4 pb-2">
            <h1 className="mb-4"><strong>Alguns dos nossos gatos</strong></h1>
            <div className="container mb-2">
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
