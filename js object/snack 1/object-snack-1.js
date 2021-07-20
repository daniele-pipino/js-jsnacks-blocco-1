/*1. Creare un oggetto palla che abbia le seguenti proprietà.
  Nome = palla
  Peso = 10
2. stampare la palla in pagina*
3. Attraverso un prompt dare la possibilità all’utente di modificare il peso
della palla., poi stampare la palla con il peso modificato
BONUS: stampare la palla tramite una funzione */



var display = document.getElementById('display');


// creazione oggetto
console.log('js ok');

var palla = {
    nome: 'palla',
    peso: 10
}

print(palla);

// stampa dell'oggetto in pagina

function print(object) {

    var content = '';
    for (var key in object) {
        content += '<li>' + key + ': ' + object[key] + '</li>';
    }
    display.innerHTML = content;
}








