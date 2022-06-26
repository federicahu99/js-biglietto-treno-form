/*
1-prendo i valori del form per otterenere i dati dell'user
2-faccio funzionare i bottoni submit e cancel.
3-con i dati inseriti faccio comparire l'anteprima di biglietto.
4-con il btn cancel faccio scomparire l'anteprima.
*/

// prendo i valori del form
const fullName = document.getElementById('fullname');
const distance = document.getElementById('distance');
const age = document.getElementById('age');
const submit = document.getElementById('submit');
const cancel = document.getElementById('cancel');

// prendo i campi da riempire
const fullNameTicket = document.getElementById('fullname-passenger');
const distanceTicket = document.getElementById('km-trip');
const initialPrice = document.getElementById('initial-price');
const discounterPrice = document.getElementById('discounter-price');

// faccio funzionare il btn submit
submit.addEventListener('click', function() {
    const fullNameAdd = fullName.value;
    const distanceAdd = distance.value;
    const ageAdd = age.value;
    console.log( fullNameAdd, distanceAdd, ageAdd ) 
    
    /* Calcolo prezzo */
    let initialPrice = distanceAdd * 0.21;
    console.log(initialPrice)
    document.getElementById(initial-price).innerHTML = initialPrice;
})