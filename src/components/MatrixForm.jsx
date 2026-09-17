import { useState } from "react";

export default function MatrixForm({
    onCalculate,
    loading
}) {
    const [date, setDate] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        setError("");

        if (!date) {
            setError("Inserisci la tua data di nascita.");
            return;
        }

        onCalculate(date);
    }

    return (
        <form
            className="matrix-form"
            onSubmit={handleSubmit}
        >

            <div className="form-group">

                <label htmlFor="birthDate">
                    Data di nascita
                </label>

                <input
                    id="birthDate"
                    type="date"
                    value={date}
                    onChange={(event) =>
                        setDate(event.target.value)
                    }
                    disabled={loading}
                />

            </div>


            {error && (
                <p className="form-error">
                    {error}
                </p>
            )}


            <button
                type="submit"
                className="primary-button"
                disabled={loading}
            >
                {loading
                    ? "Calcolo..."
                    : "Calcola la mia Matrice"}
            </button>

        </form>
    );
}