// src/components/MatrixChart/MatrixNode.jsx

// import React from "react";

const MatrixNode = ({
  x,
  y,
  value,
  radius = 30,

  fill = "#ffffff",
  stroke = "#20252b",
  strokeWidth = 4,

  textColor = "#111111",
  fontSize,

  className = "",
}) => {
  return (
    <g className={`matrix-node ${className}`}>

      <circle
        cx={x}
        cy={y}
        r={radius}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />

      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fill={textColor}
        fontSize={fontSize || radius * 0.75}
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        {value}
      </text>

    </g>
  );
};

export default MatrixNode;