import { NavLink } from 'react-router-dom'
import strayLogo from '../../assets/stray-logo.png'

export function Header() {

    const user = localStorage.getItem('session');

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
                        <NavLink to="/nossos-gatinhos" title="Nossos Gatinhos" className="nav-link nav-item p-2">
                            Nossos gatinhos
                        </NavLink>
                        <NavLink to="/por-raca/0" title='Gatos por raça' className="nav-link nav-item p-2">
                            Raças
                        </NavLink>
                        <NavLink to="/para-adocao" title='Para adoção' className="nav-link nav-item p-2">
                            Para adoção
                        </NavLink>
                        {
                        user ? (
                            <NavLink to="/painel" title='Painel' className="nav-link nav-item p-2">
                                Painel
                            </NavLink>
                        ) : (
                            <NavLink to="/login" title='Login' className="nav-link nav-item p-2">
                                Fazer login
                            </NavLink>
                        )
                        }
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}
