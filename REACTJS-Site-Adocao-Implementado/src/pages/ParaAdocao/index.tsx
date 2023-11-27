import { useNavigate } from "react-router-dom";
import { CadastroDeGatosForm } from "../../components/CadastroDeGatosForm";

export default function ParaAdocao() {

    const user = JSON.parse(localStorage.getItem('session') || '{}');

    const navigate = useNavigate();
    
    return(
        <div className="container mt-2 mb-auto pb-2 h-100">
            <div className="mb-4 mt-4">
                <h5>Cadastro de gatos para adoção</h5>
            </div>
            
            {
                user.id ? (
                    <CadastroDeGatosForm />
                ) : (
                    <button className="btn btn-dark" onClick={() => navigate('/login')}>Fazer login</button>
                )
            }
        </div>
    )
}