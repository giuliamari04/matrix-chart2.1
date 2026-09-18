import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState({
        type: "",
        message: ""
    });

    const [sending, setSending] = useState(false);


    function handleChange(event) {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value
        }));

        // Se l'utente modifica nuovamente il form,
        // eliminiamo eventuali messaggi precedenti.
        if (status.message) {
            setStatus({
                type: "",
                message: ""
            });
        }
    }


    function validateForm() {

        if (!form.name.trim()) {
            setStatus({
                type: "error",
                message: "Inserisci il tuo nome."
            });

            return false;
        }


        if (!form.email.trim()) {
            setStatus({
                type: "error",
                message: "Inserisci la tua email."
            });

            return false;
        }


        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(form.email)) {
            setStatus({
                type: "error",
                message: "Inserisci un indirizzo email valido."
            });

            return false;
        }


        if (form.message.trim().length < 10) {
            setStatus({
                type: "error",
                message:
                    "Il messaggio deve contenere almeno 10 caratteri."
            });

            return false;
        }


        return true;
    }


    async function handleSubmit(event) {

        event.preventDefault();


        if (!validateForm()) {
            return;
        }


        setSending(true);

        setStatus({
            type: "",
            message: ""
        });


        try {

            await emailjs.send(
                "service_fl2m96v",
                "template_1zh1poh",
                {
                    name: form.name,
                    email: form.email,
                    message: form.message
                },
                {
                    publicKey: "Dc7DhvJPInSgD5ZkN"
                }
            );


            setStatus({
                type: "success",
                message:
                    "Messaggio inviato con successo. Grazie per avermi scritto!"
            });


            setForm({
                name: "",
                email: "",
                message: ""
            });


        } catch (error) {

            console.error(
                "Errore durante l'invio:",
                error
            );


            setStatus({
                type: "error",
                message:
                    "Si è verificato un errore durante l'invio. Riprova più tardi."
            });


        } finally {

            setSending(false);

        }
    }


    return (
        <div className="page contact-page">

            {/* =====================================================
                HEADER
            ===================================================== */}

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


            {/* =====================================================
                FORM
            ===================================================== */}

            <form
                className="contact-form"
                onSubmit={handleSubmit}
            >

                {/* NOME */}

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
                        placeholder="Il tuo nome"
                        autoComplete="name"
                        disabled={sending}
                        required
                    />

                </div>


                {/* EMAIL */}

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
                        placeholder="La tua email"
                        autoComplete="email"
                        disabled={sending}
                        required
                    />

                </div>


                {/* MESSAGGIO */}

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
                        placeholder="Scrivi qui il tuo messaggio..."
                        disabled={sending}
                        required
                    />

                </div>


                {/* MESSAGGIO DI STATO */}

                {status.message && (

                    <div
                        className={
                            status.type === "success"
                                ? "success-message"
                                : "error-message"
                        }
                        role="status"
                    >

                        {status.message}

                    </div>

                )}


                {/* PULSANTE */}

                <button
                    type="submit"
                    className="primary-button"
                    disabled={sending}
                >

                    {sending
                        ? "Invio in corso..."
                        : "Invia messaggio"
                    }

                </button>

            </form>

        </div>
    );
}
