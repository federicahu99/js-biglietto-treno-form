/*
1-prendo i valori del form per otterenere i dati dell'user
2-faccio funzionare i bottoni submit e cancel.
3-con i dati inseriti faccio comparire l'anteprima di biglietto.
4-con il btn cancel faccio scomparire l'anteprima.
*/

// Prendo i valori del form
const fullName = document.getElementById('fullname');
const distance = document.getElementById('distance');
const age = document.getElementById('age');
const submit = document.getElementById('submit');
const cancel = document.getElementById('cancel');

// Prendo i campi da riempire
const fullNameTicket = document.getElementById('fullname-passenger');
const distanceTicket = document.getElementById('km-trip');
let price = document.getElementById('initial-price');
let discounted = document.getElementById('discounter-price');

// Faccio funzionare il btn submit
submit.addEventListener('click', function() {
    let fullNameAdd = fullName.value;
    let distanceAdd = distance.value;
    let ageAdd = age.value;
    console.log( fullNameAdd, distanceAdd, ageAdd ) 
    
    /* Calcolo prezzo */
    let initialPrice = distanceAdd * 0.21;
    console.log(initialPrice.toFixed(2))

    /* Mostro biglietto */
    let infoArea = document.getElementById('_info-area')
    infoArea.classList.remove('d-none');
    
    /* Vedo se rientra tra i sconti */
    if (ageAdd == 'u' ) {
        let discountedPrice = initialPrice * 0.8;
        console.log(discountedPrice.toFixed(2));
    } else if (ageAdd == 'o' ) {
        let discountedPrice = initialPrice * 0.6;
        console.log(discountedPrice.toFixed(2));
    } else {
        let discountedPrice = 0;
    }

    /* Inserisco dati nell'anteprima */
    fullNameTicket.append(fullNameAdd);
    distanceTicket.append(distanceAdd);
    price.append(initialPrice);
    discounted.append(discountedPrice);
})

/* Btn cancel */
cancel.addEventListener('click', function() {
    let infoArea = document.getElementById('_info-area')
    infoArea.classList.add('d-none');
    fullName.value = '';
    distance.value = '';
    age.value = '';
})

/* Da revisionare:
Bottone cancel non sovrascrive valori precedenti (anche se non settati) nel Dom.
*/