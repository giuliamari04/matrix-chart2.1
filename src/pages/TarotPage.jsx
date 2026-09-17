import { useState } from "react";
import { tarotCards } from "../data/tarotCards";

export default function TarotPage() {

    const [selectedCard, setSelectedCard] = useState(null);

    return (
        <div className="page tarot-page">

            <section className="page-header">

                <p className="eyebrow">
                    TAROCCHI
                </p>

                <h1>
                    Esplora gli Arcani
                </h1>

                <p>
                    Scopri il significato delle carte
                    dei Tarocchi.
                </p>

            </section>


            <section className="tarot-grid">

                {tarotCards.map((card) => (

                    <button
                        className="tarot-card"
                        key={card.id}
                        onClick={() =>
                            setSelectedCard(card)
                        }
                    >

                        <div className="tarot-card-number">
                            {card.number}
                        </div>

                        <h2>
                            {card.name}
                        </h2>

                        <span>
                            {card.category}
                        </span>

                    </button>

                ))}

            </section>


            {selectedCard && (

                <div
                    className="modal-overlay"
                    onClick={() =>
                        setSelectedCard(null)
                    }
                >

                    <div
                        className="tarot-modal"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >

                        <button
                            className="modal-close"
                            onClick={() =>
                                setSelectedCard(null)
                            }
                        >
                            ×
                        </button>

                        <p className="eyebrow">
                            {selectedCard.category}
                        </p>

                        <h2>
                            {selectedCard.name}
                        </h2>

                        <p>
                            {selectedCard.description}
                        </p>

                    </div>

                </div>

            )}

        </div>
    );
}