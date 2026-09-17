function reduce(num) {
  if (Number(num) >= 23) {
    const digits = String(num);
    let total = 0;

    for (let i = 0; i < digits.length; i++) {
      total += Number(digits[i]);
    }

    return total;
  }

  return Number(num);
}

function generaSequenzaNumeri(num1, num2) {
  const somma1 = reduce(num1 + num2);
  const somma2 = reduce(num1 + somma1);
  const somma3 = reduce(num2 + somma1);
  const somma4 = reduce(num1 + somma2);
  const somma5 = reduce(somma1 + somma2);
  const somma6 = reduce(somma1 + somma3);
  const somma7 = reduce(somma3 + num2);

  return [somma4, somma2, somma5, somma1, somma6, somma3, somma7];
}

function calcolaEta(dateString) {
  const dataNascita = new Date(dateString);
  const oggi = new Date();

  let eta = oggi.getFullYear() - dataNascita.getFullYear();

  const mese = oggi.getMonth() - dataNascita.getMonth();

  if (mese < 0 || (mese === 0 && oggi.getDate() < dataNascita.getDate())) {
    eta--;
  }

  return eta;
}

function makeHealthCard(firstNum, secondNum) {
  const physics = firstNum;
  const energy = secondNum;
  const emotions = reduce(firstNum + secondNum);

  return {
    physics,
    energy,
    emotions,
  };
}

