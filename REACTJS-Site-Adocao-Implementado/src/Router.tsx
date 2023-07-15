import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { QuemSomos } from "./pages/QuemSomos";
import { ListaDeGatos } from "./pages/ListaDeGatos";
import { SingleCat } from "./pages/SingleCat";
import ErrorPage from "./pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/quem-somos", element: <QuemSomos /> },
            { path: "/nossos-gatinhos", element: <ListaDeGatos /> },            
            { path: "/gatos/:id", element: <SingleCat /> },            
        ]
    }
]);

export default router;
