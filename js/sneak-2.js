/*Chiedi un numero all'utente, se è pari stampa il numero,
se è dispari stampa il numero successivo. */

// richiesta numero all'utente

var usernumber = parseInt(prompt('Inserisci un numero'));
console.log('Numero utente', usernumber);
// validazione
if (isNaN(usernumber) || usernumber < 0) {
    alert('carattere non valido');
} else {
    // verifica se pari se dispari
    if (usernumber % 2 == 0) {
        console.log(usernumber);
    } else {
        console.log('Risultato:', usernumber + 1);
    }
}
