import { NavLink } from 'react-router-dom'
import strayLogo from '../../assets/stray-logo.png'
import useGatoAleatorio from '../../hooks/useGatoAleatorio'

export function Header() {

    const {
        data: resultadoAleatorio,
        isLoading,
        error
    } = useGatoAleatorio();

    if (isLoading) return;

    if(error || !resultadoAleatorio) throw error;

    const gato = resultadoAleatorio;

    return(
        <>
        <nav className="navbar navbar-light bg-light navbar-expand-md">
            <div className="container">
                <NavLink to="/" title="Cat Place" className="navbar-brand">
                    <img className="img-fluid" 
                    style={{
                        width: "1.875rem",
                        }} 
                        src={strayLogo} 
                        alt="" 
                        />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Botão de navegação"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="menu">
                    <div className="navbar-nav me-auto">
                        <NavLink to="/nossos-gatinhos" title="Nossos Gatinhos" className="nav-link nav-item">
                            Nossos gatinhos
                        </NavLink>
                        <div className="dropdown">
                            <a href="archive-1.html" data-bs-toggle="dropdown" className="nav-link nav-item dropdown-toggle">Quero adotar</a>
                            <div className="dropdown-menu">
                                <NavLink to={"/gatos/" + gato.id} className="d-flex justify-content-center" style={{textDecoration: "none", color: "#000"}}>
                                    Adote um gatinho!
                                </NavLink>
                            </div>
                        </div>
                        <NavLink to="/por-raca" title='Gatos por raça' className="nav-link nav-item">
                            Por Raça
                        </NavLink>
                        <NavLink to="/quem-somos" title='Quem Somos' className="nav-link nav-item">
                            Quem somos
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}
