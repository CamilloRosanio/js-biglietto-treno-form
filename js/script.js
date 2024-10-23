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

// INPUT***
const Element_input_completeName = document.getElementById('input_completeName');
const Element_input_kilometers = document.getElementById('input_kilometers');
const Element_input_ageGroup = document.getElementById('input_ageGroup');
const Element_myForm = document.getElementById('myForm');
const Element_passengerInfoCard = document.getElementById('passengerInfoCard');

// BUTTONS***
const btn_generateTicket = document.getElementById('btn_generateTicket');
const btn_reset = document.getElementById('btn_reset');


// // CONSOLE LOG DI CONTROLLO
// console.log(Element_input_completeName);
// console.log(Element_input_kilometers);
// console.log(Element_input_ageGroup);
// console.log(Element_passengerInfoCard);
// console.log(btn_generateTicket);
// console.log(btn_reset);

// FUNZIONE DI CONTROLLO
// btn_generateTicket.addEventListener('click', () => {
//     console.log(Element_input_completeName.value);
//     console.log(Element_input_kilometers.value);
//     console.log(Element_input_ageGroup.value);
// })


// Dichiaro i dati in mio possesso ed i valori da estrarre dai miei elementi

const basePrice = 0.21;
const discount_Under18 = 20;
const discount_Over65 = 40;

const value_input_completeName = Element_input_completeName.getAttribute('value');
const value_input_kilometers = parseInt(Element_input_kilometers.getAttribute('value'));
const value_input_ageGroup = Element_input_ageGroup.getAttribute('value');

let baseTicketPrice = basePrice * value_input_kilometers;

let finalPrice;


// CONSOLE LOG DI CONTROLLO
// console.log('CONTROLLO | Valore Nome Completo - Tipologia: ' + typeof value_input_completeName, 'Valore Default: ' + value_input_completeName);
// console.log('CONTROLLO | Valore Nome Completo - Tipologia: ' + typeof value_input_kilometers, 'Valore Default: ' + value_input_kilometers);
// console.log('CONTROLLO | Valore Nome Completo - Tipologia: ' + typeof value_input_ageGroup, 'Valore Default: ' + value_input_ageGroup);
// console.log('CONTROLLO | Valore Nome Completo - Tipologia: ' + typeof baseTicketPrice, 'Valore Default: ' + baseTicketPrice);
// console.log(Element_passengerInfoCard.innerHTML);


// Dichiaro le prime funzioni semplici da utilizzare nel calcolo


/*****APPLICAZIONE SCONTO */
const discountApplication = (price, age) => {
    let result;

    if (age === 'Maggiorenne') {
        result = price;
    } else if (age === 'Minorenne') {
        result = (price / 100) * (100 - discount_Under18);
    } else if (age === 'Over-65') {
        result = (price / 100) * (100 - discount_Over65);
    }

    return finalPrice = parseInt(parseFloat(result).toFixed(2));
}

// CONSOLE LOG DI CONTROLLO
// console.log('CONTROLLO | Prezzo finale calcolato: ' + discountApplication(baseTicketPrice, value_input_ageGroup));



// Aggiungo il mio EventListener al FORM (e non al bottone) che ascolterà a questo punto qualsiasi eventi "submit" da parte dei bottoni.

Element_myForm.addEventListener('submit' , (event) => {
    // Evento DEFAULT di prevenzione di invio dei dati del form al caricamento della pagina.
    // Questo perchè  serve che i valori siano letti solo al Submit tramite bottone e non prima.
    event.preventDefault();


    // Dichiaro le variabili da usare nella funzione
    const userName = Element_input_completeName.value;
    const userKm = Element_input_kilometers.value;
    const userAge = Element_input_ageGroup.value;
    const initialPrice = basePrice * userKm;
    const finalCost = discountApplication(initialPrice, userAge);

    // CONSOLE LOG DI CONTROLLO
    console.log('Valore raccolto nome: ' + userName);
    console.log('Valore raccolto km: ' + userKm);
    console.log('Valore raccolto age: ' + userAge);
    console.log('Valore raccolto base price: ' + initialPrice);
    console.log('Valore raccolto final price: ' + typeof finalCost);


    // METODO # 1
    // Copio il codice HTML della parte interessata, aggiungendo i parametri dinamici nel codice sottoforma di variabili.
    const htmlCard = `
        <!-- COMPLETE NAME -->
        <div class="col-4 p-2 bg-secondary">
            <h4>NOME PASSEGGERO</h4>
            <p id="output_CompleteName">${userName}</p>
        </div>
        <!-- OFFER TYPE -->
        <div class="col-2 p-2 ">
            <h6>Offerta</h6>
            <p id="output_Discount">${userAge}</p>
        </div>
        <!-- CARRIAGE -->
        <div class="col-2 p-2">
            <h6>Carrozza</h6>
            <p>5C</p>
        </div>
        <!-- CP CODE -->
        <div class="col-2 p-2">
            <h6>Codice CP</h6>
            <p>912747</p>
        </div>
        <!-- FINAL PRICE -->
        <div class="col-2 p-2">
            <h6>Costo Bigietto</h6>
            <p id="output_FinalPrice">${finalCost}</p>
        </div>`

    // Sostituisco poi l'innerHTML del suddetto elemento con quello da me generato tramite funzione.
    return console.log(Element_passengerInfoCard.innerHTML = htmlCard);

})



