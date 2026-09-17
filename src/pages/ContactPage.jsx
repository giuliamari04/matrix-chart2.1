import { useState } from "react";

export default function ContactPage() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [sent, setSent] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        // Per ora simuliamo l'invio.
        // Successivamente collegheremo Resend,
        // Formspree, EmailJS o un backend.

        console.log(form);

        setSent(true);
    }

    return (
        <div className="page contact-page">

            <section className="page-header">

                <p className="eyebrow">
                    CONTATTI
                </p>

                <h1>
                    Contattami
                </h1>

                <p>
                    Hai una domanda sulla Matrice
                    del Destino?
                </p>

            </section>


            {sent ? (

                <div className="success-message">
                    <h2>
                        Messaggio inviato
                    </h2>

                    <p>
                        Grazie per avermi scritto.
                    </p>
                </div>

            ) : (

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    <div className="form-group">

                        <label htmlFor="name">
                            Nome
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label htmlFor="message">
                            Messaggio
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            value={form.message}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    <button
                        type="submit"
                        className="primary-button"
                    >
                        Invia messaggio
                    </button>

                </form>

            )}

        </div>
    );
}