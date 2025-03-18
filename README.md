nome repo: js-fizzbuzz

Consegna: Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare?

Numero push minimo: 4

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

scomposizione in sotto-problemi:

[FOR] Prima Variabile - Creiamo un ciclo compreso tra 1 e 100, e stampiamo i risultati;
[IF] Seconda Variabile - Se il risultato è sia un multiplo di 3 che di 5 sostituisco il numero con il testo "FizzBuzz"; Uso il l'operatore logico binario AND.
[ELSE-IF] Terza Variabile - Se il risultato è un multiplo di 3 sostituisco il numero con il testo "Fizz";
[ELSE-IF] Quarta Variabile - Se invece il risultato è un multiplo di 5 sostituisco il numero con il testo "Buzz";
[ELSE] Quinta Variabile - Quindi poi stampo tutti i numeri che non sono multipli di 5, di 3, oppure sia di 3 e 5.