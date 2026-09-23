import { matrixMeanings } from "../data/matrixMeanings";
import { findCode } from "../data/codexMatrixChart";
import * as arcani from "../assets/images/arcaniMaggiori";
import "../assets/styles/ReadingCards.css";
import "../assets/styles/Codex.css"

export default function ReadingCards({ matrix }) {
    if (!matrix) {
        return null;
    }

    const codexNumbers = [
        matrix.totdebitoKarmico,
        matrix.totdebitoKarmicoSecondary,
        matrix.totdebitoKarmicoterzi,
    ];

    const hasCodexNumbers = codexNumbers.every(
        (number) => number !== undefined && number !== null
    );

    const codex = hasCodexNumbers
        ? findCode(
              codexNumbers[0],
              codexNumbers[1],
              codexNumbers[2]
          )
        : null;

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

            <div className="reading-cards">

                {readings.map((reading) => {
                    const meaning =
                        matrixMeanings[reading.number];

                    if (!meaning) {
                        return null;
                    }

                    const arcanaImage =
                        arcani[`ar${reading.number}`];

                    const readingText =
                        meaning[reading.meaningKey];

                    return (
                        <article
                            key={reading.key}
                            className={`reading-card reading-card--${reading.key}`}
                        >

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

                            <div className="reading-card-content">

                                <div className="reading-card-top">
                                    <span className="reading-card-label">
                                        {reading.label}
                                    </span>

                                    <span className="reading-card-number">
                                        {reading.number}
                                    </span>
                                </div>

                                <h3>
                                    {meaning.title}
                                </h3>

                                {meaning.keywords && (
                                    <div className="reading-card-keywords">
                                        <p>
                                            {meaning.keywords}
                                        </p>
                                    </div>
                                )}

                                {readingText && (
                                    <div className="reading-card-description">
                                        <p>
                                            {readingText}
                                              {/*
                                    CODICE KARMIKO
                                    Viene mostrato SOLO dentro
                                    la card "Debito karmico"
                                */}

                                {reading.key === "debitoKarmico" && (
                                    <div className="reading-card-codex">

                                        <div className="reading-card-codex-title">
                                            <h2>
                                                Codice karmico
                                            </h2>
                                            <span>
                                            <strong>
                                                {codexNumbers.join(" · ")}
                                            </strong>
                                            </span>
                                        </div>

                                        {codex ? (
                                            <>
                                                {codex.title && (
                                                    <h4>
                                                        {codex.title}
                                                    </h4>
                                                )}

                                                {codex.text && (
                                                    <p>
                                                        {codex.text}
                                                    </p>
                                                )}
                                            </>
                                        ) : (
                                            <p>
                                                Nessuna lettura disponibile
                                                per questo codice karmico.
                                            </p>
                                        )}

                                    </div>
                                )}
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
