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

/* Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

const word1 = (prompt('Inserisci la prima parola'));

const word2 = (prompt('Inserisci la seconda parola'));


if (word1.length > word2.length) {
    let printWord = document.getElementById('printWordMin').innerHTML = word2
    let printWord2 = document.getElementById('printWordMax').innerHTML = word1 ;
} else if (word2.length > word1.length) {
    let printWord = document.getElementById('printWordMin').innerHTML = word1
    let printWord2 = document.getElementById('printWordMax').innerHTML = word2 ;
} else 
{
    let printWord = document.getElementById('printWordMin').innerHTML = 'le parole sono uguali riprova'
    console.log('le parole sono uguali riprova');
}

