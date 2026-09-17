const chakraNames = [
    {
        key: "sahasrara",
        name: "Sahasrara"
    },
    {
        key: "Ajna",
        name: "Ajna"
    },
    {
        key: "Vissudha",
        name: "Vishuddha"
    },
    {
        key: "Anahata",
        name: "Anahata"
    },
    {
        key: "Manipura",
        name: "Manipura"
    },
    {
        key: "Svadhisthana",
        name: "Svadhisthana"
    },
    {
        key: "Muladhara",
        name: "Muladhara"
    }
];


export default function HealthTable({ matrix }) {

    return (
        <section className="health-section">

            <div className="section-heading">
                <p className="eyebrow">
                    ENERGIA
                </p>

                <h2>
                    Centri energetici
                </h2>
            </div>


            <div className="health-table">

                <div className="health-row health-header">
                    <span>Centro</span>
                    <span>Fisico</span>
                    <span>Energia</span>
                    <span>Emozioni</span>
                </div>


                {chakraNames.map((chakra) => {

                    const data = matrix[chakra.key];

                    if (!data) return null;

                    return (
                        <div
                            className="health-row"
                            key={chakra.key}
                        >

                            <span>
                                {chakra.name}
                            </span>

                            <strong>
                                {data.physics}
                            </strong>

                            <strong>
                                {data.energy}
                            </strong>

                            <strong>
                                {data.emotions}
                            </strong>

                        </div>
                    );
                })}

            </div>


            {matrix.RisultatiTabella && (
                <div className="health-total">

                    <span>
                        Risultato complessivo
                    </span>

                    <strong>
                        Fisico:{" "}
                        {matrix.RisultatiTabella.physics}
                    </strong>

                    <strong>
                        Energia:{" "}
                        {matrix.RisultatiTabella.energy}
                    </strong>

                    <strong>
                        Emozioni:{" "}
                        {matrix.RisultatiTabella.emotions}
                    </strong>

                </div>
            )}

        </section>
    );
}