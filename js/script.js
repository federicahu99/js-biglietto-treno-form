/*
1-Se > di 65 anni sconto 40, se 18 < sconto del 20
2-Indico all'utente se ho applicato sconto e prezzo finale
3-Creo un biglietto digitale con dati e prezzo. 
*/
/* Start point */
let btn = document.getElementById('bnt-submit');
let fullName = document.getElementById('full-name');
let trip = document.getElementById('trip-km');

/* Submit Button */

btn.addEventListener('click', function() {
    console.log(fullName.value);
    console.log(trip.value);
})




