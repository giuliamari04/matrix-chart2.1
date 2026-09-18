# ✦ Matrice del Destino

Un'applicazione web dedicata alla **Matrice del Destino**, pensata per esplorare numeri, archetipi e significati associati agli **Arcani Maggiori dei Tarocchi** attraverso un'interfaccia semplice, elegante e intuitiva.

Il progetto permette di calcolare la propria Matrice del Destino a partire dai dati personali e di approfondire i principali numeri ottenuti attraverso una lettura dedicata.

---

## ✧ Funzionalità

### 🔢 Calcolo della Matrice del Destino

Inserendo i propri dati è possibile generare la **Matrice del Destino** e visualizzare i principali numeri che la compongono.

Il calcolo permette di individuare diverse aree della matrice, tra cui:

* Arcano principale
* Talento del giorno
* Talento del mese
* Debito karmico
* Obiettivo dell'anima
* Debito karmico verso terzi
* Amore
* Mezzo
* Soldi

---

### 🃏 Lettura degli Arcani principali

Dopo il calcolo della matrice, ogni numero viene associato al relativo **Arcano Maggiore**.

Per ogni Arcano è possibile visualizzare:

* immagine della carta
* nome dell'Arcano
* numero
* parole chiave
* significato generale
* interpretazione specifica in base alla posizione nella matrice

La lettura è organizzata in schede separate per rendere più semplice la consultazione anche quando sono presenti testi più approfonditi.

---

### ✦ Significato dei Tarocchi

L'applicazione include una sezione dedicata alla conoscenza degli **Arcani Maggiori dei Tarocchi**.

È possibile esplorare le carte e conoscere i loro significati generali, scoprendo:

* simbolismo
* parole chiave
* significati principali
* interpretazione degli archetipi

L'obiettivo è offrire una panoramica semplice e accessibile del significato delle carte.

---

### ✉️ Contatti

È presente anche una pagina **Contattami** attraverso la quale è possibile inviare un messaggio.

Il modulo di contatto utilizza **EmailJS** per permettere l'invio delle richieste direttamente dal frontend, senza la necessità di creare un backend dedicato.

---

## 🛠️ Tecnologie utilizzate

Il progetto è sviluppato utilizzando:

* **React**
* **Vite**
* **JavaScript**
* **CSS**
* **EmailJS**
* **Vercel** per il deployment

---

## 📁 Struttura del progetto

```text
src/
├── assets/
│   ├── images/
│   │   └── arcaniMaggiori/
│   │       ├── ar01.jpg
│   │       ├── ar02.jpg
│   │       ├── ...
│   │       ├── ar22.jpg
│   │       └── index.js
│   │
│   └── styles/
│       └── ReadingCards.css
│
├── components/
│   └── ReadingCards.jsx
│
├── data/
│   └── matrixMeanings.js
│
└── ...
```

---

## 🚀 Installazione

Per eseguire il progetto in locale:

```bash
git clone https://github.com/TUO-USERNAME/matrice-del-destino.git
```

Entrare nella cartella del progetto:

```bash
cd matrice-del-destino
```

Installare le dipendenze:

```bash
npm install
```

Avviare il server di sviluppo:

```bash
npm run dev
```

L'applicazione sarà disponibile all'indirizzo indicato da Vite nel terminale, generalmente:

```text
http://localhost:5173
```

## Deployement
Su Vercel link:
```text
https://matrixdestiny-mu.vercel.app
```

## 🎴 Arcani Maggiori

Il progetto utilizza i **22 Arcani Maggiori**, numerati da 1 a 22 e associati alle relative immagini e interpretazioni.

La struttura dei dati permette di associare allo stesso Arcano significati differenti a seconda della posizione occupata all'interno della Matrice del Destino.

Ad esempio, lo stesso numero può avere una lettura specifica per:

```text
Arcano
Talento del giorno
Talento del mese
Debito karmico
Obiettivo dell'anima
Amore
Mezzo
Soldi
```

Questo permette di separare il **significato generale dell'Arcano** dalla sua **interpretazione all'interno della matrice**.

---

## 📖 Obiettivo del progetto

Matrice del Destino nasce con l'idea di riunire in un'unica applicazione:

**calcolo → interpretazione → approfondimento**

L'utente può quindi partire dal calcolo della propria matrice, visualizzare gli Arcani associati ai numeri ottenuti e approfondire successivamente il significato delle singole carte.

Il progetto è pensato come uno strumento di esplorazione personale e di consultazione degli archetipi dei Tarocchi.

---

## ⚠️ Nota

I contenuti presenti nell'applicazione hanno carattere **informativo, simbolico e interpretativo**.

La Matrice del Destino e i significati dei Tarocchi appartengono a sistemi esoterici e simbolici e non costituiscono uno strumento scientifico né una forma di consulenza professionale.

---

## 📌 Stato del progetto

🚧 **In sviluppo**

Il progetto è in continua evoluzione e può includere nel tempo nuove interpretazioni, sezioni, funzionalità e miglioramenti dell'esperienza utente.

---

## 👤 Autore

Realizzato con Giulia Mariano e passione per la simbologia degli Arcani e lo sviluppo web.

**Matrice del Destino**
Calcola · Esplora · Interpreta
