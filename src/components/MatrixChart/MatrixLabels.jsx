// src/components/MatrixChart/MatrixLabels.jsx

// import React from "react";

const MatrixLabels = ({ matrix }) => {

console.log("YearSection1:", matrix?.YearSection1);
  const renderSezione = (sezione) => {
    if (!sezione) return "";

    if (Array.isArray(sezione)) {
      return sezione.join(" · ");
    }

    return sezione;
  };

 const renderYearSection = (sezione, startX, startY, num1, num2 , rot, where) => {
  if (!Array.isArray(sezione)) return null;

  return sezione.map((item, index) => {
    const x = startX + index * num1;
    const y = startY + index * num2;

    return (
      <text
        key={index}
        x={x}
        y={y}
        fontSize="12"
        fill="#757474"
        textAnchor={`${where }`}
        transform={`rotate(${rot} ${x} ${y})`}
      >
        {item}
      </text>
    );
  });
};

  return (
    <g className="matrix-labels">

      {/* ================================================= */}
      {/* GENERATION LABELS                                 */}
      {/* ================================================= */}

      <text
        x="420"
        y="400"
        className="generation-label"
        transform="rotate(45 420 400)"
      >
        male generation line
      </text>


      <text
        x="780"
        y="400"
        className="generation-label"
        transform="rotate(-45 780 400)"
      >
        female generation line
      </text>


      {/* ================================================= */}
      {/* SIMBOLO SOLDI                                     */}
      {/* ================================================= */}

      <text
        x="830"
        y="680"
        className="money-symbol"
      >
        $
      </text>


      {/* ================================================= */}
      {/* SIMBOLO CUORE                                     */}
      {/* ================================================= */}

      <text
        x="675"
        y="825"
        className="heart-symbol"
      >
        ♥
      </text>


      {/* ================================================= */}
      {/* SEZIONE 1                                         */}
      {/* ================================================= */}

      <text
        x="178"
        y="350"
        className="section-text"
        transform="rotate(-69 180 400)"
      >
        {renderSezione(matrix.primaSezione)}
      </text>

     

      {/* ================================================= */}
      {/* SEZIONE 2                                         */}
      {/* ================================================= */}

      <text
        x="400"
        y="130"
        className="section-text"
        transform="rotate(-22 400 170)"
      >
        {renderSezione(matrix.Sezione2)}
      </text>


      {/* ================================================= */}
      {/* SEZIONE 3                                         */}
      {/* ================================================= */}

      <text
        x="800"
        y="130"
        className="section-text"
        transform="rotate(22 800 170)"
      >
        {renderSezione(matrix.Sezione3)}
      </text>


      {/* ================================================= */}
      {/* SEZIONE 4                                         */}
      {/* ================================================= */}

      <text
        x="1040"
        y="350"
        className="section-text"
        transform="rotate(69 1020 400)"
      >
        {renderSezione(matrix.Sezione4)}
      </text>


      {/* ================================================= */}
      {/* SEZIONE 5                                         */}
      {/* ================================================= */}

      <text
        x="1020"
        y="860"
        className="section-text"
        transform="rotate(-69 1020 800)"
      >
        {renderSezione(matrix.Sezione5)}
      </text>


      {/* ================================================= */}
      {/* SEZIONE 6                                         */}
      {/* ================================================= */}

      <text
        x="790"
        y="1085"
        className="section-text"
        transform="rotate(-22 800 1030)"
      >
        {renderSezione(matrix.Sezione6)}
      </text>


      {/* ================================================= */}
      {/* SEZIONE 7                                         */}
      {/* ================================================= */}

      <text
        x="400"
        y="1085"
        className="section-text"
        transform="rotate(22 400 1030)"
      >
        {renderSezione(matrix.Sezione7)}
      </text>


      {/* ================================================= */}
      {/* SEZIONE 8                                         */}
      {/* ================================================= */}

      <text
        x="180"
        y="860"
        className="section-text"
        transform="rotate(69 180 800)"
      >
        {renderSezione(matrix.Sezione8)}
      </text>

      {/* ================================================= */}
      {/* SEZIONE 1    - anni                                     */}
      {/* ================================================= */}

    {renderYearSection(matrix.YearSection1, 137, 515, 13, -35,-0, "start")}

      {/* ================================================= */}
      {/* SEZIONE 2    - anni                                     */}
      {/* ================================================= */}

    {renderYearSection(matrix.YearSection2, 283, 203, 35, -14,10,"start")}

      {/* ================================================= */}
      {/* SEZIONE 3    - anni                                     */}
      {/* ================================================= */}

    {renderYearSection(matrix.YearSection3, 710, 125, 35, 14,-10, "end")}
  {/* ================================================= */}
      {/* SEZIONE 4    - anni                                     */}
      {/* ================================================= */}

    {renderYearSection(matrix.YearSection4, 1010, 315, 14, 35,-0, "end")}

  {/* ================================================= */}
      {/* SEZIONE 5    - anni                                     */}
      {/* ================================================= */}

    {renderYearSection(matrix.YearSection5, 1005, 910, 14, -35,-0,"end")}
  {/* ================================================= */}
      {/* SEZIONE 6    - anni                                     */}
      {/* ================================================= */}

    {renderYearSection(matrix.YearSection6, 710, 1085, 35, -15,10, "end")}
  {/* ================================================= */}
      {/* SEZIONE 7    - anni                                     */}
      {/* ================================================= */}

    {renderYearSection(matrix.YearSection7, 500, 1085, -35, -15,-10, "start")}
  {/* ================================================= */}
      {/* SEZIONE 8    - anni                                     */}
      {/* ================================================= */}

    {renderYearSection(matrix.YearSection8, 200, 910, -14, -35,-0, "start")}


      {/* ================================================= */}
      {/* ETÀ                                               */}
      {/* ================================================= */}

      <text
        x="600"
        y="20"
        className="age-label"
      >
        20 years old
      </text>

      <text
        x="1265"
        y="600"
        className="age-label"
      >
        40 years old
      </text>

      <text
        x="600"
        y="1190"
        className="age-label"
      >
        60 years old
      </text>

      <text
        x="-50"
        y="600"
        className="age-label"
      >
        0 years old
      </text>

    </g>
  );
};

export default MatrixLabels;