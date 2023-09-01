/* Snack 1:
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/

const number1 = Number(prompt('Inserisci il primo numero'));

const number2 = Number(prompt('Inserisci il primo numero'));

if (number1 > number2) {
    // console.log('il numero maggiore è ' + number1);
    let printNumber = document.getElementById('printNumber').innerHTML = ('Il numero maggiore è: ' + number1)
} if (number2 > number1) {
    // console.log('il numero maggiore è ' + number2);
    let printNumber = document.getElementById('printNumber').innerHTML = ('Il numero maggiore è: ' + number2)
} else if (number1 === number2) {
    let printNumber = document.getElementById('printNumber').innerHTML = ('Riprova, i numeri sono uguali')
}

