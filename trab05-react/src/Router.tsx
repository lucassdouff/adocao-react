import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { QuemSomos } from "./pages/QuemSomos";
import { ListaDeGatos } from "./pages/ListaDeGatos";
import { SingleCat } from "./pages/SingleCat";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/quem-somos" element={<QuemSomos />} />
                <Route path="/nossos-gatinhos" element={<ListaDeGatos />} />
                <Route path="/gatos/:id" element={<SingleCat />} />
            </Route>
        </Routes>
    )
}
