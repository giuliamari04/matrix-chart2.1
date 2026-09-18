import { matrixMeanings } from "../data/matrixMeanings";
import * as arcani from "../assets/images/arcaniMaggiori";
import "../assets/styles/ReadingCards.css";

export default function ReadingCards({ matrix }) {
    if (!matrix) {
        return null;
    }

    /*
     * Ogni card contiene:
     *
     * - key: identificatore della sezione
     * - label: titolo visualizzato
     * - number: numero dell'Arcano presente nella matrice
     * - meaningKey: proprietà da leggere dentro matrixMeanings[numero]
     */

    const readings = [
        {
            key: "arcana",
            label: "Arcana",
            number: matrix.totArcana,
            meaningKey: "arcana",
        },

        {
            key: "talentoGiorno",
            label: "Talento del giorno",
            number: matrix.talentoGiorno,
            meaningKey: "talentoGiorno",
        },

        {
            key: "talentoMese",
            label: "Talento del mese",
            number: matrix.talentoMese,
            meaningKey: "talentoMese",
        },

        {
            key: "debitoKarmico",
            label: "Debito karmico",
            number: matrix.totdebitoKarmico,
            meaningKey: "debitoKarmico",
        },

        {
            key: "soulTask",
            label: "Obbiettivo dell'anima",
            number: matrix.soulTask,
            meaningKey: "obbiettivoAnima",
        },

        {
            key: "debitoKarmicoTerzi",
            label: "Sblocco dal debito karmico",
            number: matrix.totdebitoKarmicoterzi,
            meaningKey: "terzoDebito",
        },

        {
            key: "amore",
            label: "Amore",
            number: matrix.totAmore,
            meaningKey: "amore",
        },

        {
            key: "mezzo",
            label: "Mezzo",
            number: matrix.totMezzo,
            meaningKey: "mezzo",
        },

        {
            key: "soldi",
            label: "Soldi",
            number: matrix.totSoldi,
            meaningKey: "soldi",
        },
    ];

    return (
        <section className="reading-cards-section">

            {/* =====================================================
                INTRODUZIONE
            ===================================================== */}

            <div className="section-heading">

                <p className="eyebrow">
                    LETTURA
                </p>

                <h2>
                    Lettura dei numeri e degli archetipi
                </h2>

                <p>
                    Scopri il significato dei principali numeri
                    presenti nella tua Matrice del Destino.
                </p>

            </div>


            {/* =====================================================
                CARDS
            ===================================================== */}

            <div className="reading-cards">

                {readings.map((reading) => {

                    /*
                     * Recuperiamo il numero dell'Arcano.
                     *
                     * Esempio:
                     *
                     * reading.number = 10
                     *
                     * → matrixMeanings[10]
                     */

                    const meaning = matrixMeanings[reading.number];


                    /*
                     * Recuperiamo l'immagine corrispondente.
                     *
                     * Numero 10
                     * → ar10
                     */

                    const arcanaImage =
                        arcani[`ar${reading.number}`];


                    /*
                     * Se il numero non esiste in matrixMeanings
                     * non mostriamo la card.
                     */

                    if (!meaning) {
                        return null;
                    }


                    /*
                     * Recuperiamo la lettura specifica
                     * per questa tipologia.
                     *
                     * Esempio:
                     *
                     * numero = 10
                     * meaningKey = "amore"
                     *
                     * → meaning.amore
                     *
                     * oppure:
                     *
                     * numero = 10
                     * meaningKey = "talentoGiorno"
                     *
                     * → meaning.talentoGiorno
                     */

                    const readingText =
                        meaning[reading.meaningKey];


                    return (
                        <article
                            key={reading.key}
                            className={`reading-card reading-card--${reading.key}`}
                        >

                            {/* =================================================
                                IMMAGINE ARCANO
                            ================================================= */}

                            <div className="reading-card-image">

                                {arcanaImage && (
                                    <img
                                        src={arcanaImage}
                                        alt={`${meaning.title} - ${reading.label}`}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                )}

                            </div>


                            {/* =================================================
                                CONTENUTO
                            ================================================= */}

                            <div className="reading-card-content">


                                {/* TOP */}

                                <div className="reading-card-top">

                                    <span className="reading-card-label">
                                        {reading.label}
                                    </span>

                                    <span className="reading-card-number">
                                        {reading.number}
                                    </span>

                                </div>


                                {/* TITOLO ARCANO */}

                                <h3>
                                    {meaning.title}
                                </h3>


                                {/* PAROLE CHIAVE */}

                                {meaning.keywords && (
                                    <div className="reading-card-keywords">

                                        <p>
                                            {meaning.keywords}
                                        </p>

                                    </div>
                                )}


                                {/* =================================================
                                    LETTURA SPECIFICA
                                ================================================= */}

                                {readingText && (
                                    <div className="reading-card-description">

                                        <p>
                                            {readingText}
                                        </p>

                                    </div>
                                )}


                            </div>

                        </article>
                    );
                })}

            </div>

        </section>
    );
}
