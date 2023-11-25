import { useNavigate } from "react-router-dom";

export default function Painel() {
    const user = JSON.parse(localStorage.getItem('session') || '{}');

    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.removeItem('session');
        navigate('/');
        navigate(0);
    };

    return (
        <div className="container mt-4 mb-4 pb-2">
            <h3 className="text-start mb-4">Suas informações</h3>
            
            <div className="user-info mb-4">
                <p className="mb-3"><strong>Nome:</strong> {user.nome}</p>
                <p className="mb-3"><strong>Email:</strong> {user.email}</p>
                <p className="mb-3"><strong>CPF:</strong> {user.cpf}</p>
            </div>
            
            <button className="btn btn-danger" onClick={handleLogout}>Encerrar sessão</button>
        </div>
    );
}