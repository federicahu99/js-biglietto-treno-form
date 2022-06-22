/*
1-Se > di 65 anni sconto 40, se 18 < sconto del 20
2-Indico all'utente se ho applicato sconto e prezzo finale
3-Creo un biglietto digitale con dati e prezzo. 
*/

// Starting information

const fullName = document.getElementById('name').value;
console.log(fullName);
const kmTrip = document.getElementById('trip-km').value;
console.log(kmTrip);
const ageUser = document.getElementById('age').value;
console.log(ageUser);

/* Starting Price (without Discounts) */
const NormalPrice = (kmTrip * 0.21).toFixed(2);
console.log(NormalPrice);

/* Disccounts */

if ( ageUser < 18 ) {
    let Under18 = ( ( kmTrip * 0.21 ) * 0.8).toFixed(2);
    console.log(Under18);
    document.getElementById('nuovo-prezzo').innerText = 'Nuovo prezzo scontato:' + '  ' + '€' + prezzoGiovani.toFixed(2);
    
} else if ( 65 < ageUser ) {
    let over65 = ( ( kmTrip * 0.21 ) * 0.6).toFixed(2);
    console.log(over65);
    document.getElementById('nuovo-prezzo').innerText = 'Nuovo prezzo scontato:' + '  ' + '€' + prezzoOver.toFixed(2);
}

/*

document.getElementById('prezzo-non-scontato').innerText = '€' + costoIniziale;
*/