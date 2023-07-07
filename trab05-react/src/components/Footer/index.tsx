import { NavLink } from 'react-router-dom'
import catPaw from '../../assets/cat-paw.png'
import { ToastDemo } from './components/Toast'

export function Footer() {
    return(
        <>
        <div className="footer bg-dark py-2">
            <div className="container">
                <div className="row">
                    <div className="col-sm-2 d-flex align-items-center justify-content-center mb-4">
                        <ToastDemo />
                    </div>
                    <div className="col-sm-7 d-flex flex-column align-items-start justify-content-center" style={{
                        color: "#fff",
                        }}>
                        <ul style={{
                            listStyleType: "none",
                            padding: 0,
                            }}>
                            <li><i className="ph ph-map-pin"></i> Av. Milton Tavares de Souza, s/n - Sala 115 B - Boa Viagem, Niterói - RJ, 24210-315</li>
                            <li><i className="ph ph-phone"></i> (99) 99999-9999</li>
                            <li><i className="ph ph-envelope-simple"></i> salve-gatos@gatINhos.com</li>
                        </ul>
                        <NavLink to="/quem-somos" title='Quem Somos'>
                            <button className="btn btn-outline-light">Quem Somos</button>
                        </NavLink>
                    </div>
                    <div className="col-sm-3 mt-4 d-flex text-center flex-column align-items-center" style={{ color: "#fff",
                    }}>
                        <strong>Desenvolvido com</strong>
                        <img src={catPaw} className="developedWithImg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
