import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Header />
      <div className="container mt-3" style={{height: "100vh"}}>
        <h6>Página de Erro</h6>
        {isRouteErrorResponse(error)
          ? "Endereço de página inválido"
          : error instanceof Error
          ? error.message
          : "Erro desconhecido"}
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
