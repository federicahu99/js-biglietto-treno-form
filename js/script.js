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
//dati ticket form

// Prendo i campi da riempire
let fullNameTicket;
let distanceTicket;
let price;
let discounted;
//variabili appoggio per anteprima

// Faccio funzionare il btn submit
submit.addEventListener('click', function() {
    let fullNameAdd = fullName.value;
    let distanceAdd = distance.value;
    let discountedPrice
    let ageAdd = age.value;
    console.log( fullNameAdd, distanceAdd, ageAdd ) 
//prendo variabili da form
    
/* Calcolo prezzo */
    let initialPrice = distanceAdd * 0.21;
    console.log(initialPrice.toFixed(2));

    /* Mostro biglietto */
    let infoArea = document.getElementById('_info-area')
    infoArea.classList.remove('d-none');
    fullNameTicket = document.getElementById('fullname-passenger');
    distanceTicket = document.getElementById('km-trip');
    price = document.getElementById('initial-price');
    discounted = document.getElementById('discounted-price');
    console.log(discounted);

    /* Vedo se l'età rientra tra i sconti */
    if (ageAdd == 'u' ) {
        discountedPrice = initialPrice * 0.8;
        console.log(discountedPrice.toFixed(2));
    } else if (ageAdd == 'o' ) {
        discountedPrice = initialPrice * 0.6;
        console.log(discountedPrice.toFixed(2));
    } else {
        discountedPrice = 0;
        console.log(initialPrice)
    }

    /* Inserisco dati nell'anteprima */
    fullNameTicket.append(fullNameAdd);
    distanceTicket.append(distanceAdd);
    price.append(initialPrice);
    discounted.append(discountedPrice.toFixed(2));

    /* Btn cancel */
    cancel.addEventListener('click', function() {
        fullNameAdd= '';
        price.innerHTML= fullName;
        distanceAdd= '';
        distanceAdd.innerTHTML= distance;
        age.value = '';
        age.value= age;
        infoArea = document.getElementById('_info-area');
        infoArea.classList.add('d-none');
    })
})


