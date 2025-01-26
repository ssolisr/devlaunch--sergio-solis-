/* Escribe un programa en JavaScript que solicite al usuario ingresar el nimero de dias 
y calcule el nimero equivalente de meses y dias restantes, considerando que un mes consta 
de 30 dias. Este programa utiliza el médulo prompt-syne para recibir interactivamente la 
entrada del usuario. Después de calcular la cantidad de meses y dias restantes segin la 
entrada, el programa muestra un mensaje al usuario indicando el equivalente en meses y 
dias restantes. Como pista, puedes usar Math.floor() para redondear el resultado a un 
nimero entero.  Si el usuario ingresa 100, la salida ser4: 100 days are 3 months and 10 
days. */

const prompt = require ('prompt-sync') ()

const DAYS_IN_MONTH = 30

const days = prompt ('How many days? ')
const months = Math.floor(days / DAYS_IN_MONTH) 
const daysLeft = days % DAYS_IN_MONTH  

console.log(`${days} days are ${months}) months and ${daysLeft} days`)