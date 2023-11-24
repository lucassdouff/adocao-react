import { NavLink } from 'react-router-dom'
import reactIcon from '../../assets/react-icon.png'

export function Footer() {

    return(
        <div className="footer py-2 mt-auto" style={{backgroundColor: "#222222"}}>
            <div className="container">
                <div className="d-flex flex-row align-items-center justify-content-between">
                    <NavLink to="/nossos-gatinhos" title='Nossos gatinhos'>
                            <button className="btn btn-outline-light">Adotar</button>
                    </NavLink>
                    <div className="col-sm-3 mt-4 d-flex text-center flex-column align-items-center" style={{ color: "#fff",
                    }}>
                        <strong className='mb-2'>Desenvolvido com</strong>
                        <img src={reactIcon} className="developedWithImg mb-4" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
