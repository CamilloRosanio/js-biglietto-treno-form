console.log('DEFAULT CONNECTION TEST')


/**********************************************************
| # TRACCIA ESERCIZIO
**********************************************************/

/*
Descrizione:
Scrivere un programma che chieda all'utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un'implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
*/




/**********************************************************
| # SVOLGIMENTO
**********************************************************/


// Dichiaro gli elementi HTML da cui ricaverò alcuni dati

const Element_input_completeName = document.getElementById('input_completeName')
const Element_input_kilometers = parseInt(document.getElementById('input_kilometers'));
const Element_input_ageGroup = document.getElementById('input_ageGroup')

const btn_generateTicket = document.getElementById('btn_generateTicket');
const btn_reset = document.getElementById('btn_reset');


// Dichiaro i dati in mio possesso ed i valori da estrarre dai miei elementi

const basePrice = 0.21;
const discountPercentage_20 = 20;
const discountPercentage_40 = 40;

let value_input_completeName = input_completeName.getAttribute('value');
let value_input_kilometers = input_kilometers.getAttribute('value');
let value_input_ageGroup = input_ageGroup.getAttribute('value');

console.log(value_input_completeName);
console.log(value_input_kilometers);
console.log(value_input_ageGroup);


// Dichiaro le prime funzioni semplici da utilizzare nel calcolo