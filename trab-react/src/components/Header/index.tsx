import { NavLink } from 'react-router-dom'
import strayLogo from '../../assets/stray-logo.png'

export function Header() {
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
                        <a href="archive-1.html" className="nav-link nav-item">Nossos gatinhos</a>
                        <div className="dropdown">
                            <a href="archive-1.html" data-bs-toggle="dropdown" className="nav-link nav-item dropdown-toggle">Quero adotar</a>
                            <div className="dropdown-menu" id="someMeow"></div>
                        </div>
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
