/*
El programa solicita al usuario un número del 1 al 7 mediante prompt-sync.
Utiliza una declaracién switch para mostrar el dia de la semana correspondiente o
“Invalid day" si el némero no es valido. Ejemplo: 3 muestra “Wednesday”,
8 muestra “Invalid day". Ideal para identificar dias en programas simples.
*/


const prompt = require ('prompt-sync')()
const day = Number(prompt("Digite un número del 1-7 que correspondería al día de la semana  ->  "));

switch(day){

case 1:
    console.log('Monday')
break

case 2:
    console.log('Tuesday');
break

case 3:
    console.log ('Wednesday');
break

case 4:
    console.log('Thursday')
break

case 5:
    console.log('Friday')
break

case 6:
    console.log('Saturday')
break

case 7:
    console.log('Sunday')
break

default:
    console.log('Invalid day')
break;
}