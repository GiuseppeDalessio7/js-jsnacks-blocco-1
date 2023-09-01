
/* Snack 3:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/

let inputNumberUser;
let somma = 0 ;

for (let i = 0; i < 10; i++) {
  inputNumberUser = Number(prompt(`Inserisci il numero ${i+1}`));
  console.log(inputNumberUser);
  somma += inputNumberUser 
}

console.log(somma);
let total = document.getElementById('sommaNumeri').innerHTML = ('La somma dei numeri è: ' + somma)


