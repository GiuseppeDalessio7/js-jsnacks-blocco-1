
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