
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


