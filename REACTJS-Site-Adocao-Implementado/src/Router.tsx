import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { ListaDeGatos } from "./pages/ListaDeGatos";
import { SingleCat } from "./pages/SingleCat";
import ErrorPage from "./pages/ErrorPage";
import { PorRaca } from "./pages/PorRaca";
import ParaAdocao from "./pages/ParaAdocao";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Painel from "./pages/Painel";


const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/nossos-gatinhos", element: <ListaDeGatos /> },            
            { path: "/gatos/:id", element: <SingleCat /> },
            { path: "/por-raca/:idCategoria", element: <PorRaca />},
            { path: "/para-adocao", element: <ParaAdocao />},
            { path: "/login", element: <Login />},
            { path: "/signup", element: <Cadastro />},
            { path: "/painel", element: <Painel />}
        ]
    }
]);

export default router;
