// src/data/matrixGeometry.js

// ============================================================
// DIMENSIONE DEL NOSTRO "FOGLIO" SVG
// ============================================================

export const SVG_SIZE = 1200;

export const CENTER = {
  x: 600,
  y: 600,
};


// ============================================================
// VERTICI OTTAGONO
// ============================================================

export const OCTAGON = [
  { x: 600, y: 60 },
  { x: 982.26, y: 217.74 },
  { x: 1140, y: 600 },
  { x: 982.26, y: 982.26 },
  { x: 600, y: 1140 },
  { x: 218.74, y: 982.26 },
  { x: 60, y: 600 },
  { x: 217.74, y: 217.74 },
];

// ============================================================
// QUADRATO INTERNO
// ============================================================

export const SQUARE = {
  x: 219,
  y: 219,
  width: 760,
  height: 760,
};


// ============================================================
// DIAMANTE
// È il secondo quadrato ruotato di 45°
// ============================================================

export const DIAMOND = [
  { x: 600, y: 60 },
  { x: 1140, y: 600 },
  { x: 600, y: 1140 },
  { x: 60, y: 600 },
];


// ============================================================
// POSIZIONI DEI NODI PRINCIPALI
// ============================================================

export const MAIN_NODES = {
  center: {
    x: 1200,
    y: 1200,
    radius: 55,
  },

  top: {
    x: 1200,
    y: 690,
    radius: 52,
  },

  left: {
    x: 675,
    y: 1200,
    radius: 52,
  },

  right: {
    x: 1725,
    y: 1200,
    radius: 52,
  },

  bottom: {
    x: 1200,
    y: 1705,
    radius: 52,
  },

  maleTop: {
    x: 820,
    y: 830,
    radius: 38,
  },

  femaleTop: {
    x: 1580,
    y: 830,
    radius: 38,
  },

  femaleBottom: {
    x: 820,
    y: 1580,
    radius: 38,
  },

  maleBottom: {
    x: 1580,
    y: 1580,
    radius: 38,
  },
};


// ============================================================
// POSIZIONI SECONDARIE
// ============================================================

export const SECONDARY_NODES = {
  center: {
    x: 1290,
    y: 1200,
    radius: 30,
  },

  top: {
    x: 1200,
    y: 776,
    radius: 30,
  },

  left: {
    x: 760,
    y: 1200,
    radius: 30,
  },

  right: {
    x: 1639,
    y: 1200,
    radius: 30,
  },

  bottom: {
    x: 1200,
    y: 1615,
    radius: 30,
  },

  maleTop: {
    x: 869,
    y: 875,
    radius: 27,
  },

  femaleTop: {
    x: 1531,
    y: 875,
    radius: 27,
  },

  femaleBottom: {
    x: 869,
    y: 1525,
    radius: 27,
  },

  maleBottom: {
    x: 1531,
    y: 1525,
    radius: 27,
  },
};


// ============================================================
// POSIZIONI TERZI
// ============================================================

export const THIRD_NODES = {
  center: {
    x: 1345,
    y: 1200,
    radius: 22,
  },

  top: {
    x: 1200,
    y: 830,
    radius: 22,
  },

  left: {
    x: 820,
    y: 1200,
    radius: 22,
  },

  right: {
    x: 1580,
    y: 1200,
    radius: 22,
  },

  bottom: {
    x: 1200,
    y: 1559,
    radius: 22,
  },

  maleTop: {
    x: 910,
    y: 910,
    radius: 22,
  },

  femaleTop: {
    x: 1490,
    y: 910,
    radius: 22,
  },

  femaleBottom: {
    x: 910,
    y: 1490,
    radius: 22,
  },

  maleBottom: {
    x: 1490,
    y: 1490,
    radius: 22,
  },
};


// ============================================================
// AMORE / MEZZO / SOLDI
// ============================================================

export const SPECIAL_NODES = {
  amore: {
    x: 1300,
    y: 1460,
    radius: 22,
  },

  mezzo: {
    x: 1380,
    y: 1390,
    radius: 22,
  },

  soldi: {
    x: 1480,
    y: 1290,
    radius: 22,
  },

  green1: {
    x: 1000,
    y: 1200,
    radius: 22,
  },

  green2: {
    x: 1200,
    y: 1000,
    radius: 22,
  },
};