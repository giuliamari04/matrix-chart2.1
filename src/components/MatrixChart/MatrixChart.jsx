// src/components/MatrixChart/MatrixChart.jsx

// import React from "react";

import MatrixGeometry from "./MatrixGeometry";
import MatrixNode from "./MatrixNode";
import MatrixLabels from "./MatrixLabels";

import {
  MAIN_NODES,
  SECONDARY_NODES,
  THIRD_NODES,
  SPECIAL_NODES,
} from "../../data/matrixGeometry";

import "./../../assets/styles/MatrixChart.css";


const MatrixChart = ({ matrix }) => {

  if (!matrix) {
    return null;
  }


  return (
    <div className="matrix-wrapper">

      <svg
        className="matrix-svg"
        viewBox="0 0 1200 1200"
        xmlns="http://www.w3.org/2000/svg"
      >

        {/* ================================================= */}
        {/* GEOMETRIA                                         */}
        {/* ================================================= */}

        <MatrixGeometry />


        {/* ================================================= */}
        {/* MAIN                                               */}
        {/* ================================================= */}

        <MatrixNode
          {...MAIN_NODES.center}
          value={matrix.totArcana}
          fill="#ffe600"
          stroke="#ffe600"
          fontSize={55}
        />


        <MatrixNode
          {...MAIN_NODES.top}
          value={matrix.talentoMese}
          fill="#8747b5"
          stroke="#8747b5"
          textColor="white"
          fontSize={45}
        />


        <MatrixNode
          {...MAIN_NODES.left}
          value={matrix.talentoGiorno}
          fill="#8747b5"
          stroke="#8747b5"
          textColor="white"
          fontSize={45}
        />


        <MatrixNode
          {...MAIN_NODES.right}
          value={matrix.soulTask}
          fill="#ed4444"
          stroke="#ed4444"
          textColor="white"
          fontSize={45}
        />


        <MatrixNode
          {...MAIN_NODES.bottom}
          value={matrix.totdebitoKarmico}
          fill="#ed4444"
          stroke="#ed4444"
          textColor="white"
          fontSize={45}
        />


        {/* ================================================= */}
        {/* MAIN GENERATION                                    */}
        {/* ================================================= */}

        <MatrixNode
          {...MAIN_NODES.maleTop}
          value={matrix.totmainMaleLineTop}
        />

        <MatrixNode
          {...MAIN_NODES.femaleTop}
          value={matrix.totmainFemaleLineTop}
        />

        <MatrixNode
          {...MAIN_NODES.femaleBottom}
          value={matrix.totmainFemaleLineBot}
        />

        <MatrixNode
          {...MAIN_NODES.maleBottom}
          value={matrix.totmainMaleLineBot}
        />


        {/* ================================================= */}
        {/* SECONDARY                                          */}
        {/* ================================================= */}

        <MatrixNode
          {...SECONDARY_NODES.center}
          value={matrix.totArcanaSecondary}
        />

        <MatrixNode
          {...SECONDARY_NODES.top}
          value={matrix.tottalentoMeseSecondary}
          fill="#ffffff"
        />

        <MatrixNode
          {...SECONDARY_NODES.left}
          value={matrix.tottalentoGiornoSecondary}
        />

        <MatrixNode
          {...SECONDARY_NODES.right}
          value={matrix.totsoulTaskSecondary}
        />

        <MatrixNode
          {...SECONDARY_NODES.bottom}
          value={matrix.totdebitoKarmicoSecondary}
        />


        {/* ================================================= */}
        {/* SECONDARY GENERATION                               */}
        {/* ================================================= */}

        <MatrixNode
          {...SECONDARY_NODES.maleTop}
          value={matrix.totmainMaleLineTopSecondary}
        />

        <MatrixNode
          {...SECONDARY_NODES.femaleTop}
          value={matrix.totmainFemaleLineTopSecondary}
        />

        <MatrixNode
          {...SECONDARY_NODES.femaleBottom}
          value={matrix.totmainFemaleLineBotSecondary}
        />

        <MatrixNode
          {...SECONDARY_NODES.maleBottom}
          value={matrix.totmainMaleLineBotSecondary}
        />


        {/* ================================================= */}
        {/* TERZI                                               */}
        {/* ================================================= */}

        <MatrixNode
          {...THIRD_NODES.center}
          value={matrix.totArcanaterzi}
        />

        <MatrixNode
          {...THIRD_NODES.top}
          value={matrix.tottalentoMeseterzi}
        />

        <MatrixNode
          {...THIRD_NODES.left}
          value={matrix.tottalentoGiornoterzi}
        />

        <MatrixNode
          {...THIRD_NODES.right}
          value={matrix.totsoulTaskterzi}
        />

        <MatrixNode
          {...THIRD_NODES.bottom}
          value={matrix.totdebitoKarmicoterzi}
        />


        {/* ================================================= */}
        {/* TERZI GENERATION                                   */}
        {/* ================================================= */}

        <MatrixNode
          {...THIRD_NODES.maleTop}
          value={matrix.totmainMaleLineTopterzi}
        />

        <MatrixNode
          {...THIRD_NODES.femaleTop}
          value={matrix.totmainFemaleLineTopterzi}
        />

        <MatrixNode
          {...THIRD_NODES.femaleBottom}
          value={matrix.totmainFemaleLineBotterzi}
        />

        <MatrixNode
          {...THIRD_NODES.maleBottom}
          value={matrix.totmainMaleLineBotterzi}
        />


        {/* ================================================= */}
        {/* AMORE / MEZZO / SOLDI                              */}
        {/* ================================================= */}

        <MatrixNode
          {...SPECIAL_NODES.amore}
          value={matrix.totAmore}
          stroke="#e84b4b"
        />

        <MatrixNode
          {...SPECIAL_NODES.mezzo}
          value={matrix.totMezzo}
        />

        <MatrixNode
          {...SPECIAL_NODES.soldi}
          value={matrix.totSoldi}
        />


        {/* ================================================= */}
        {/* GREEN                                               */}
        {/* ================================================= */}

        <MatrixNode
          {...SPECIAL_NODES.green1}
          value={matrix.totGreen1}
          fill="#9bd65b"
          stroke="#9bd65b"
          textColor="white"
        />

        <MatrixNode
          {...SPECIAL_NODES.green2}
          value={matrix.totGreen2}
          fill="#9bd65b"
          stroke="#9bd65b"
          textColor="white"
        />


        {/* ================================================= */}
        {/* LABELS                                             */}
        {/* ================================================= */}

        <MatrixLabels matrix={matrix} />

      </svg>

    </div>
  );
};


export default MatrixChart;