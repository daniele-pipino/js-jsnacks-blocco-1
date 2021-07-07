/*Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

// 1- creazione due array
// 2- logica di insrimento numero randomico nell'array piu piccolo


// array

var big = [1, 2, 3, 4, 5, 6, 7];
var small = [1, 2, 3, 4];

// fino a quando la lunghezza di uno sara differente dall'altro generiamo un numero randomico

while (big.lenght !== small.lenght) {

    var randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log('Numeri randomici generati', randomNumber);

    // pushiamo il numero generato nell'array più piccolo fino a quando avranno lo stesso numero di elementi

    if (big.lenght > small.lenght) {
        small.push(randomNumber);
    } else {
        big.push(randomNumber);
    }
}

console.table(big);
console.table(small);