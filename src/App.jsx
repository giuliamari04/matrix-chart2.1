import { Link, Routes, Route } from "react-router-dom";

import MatrixPage from "./pages/MatrixPage";
import TarotPage from "./pages/TarotPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <Link to="/" className="logo">
                    Matrice del Destino
                </Link>

                <div className="nav-links">
                    <Link to="/">Matrice</Link>
                    <Link to="/tarocchi">Tarocchi</Link>
                    <Link to="/contatti">Contatti</Link>
                </div>
            </div>
        </nav>
    );
}

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Routes>
                    <Route path="/" element={<MatrixPage />} />
                    <Route path="/tarocchi" element={<TarotPage />} />
                    <Route path="/contatti" element={<ContactPage />} />
                </Routes>
            </main>

            <Footer></Footer>
        </>
    );
}

export default App;