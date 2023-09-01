
/* Snack Bonus:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

const emptyArray = []

for (let i = 0; i < 6; i++) {
    inputUserNumber = Number(prompt(`Inserisci il numero ${i+1} `))
    console.log(inputUserNumber);

    if (isNaN(inputUserNumber)) {
        alert('Controlla, non ci sono numeri');

    }
    const numberOdd = inputUserNumber / 2;

    if (numberOdd) {
        emptyArray.push(inputUserNumber)
    }

}

console.log(emptyArray);

const addToArray = document.getElementById('oddNumberPrint').innerHTML = ('I numeri inseriti sono : ' + emptyArray)
