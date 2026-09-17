// src/components/MatrixChart/MatrixGeometry.jsx

// import React from "react";

import {
  OCTAGON,
  SQUARE,
  DIAMOND,
  CENTER,
} from "../../data/matrixGeometry";

const MatrixGeometry = () => {
  const octagonPoints = OCTAGON
    .map((point) => `${point.x},${point.y}`)
    .join(" ");

  const diamondPoints = DIAMOND
    .map((point) => `${point.x},${point.y}`)
    .join(" ");

  return (
    <g className="matrix-geometry">

      {/* ================================================= */}
      {/* FRECCE                                             */}
      {/* ================================================= */}

      {/* <defs>

        <marker
          id="female-arrow"
          markerWidth="12"
          markerHeight="12"
          refX="10"
          refY="6"
          orient="auto"
        >
          <path
            d="M0,0 L12,6 L0,12 Z"
            fill="#e84b4b"
          />
        </marker>

        <marker
          id="male-arrow"
          markerWidth="12"
          markerHeight="12"
          refX="10"
          refY="6"
          orient="auto"
        >
          <path
            d="M0,0 L12,6 L0,12 Z"
            fill="#8747b5"
          />
        </marker>

      </defs> */}


      {/* ================================================= */}
      {/* OTTAGONO ESTERNO                                   */}
      {/* ================================================= */}

      <polygon
        points={octagonPoints}
        className="matrix-line outer"
      />


      {/* ================================================= */}
      {/* QUADRATO                                           */}
      {/* ================================================= */}

      <rect
        x={SQUARE.x}
        y={SQUARE.y}
        width={SQUARE.width}
        height={SQUARE.height}
        className="matrix-line"
      />


      {/* ================================================= */}
      {/* QUADRATO RUOTATO / DIAMANTE                       */}
      {/* ================================================= */}

      <polygon
        points={diamondPoints}
        className="matrix-line"
      />


      {/* ================================================= */}
      {/* LINEA ORIZZONTALE                                 */}
      {/* ================================================= */}

      <line
        x1="20"
        y1="600"
        x2="1180"
        y2="600"
        className="matrix-line thin"
      />


      {/* ================================================= */}
      {/* LINEA VERTICALE                                   */}
      {/* ================================================= */}

      <line
        x1="600"
        y1="60"
        x2="600"
        y2="1140"
        className="matrix-line thin"
      />


      {/* ================================================= */}
      {/* DIAGONALI                                         */}
      {/* ================================================= */}

      <line
        x1="225"
        y1="225"
        x2="980"
        y2="980"
        className="matrix-line"
      />

      <line
        x1="975"
        y1="225"
        x2="220"
        y2="980"
        className="matrix-line"
      />


      {/* ================================================= */}
      {/* LINEA GENERAZIONE FEMMINILE                       */}
      {/* ================================================= */}

      <line
        x1={CENTER.x}
        y1={CENTER.y}
        x2="850"
        y2="350"
        className="generation-line female-line"
        markerEnd="url(#female-arrow)"
      />


      {/* ================================================= */}
      {/* LINEA GENERAZIONE MASCHILE                        */}
      {/* ================================================= */}

      <line
        x1={CENTER.x}
        y1={CENTER.y}
        x2="350"
        y2="350"
        className="generation-line male-line"
        markerEnd="url(#male-arrow)"
      />


      {/* ================================================= */}
      {/* LINEA FEMMINILE INFERIORE                         */}
      {/* ================================================= */}

      <line
        x1={CENTER.x}
        y1={CENTER.y}
        x2="350"
        y2="850"
        className="generation-line female-line"
        markerEnd="url(#female-arrow)"
      />


      {/* ================================================= */}
      {/* LINEA MASCHILE INFERIORE                          */}
      {/* ================================================= */}

      <line
        x1={CENTER.x}
        y1={CENTER.y}
        x2="850"
        y2="850"
        className="generation-line male-line"
        markerEnd="url(#male-arrow)"
      />


      {/* ================================================= */}
      {/* LINEA TRATTEGGIATA AMORE/SOLDI                    */}
      {/* ================================================= */}

      <line
        x1="600"
        y1="959"
        x2="975"
        y2="600"
        className="dotted-line"
      />

    </g>
  );
};

export default MatrixGeometry;