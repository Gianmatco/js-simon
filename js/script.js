/*
Visualizzare in pagina 5 numeri casuali ( range tra 1 e 100). 

Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

//creare 5 numeri casuali (tra 1 e 100) e visual in pagina.

/*let numeroCasuale = Math.floor(Math.random() * 100) + 1;
console.log(numeroCasuale);

let numeroCasuale2 = Math.floor(Math.random() * 100) + 1;
console.log(numeroCasuale2);
*/

let numeroCasuale = [];
for(let i = 0; i < 5 ; i++){
    let numeroCasuale = Math.floor(Math.random() * 100) + 1;
    console.log(numeroCasuale);
    document.getElementById("app").innerHTML = numeroCasuale;
    


}

function getRandomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

//creare timer di 30s,
//utente deve inserire uno alla volta i numeri precedentemente visti

//const clock = setTimeout(() =>prompt('inserisci i numeri precedentemene visti'), numeroCasuale * 3000);
 