export function calculateMatrix(dateString) {
  if (!dateString) {
    return null;
  }

  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  // ========== ANNO ==========
  const yearString = String(year);
  let totalYearSum = 0;

  for (let i = 0; i < yearString.length; i++) {
    totalYearSum += Number(yearString[i]);
  }

  // ========== PRINCIPALI ==========
  const talentoGiorno = reduce(day);
  const talentoMese = month;
  const debitoKarmico = day + month + totalYearSum;
  const totdebitoKarmico = reduce(debitoKarmico);
  const soulTask = reduce(totalYearSum);

  // ========== ARCANO ==========
  const sky = talentoGiorno + soulTask;
  const earth = talentoMese + totdebitoKarmico;
  const arcana = sky + earth;
  const totArcana = reduce(arcana);

  // ========== LINEE ==========
  const mainFemaleLine = talentoMese + soulTask;
  const totmainFemaleLineTop = reduce(mainFemaleLine);

  const mainMaleLine = talentoGiorno + talentoMese;
  const totmainMaleLineTop = reduce(mainMaleLine);

  const mainFemaleLineBot = talentoGiorno + totdebitoKarmico;
  const totmainFemaleLineBot = reduce(mainFemaleLineBot);

  const mainMaleLineBot = totdebitoKarmico + soulTask;
  const totmainMaleLineBot = reduce(mainMaleLineBot);

  // ========== TERZI ==========
  const talentoGiornoterzi = day + totArcana;
  const tottalentoGiornoterzi = reduce(talentoGiornoterzi);

  const talentoMeseterzi = talentoMese + totArcana;
  const tottalentoMeseterzi = reduce(talentoMeseterzi);

  const debitoKarmicoterzi = totdebitoKarmico + totArcana;
  const totdebitoKarmicoterzi = reduce(debitoKarmicoterzi);

  const soulTaskterzi = soulTask + totArcana;
  const totsoulTaskterzi = reduce(soulTaskterzi);

  // ========== SECONDARI ==========
  const talentoGiornoSecondary = tottalentoGiornoterzi + talentoGiorno;
  const tottalentoGiornoSecondary = reduce(talentoGiornoSecondary);

  const talentoMeseSecondary = talentoMese + tottalentoMeseterzi;
  const tottalentoMeseSecondary = reduce(talentoMeseSecondary);

  const debitoKarmicoSecondary = totdebitoKarmicoterzi + totdebitoKarmico;
  const totdebitoKarmicoSecondary = reduce(debitoKarmicoSecondary);

  const soulTaskSecondary = soulTask + totsoulTaskterzi;
  const totsoulTaskSecondary = reduce(soulTaskSecondary);

  // ========== ARCANO SECONDARIO ==========
  const arcanaSecondary =
    totmainFemaleLineBot +
    totmainFemaleLineTop +
    totmainMaleLineBot +
    totmainMaleLineTop;
  const totArcanaSecondary = reduce(arcanaSecondary);

  // ========== ARCANO TERZIARIO ==========
  const arcanaterzi = totArcana + totArcanaSecondary;
  const totArcanaterzi = reduce(arcanaterzi);

  // ========== LINEE TERZIARIE ==========
  const mainFemaleLineterzi = totArcanaSecondary + totmainFemaleLineTop;
  const totmainFemaleLineTopterzi = reduce(mainFemaleLineterzi);

  const mainMaleLineterzi = totArcanaSecondary + totmainMaleLineTop;
  const totmainMaleLineTopterzi = reduce(mainMaleLineterzi);

  const mainFemaleLineBotterzi = totArcanaSecondary + totmainFemaleLineBot;
  const totmainFemaleLineBotterzi = reduce(mainFemaleLineBotterzi);

  const mainMaleLineBotterzi = totArcanaSecondary + totmainMaleLineBot;
  const totmainMaleLineBotterzi = reduce(mainMaleLineBotterzi);

  // ========== SECONDARIE FINALI ==========
  const mainFemaleLineSecondary =
    totmainFemaleLineTopterzi + totmainFemaleLineTop;
  const totmainFemaleLineTopSecondary = reduce(mainFemaleLineSecondary);

  const mainMaleLineSecondary = totmainMaleLineTopterzi + totmainMaleLineTop;
  const totmainMaleLineTopSecondary = reduce(mainMaleLineSecondary);

  const mainFemaleLineBotSecondary =
    totmainFemaleLineBotterzi + totmainFemaleLineBot;
  const totmainFemaleLineBotSecondary = reduce(mainFemaleLineBotSecondary);

  const mainMaleLineBotSecondary =
    totmainMaleLineBotterzi + totmainMaleLineBot;
  const totmainMaleLineBotSecondary = reduce(mainMaleLineBotSecondary);

  // ========== AMORE / CENTRO / SOLDI ==========
  const mezzo = totdebitoKarmicoterzi + totsoulTaskterzi;
  const totMezzo = reduce(mezzo);

  const amore = totMezzo + totdebitoKarmicoterzi;
  const totAmore = reduce(amore);

  const soldi = totMezzo + totsoulTaskterzi;
  const totSoldi = reduce(soldi);

  // ========== GREEN ==========
  const green1 = totArcana + tottalentoGiornoterzi;
  const totGreen1 = reduce(green1);

  const green2 = totArcana + tottalentoMeseterzi;
  const totGreen2 = reduce(green2);

  // ========== PREDIZIONE ==========
  const primaSezione = generaSequenzaNumeri(talentoGiorno, totmainMaleLineTop);
  const Sezione2 = generaSequenzaNumeri(totmainMaleLineTop, talentoMese);
  const Sezione3 = generaSequenzaNumeri(talentoMese, totmainFemaleLineTop);
  const Sezione4 = generaSequenzaNumeri(totmainMaleLineTop, soulTask);
  const Sezione5 = generaSequenzaNumeri(soulTask, totmainMaleLineBot);
  const Sezione6 = generaSequenzaNumeri(totmainMaleLineBot, totdebitoKarmico);
  const Sezione7 = generaSequenzaNumeri(totdebitoKarmico, totmainFemaleLineBot);
  const Sezione8 = generaSequenzaNumeri(totmainFemaleLineBot, talentoGiorno);

  // ========== MEGA ARRAY ==========
  const sezioni = [
    primaSezione,
    Sezione2,
    Sezione3,
    Sezione4,
    Sezione5,
    Sezione6,
    Sezione7,
    Sezione8,
  ];

  const megaArraySezioni = sezioni.flat();

  // ========== ETÀ ==========
  const eta = calcolaEta(dateString);
  const numeroAssociatoEta = megaArraySezioni[eta] ?? null;
  const numeroAssociatoEtaFutura = megaArraySezioni[eta + 1] ?? null;


  // ========== ANNI =================
    // ==========================================================
  // ANNI / YEAR SECTIONS
  // ==========================================================

  const YearSection1 = [
    "(1 - 2,5)",
    "(2,5 - 3,5)",
    "(3,5 - 4)",
    "(5)",
    "(6 - 7,5)",
    "(7,5 - 8,5)",
    "(8,5 - 9)",
  ];

  const YearSection2 = [
    "11 - 12,5",
    "12,5 - 13,5",
    "13,5 - 14",
    "15",
    "16 - 17,5",
    "17,5 - 18,5",
    "18,5 - 19",
  ];

  const YearSection3 = [
    "21 - 22,5",
    "22,5 - 23,5",
    "23,5 - 24",
    "25",
    "26 - 27,5",
    "27,5 - 28,5",
    "28,5 - 29",
  ];

  const YearSection4 = [
    "31 - 32,5",
    "32,5 - 33,5",
    "33,5 - 34",
    "35",
    "36 - 37,5",
    "37,5 - 38,5",
    "38,5 - 39",
  ];

  const YearSection5 = [
    "41 - 42,5",
    "42,5 - 43,5",
    "43,5 - 44",
    "45",
    "46 - 47,5",
    "47,5 - 48,5",
    "48,5 - 49",
  ];

  const YearSection6 = [
    "51 - 52,5",
    "52,5 - 53,5",
    "53,5 - 54",
    "55",
    "56 - 57,5",
    "57,5 - 58,5",
    "58,5 - 59",
  ];

  const YearSection7 = [
    "61 - 62,5",
    "62,5 - 63,5",
    "63,5 - 64",
    "65",
    "66 - 67,5",
    "67,5 - 68,5",
    "68,5 - 69",
  ];

  const YearSection8 = [
    "71 - 72,5",
    "72,5 - 73,5",
    "73,5 - 74",
    "75",
    "76 - 77,5",
    "77,5 - 78,5",
    "78,5 - 79",
  ];

  const YearSections = [
    YearSection1,
    YearSection2,
    YearSection3,
    YearSection4,
    YearSection5,
    YearSection6,
    YearSection7,
    YearSection8,
  ];


  // ========== CHAKRA ==========
  const sahasrara = makeHealthCard(talentoGiorno, talentoMese);
  const Ajna = makeHealthCard(tottalentoGiornoSecondary, tottalentoMeseSecondary);
  const Vissudha = makeHealthCard(tottalentoGiornoterzi, tottalentoMeseterzi);
  const Anahata = makeHealthCard(totGreen1, totGreen2);
  const Manipura = makeHealthCard(totArcana, totArcana);
  const Svadhisthana = makeHealthCard(totsoulTaskterzi, totdebitoKarmicoterzi);
  const Muladhara = makeHealthCard(soulTask, totdebitoKarmico);

  // ========== TABELLA SALUTE ==========
  const sommaPhysics = reduce(
    sahasrara.physics +
      Ajna.physics +
      Vissudha.physics +
      Anahata.physics +
      Manipura.physics +
      Svadhisthana.physics +
      Muladhara.physics
  );

  const sommaEnergy = reduce(
    sahasrara.energy +
      Ajna.energy +
      Vissudha.energy +
      Anahata.energy +
      Manipura.energy +
      Svadhisthana.energy +
      Muladhara.energy
  );

  const RisultatiTabella = makeHealthCard(sommaPhysics, sommaEnergy);

  const risultatoFinaleTabella = reduce(
    sahasrara.emotions +
      Ajna.emotions +
      Vissudha.emotions +
      Anahata.emotions +
      Manipura.emotions +
      Svadhisthana.emotions +
      Muladhara.emotions
  );

  console.log("YEAR SECTION 1:", YearSection1);
  
  // ========== RISULTATO ==========
  return {
    // principali
    totArcana,
    talentoGiorno,
    talentoMese,
    totdebitoKarmico,
    soulTask,

    // amore / soldi
    totdebitoKarmicoterzi,
    totAmore,
    totMezzo,
    totSoldi,
    totsoulTaskterzi,

    // predizione
    primaSezione,
    Sezione2,
    Sezione3,
    Sezione4,
    Sezione5,
    Sezione6,
    Sezione7,
    Sezione8,

    megaArraySezioni,

    eta,
    numeroAssociatoEta,
    numeroAssociatoEtaFutura,


      // --------------------------
    // ANNI
    // --------------------------

    YearSection1,
    YearSection2,
    YearSection3,
    YearSection4,
    YearSection5,
    YearSection6,
    YearSection7,
    YearSection8,

    // opzionale:
    YearSections,
    // linee
    totmainFemaleLineTop,
    totmainFemaleLineBot,
    totmainMaleLineTop,
    totmainMaleLineBot,

    // secondari
    tottalentoGiornoSecondary,
    tottalentoMeseSecondary,
    totdebitoKarmicoSecondary,
    totsoulTaskSecondary,
    totArcanaSecondary,

    totmainFemaleLineTopSecondary,
    totmainMaleLineTopSecondary,
    totmainFemaleLineBotSecondary,
    totmainMaleLineBotSecondary,

    // terzi
    tottalentoGiornoterzi,
    tottalentoMeseterzi,
    totArcanaterzi,

    totmainFemaleLineTopterzi,
    totmainMaleLineTopterzi,
    totmainFemaleLineBotterzi,
    totmainMaleLineBotterzi,

    // green
    totGreen1,
    totGreen2,

    // chakra
    sahasrara,
    Ajna,
    Vissudha,
    Anahata,
    Manipura,
    Svadhisthana,
    Muladhara,

    // tabella
    RisultatiTabella,
    risultatoFinaleTabella,
  };
}

// Export compatibile con il componente React
export const calcolomatrixChart = {
  calculate: calculateMatrix,
};

// Oppure puoi esportare anche direttamente la funzione
export default calculateMatrix;