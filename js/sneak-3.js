/* Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.*/


// array 

var nomi = ['Andrea', 'Marco', 'Luca', 'Ciccio'];

var cognomi = ['Pipino', 'Carbone', 'Farina'];

listafalsa = [];

// fino a quando la lista non raggiunge 3 nomi differenti 

while (listafalsa.lenght < 3) {

    // generazione due numeri randomici
    var numeroRandom1 = Math.floor(Math.random() * nomi.lenght);

    var numeroRandom2 = Math.floor(Math.random() * cognomi.lenght);

    // asscociazione del numero random ad un elemento dell'array
    nomeRandom = numeroRandom1[nomi];
    console.log(nomeRandom);
    cognomeRandom = numeroRandom2[cognomi];
    console.log(cognomeRandom);

    var fullRandomName = nomeRandom + cognomeRandom;
    console.log(fullRandomName);

    // validazione per evitare doppioni
    if (!listafalsa.includes(fullRandomName)) {
        listafalsa.push(fullRandomName);
    }
}

console.table(listafalsa);






