/*
1-Calculate discount if I can apply it.
2-If i did then show on screen the final price.
3-Create a digital ticket with the info and prices on it. 
*/

/* Starting point */
let btn = document.getElementById('bnt-submit');
let fullName = document.getElementById('full-name');
let trip = document.getElementById('trip-km');

/* Submit Button */

btn.addEventListener('click', function() {
    console.log(fullName.value);
    console.log(trip.value);
})

/* Prices */
const normalPrice = (trip * 0.21).toFixed(2);
console.log(normalPrice.value);
document.getElementById('price-message').innerText = normalPrice;





