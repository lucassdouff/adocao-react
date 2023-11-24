import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function DefaultLayout() {
    return(
        <body className="d-flex flex-column min-vh-100">
        <Header />
        <Outlet />
        <Footer />
        </body>
    )
}
