/*
Crea un programa en JavaScript que calcule la factura total de una persona en un hotel, 
donde cada habitación tiene un precio de $100 por noche, aprovechando una oferta promocional 
que incluye un descuento del 5%.
El programa debe solicitar al huésped el número de noches que pasó en el hotel para calcular la factura final.
Si el usuario ingresa que se quedó 5 noches, la salida será: $475.00
*/


const prompt = require('prompt-sync') ();
const nights = parseInt(prompt ('How many nights did you stay?'));

const pricePerNight = 100
const discountRate = 0.05

const subtotal = nights * pricePerNight
const discount = subtotal * discountRate

const total = (subtotal - discount).toFixed(2)
console.log(`Your total is $${total}`)