/*Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */


// sviluppo con for

var somma = 0;

for (var i = 0; i < 5; i++) {
    var usernumber = parseInt(prompt('Inserisci 5 numeri'));
    console.log(usernumber);
    if (isNaN(usernumber) || usernumber < 0) {
        alert('Il carattere da te inserito non è valido');
    } else {
        somma += usernumber;
        console.log(somma);
    }
}

// sviluppo con while