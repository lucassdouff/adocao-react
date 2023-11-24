import { CadastroDeGatosForm } from "../../components/CadastroDeGatosForm";

export default function ParaAdocao() {
    return(
        <div className="container mt-2 mb-auto pb-2 h-100">
            <div className="mb-4 mt-4">
                <h5>Cadastro de gatos para adoção</h5>
            </div>
            
            <CadastroDeGatosForm />
        </div>
    )
}