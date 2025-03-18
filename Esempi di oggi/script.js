/* 
    Ciclo - FOR

    istruzione1: inizializazzione variable contatore;
    istruzione2: condizione di fine ciclo; Finchè non raggiungo "x valore" continuo il ciclo, altrimenti esco.
    istruzione3: incremento/decremento variabile contatore; 

    [Forma contratta dell'istruzione 3... la terza opzione è la piu comune] 

    (1)    i = i + 1; 
    (2)    i += 1; 
    (3)    i++ [operatore di incremento]; i-- [operatore di decremento];
*/

//   ist1    ist2   ist3

for(let i=0; i<=10; i++){
    console.log(i);
}

for(let i=10; i>=1; i--){
    console.log(i);
}

/* ---------------- */
 
let x = 3;
let y = 3;

console.log(x++); //post-incremento
console.log(++y); //pre-incremento

/* ---------------- */

let numMultiply = 2; // potenza di due

for(let i=1; i<=9; i++){
    numMultiply = numMultiply * 2

    console.log(numMultiply); // attenzione alla differenza tra mettere il console log dentro o fuori da FOR
}

console.log(numMultiply); //cosi mostrerà direttamente il risultato di fine ciclo!

/* ---------------- */

let numTabel = 2; // tabellina del due

for(let i=1; i<=9; i++){
    
    numTabel = numTabel + 2;

    console.log(numTabel);
}

/* ---------------- */

let msg  = "Ciclo [FOR] con testo, una stringa ripetuta";
let n = 5;

for(let i=0; i<=n; i++){  //Ripete 6 volte invece che 5 [let n=5;] perche abbiamo assegnato ad "i" zero [let i=0;]... parte dal valore 0, risultando in 6 ripetizioni.
    console.log(msg);
}

/* ---------------- */

for(let i=1; i<=10; i++){ //numeri pari/dispari
    if(i % 2 == 0){
        console.log(`${i} è pari`)
    }
    else{
        console.log(`${i} è dispari`)
    }
}

/* ---------------- */

let sum = 0; //somma con PROMPT chiesto piu volte tramite ciclo FOR

for(let i=1; i<=3; i++){
    let num = parseInt(prompt("inserisci un numero")); //senza parseInt ottengo un valore di tipo string, e quindi la somma matematica non avviene.

    sum = sum + num;
}

console.log(sum);

/* ---------------- */

//Esempio di scacchiera

//dichiarazione delle variabili

let board = " "; //variabile che dovrà contenere la tabella intera
const size = 12; //dimensione della scacchiera
let odd = " "; //contiene la casella dispari
let even = " "; //contiene la cesella pari

//corpo del programma
//ciclo le righe

for(let row=1; row<=size; row++){
    board += "|";
    //controllo se la riga è pari o dispari quindi se ho la successione "asterisco cancelletto" oppure "cancelletto asterisco"
    if(row % 2 == 0){
        even = "*";
        odd = "#";
    }
    else{
        even = "#";
        odd = "*";
    }

    /*
        Ciclo le caselle della singola riga, per verificare se la casella in cui mi trovo è pari o dispari.
        Le caselle devono essere invertite riga per riga (es riga1: pari dispari pari => riga2: dispari pari dispari) 
    */

    for(let cell=1; cell<=size; cell++){
        if(cell % 2 == 0){
            board+=even;
        }
        else{
            board+=odd;
        }
    }
    //metto il trattino dopo l'ultima casella della riga e vado a capo
    board+="|\n";
}

console.log(board)