const codexMatrix = {
    "1-7-8": {
        title: "Il percorso della resilienza",
        text: "lettura codex",
    },

    "3-9-12": {
        title: "Isolamento",
        text: "lettura codex",
    },

    "3-10-13": {
        title: "Suicidio",
        text: "lettura codex",
    },

    "3-19-22": {
        title: "Bambino non ancora nato",
        text: "lettura codex",
    },

    "6-6-12": {
        title: "Vittima per amore",
        text: "lettura codex",
    },

    "3-7-22": {
        title: "Il prigioniero",
        text: "lettura codex",
    },

    "6-8-14": {
        title: "Il dittatore",
        text: "lettura codex",
    },

    "6-11-17": {
        title: "Talento sprecato",
        text: "lettura codex",
    },

    "6-12-18": {
        title: "Comfort",
        text: "lettura codex",
    },

    "6-14-20": {
        title: "La vittima",
        text: "lettura codex",
    },

    "5-6-17": {
        title: "Orgoglio",
        text: "lettura codex",
    },

    "6-8-20": {
        title: "Allontanato dalla famiglia",
        text: "lettura codex",
    },

    "6-9-15": {
        title: "Il libertino",
        text: "lettura codex",
    },

    "3-9-21": {
        title: "Il sorvegliante",
        text: "lettura codex",
    },

    "4-12-16": {
        title: "Il sovrano",
        text: "lettura codex",
    },

    "7-12-19": {
        title: "Il guerriero",
        text: "lettura codex",
    },

    "5-15-20": {
        title: "Il ribelle",
        text: "lettura codex",
    },

    "5-8-15": {
        title: "La santa inquisizione",
        text: "lettura codex",
    },

    "8-11-15": {
        title: "La violenza",
        text: "lettura codex",
    },

    "8-10-20": {
        title: "Liberazione dalla cattività",
        text: "lettura codex",
    },

    "6-6-18": {
        title: "Affari di cuore",
        text: "lettura codex",
    },

    "9-9-18": {
        title: "Conoscenza magica o mago segreto",
        text: "lettura codex",
    },

    "3-12-18": {
        title: "Empatia",
        text: "lettura codex",
    },

    "6-15-18": {
        title: "Temi oscuri",
        text: "lettura codex",
    },

    "7-10-21": {
        title: "Il crociato",
        text: "lettura codex",
    },

    "4-10-21": {
        title: "L'anima oppressa",
        text: "lettura codex",
    },

    "7-13-21": {
        title: "Il castigatore",
        text: "lettura codex",
    },

    "10-16-21": {
        title: "Il servo dell'occulto",
        text: "lettura codex",
    },
};

export function findCode(firstNum, secondNum, thirdNum) {
    const numbers = [
        Number(firstNum),
        Number(secondNum),
        Number(thirdNum),
    ];

    if (numbers.some((number) => Number.isNaN(number))) {
        return null;
    }

    const sortedNumbers = [...numbers].sort(
        (a, b) => a - b
    );

    const code = sortedNumbers.join("-");

    const result = codexMatrix[code];

    if (!result) {
        console.log("Codice karmico non trovato:", code);
        return null;
    }

    return {
        title: result.title,
        text: result.text,
        numbers,
        code,
    };
}
