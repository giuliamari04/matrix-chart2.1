import { useState } from "react";
import MatrixForm from "../components/MatrixForm";
import MatrixChart from "../components/MatrixChart/MatrixChart";
import HealthTable from "../components/HealthTable";
import { calculateMatrix } from "../utils/calcolomatrixChart";
import ReadingCards from "../components/ReadingCards";

export default function MatrixPage() {
    const [matrix, setMatrix] = useState(null);
    const [loading, setLoading] = useState(false);

    function handleCalculate(date) {
        setLoading(true);

        setTimeout(() => {
            const result = calculateMatrix(date);
            setMatrix(result);
            setLoading(false);
        }, 400);
    }

    return (
        <div className="page matrix-page">
            <section className="hero">
                <p className="eyebrow">MATRICE DEL DESTINO</p>

                <h1>
                    Scopri la tua<span> Matrice</span>
                </h1>

                <p className="hero-description">
                    Inserisci la tua data di nascita e scopri i numeri e
                    gli archetipi della tua Matrice del Destino.
                </p>

                <MatrixForm
                    onCalculate={handleCalculate}
                    loading={loading}
                />
            </section>

            {loading && (
                <section className="loading">
                    <div className="loader" />
                    <p>Sto calcolando la tua Matrice...</p>
                </section>
            )}

            {matrix && !loading && (
                <section className="matrix-result">
                    <MatrixChart matrix={matrix} />
                    <HealthTable matrix={matrix} />
                    <ReadingCards matrix={matrix} />
                </section>
            )}
        </div>
    );
}