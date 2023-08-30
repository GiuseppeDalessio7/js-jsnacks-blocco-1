/* Snack 1:
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/

// const number1 = Number(prompt('Inserisci il primo numero'));

// const number2 = Number(prompt('Inserisci il primo numero'));

// if (number1 > number2) {
//     // console.log('il numero maggiore è ' + number1);
//     let printNumber = document.getElementById('printNumber').innerHTML = ('Il numero maggiore è: ' + number1)
// } if (number2 > number1) {
//     // console.log('il numero maggiore è ' + number2);
//     let printNumber = document.getElementById('printNumber').innerHTML = ('Il numero maggiore è: ' + number2)
// } else if (number1 === number2) {
//     let printNumber = document.getElementById('printNumber').innerHTML = ('Riprova, i numeri sono uguali')
// }

/* Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

// const word1 = (prompt('Inserisci la prima parola'));

// const word2 = (prompt('Inserisci la seconda parola'));


// if (word1.length > word2.length) {
//     let printWord = document.getElementById('printWordMin').innerHTML = word2
//     let printWord2 = document.getElementById('printWordMax').innerHTML = word1 ;
// } else if (word2.length > word1.length) {
//     let printWord = document.getElementById('printWordMin').innerHTML = word1
//     let printWord2 = document.getElementById('printWordMax').innerHTML = word2 ;
// } else 
// {
//     let printWord = document.getElementById('printWordMin').innerHTML = 'le parole sono uguali riprova'
//     console.log('le parole sono uguali riprova');
// }


/* Snack 3:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/

// let inputNumberUser;
// let somma = 0 ;

// for (let i = 0; i < 10; i++) {
//   inputNumberUser = Number(prompt(`Inserisci il numero ${i+1}`));
//   console.log(inputNumberUser);
//   somma += inputNumberUser 
// }

// console.log(somma);
// let total = document.getElementById('sommaNumeri').innerHTML = ('La somma dei numeri è: ' + somma)


/* Snack Bonus:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

// const emptyArray = []

// for (let i = 0; i < 6; i++) {
//     inputUserNumber = Number(prompt(`Inserisci il numero ${i+1} `))
//     console.log(inputUserNumber);

//     if (isNaN(inputUserNumber)) {
//         alert('Controlla, non ci sono numeri');

//     }
//     const numberOdd = inputUserNumber / 2;

//     if (numberOdd) {
//         emptyArray.push(inputUserNumber)
//     }

// }

// console.log(emptyArray);

// const addToArray = document.getElementById('oddNumberPrint').innerHTML = ('I numeri inseriti sono : ' + emptyArray)





/* Da fare con WHILE tutti I prossimi snacks
Snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */



let num = [];

let i = 0;
while (i < 2) {
    
    //creo prompt per chiedere di iserire i numeri
   const userNum = Number(prompt('inserisci un numero'));


   //verifico che sia un numero 

   if (isNaN(userNum)) {
    alert('inserisci solo numeri');

   } else {
    num.push(userNum);
    i++

   }
};

if (num[0] > num[1]) {
    console.log(`Il numero maggiore è: ${num[0]}`);

    } else {
    console.log(`Il numero maggiore è: ${num[1]}`);
}