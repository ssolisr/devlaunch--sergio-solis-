/*
El programa solicita al usuario su edad con prompt-sync, la convierte a número y
utiliza ternary operator para clasificar:

0 - 2 afios: "You are a baby".

3 a 13 afios: “You are a child".

14 a 17 afios: "You are a teenager".
18 a 29 afios: “You are a young adult".
30 a 60 años: "You are an adult".

Mas de 60 afios: "You are an elderly".

Si la edad es menor de 5, muestra: "The institution does not support your age, please try again.”
Es una forma clara y util de categorizar por edades.

*/

const prompt = require('prompt-sync')();

const age = Number(prompt('¿Cuál es su edad?:  '));


/*
if (age <= 2) {
console.log("You are a baby");

} else if (age >= 3 && age <= 13) {
console.log("You are a child");

} else if (age >= 14 && age <= 17) {
console.log("You are a teenager");

} else if (age >= 18 && age <= 29) {
console.log("You are a young adult");

} else if (age >= 30 && age <= 60) {
console.log("You are an adult");

} else if (age > 60) {
console.log("You are an elderly");

} else {
console.log('The institution does not support your age, please try again.')

*/

const message = (
    (age >=0 && age <= 2)
    ? 'You are a baby'
    : (age >= 3 && age <=13)
        ? 'You are a child'
            : (age >= 14 && age <=17)
            ? 'You are a teenager'
                : (age >= 18 && age <=29)
                ? 'You are an adult phase 1 :D'
                    : (age >= 30 && age <=60)
                ? 'You are an adult phase 2 :D'
                    : (age > 60)
                    ? 'You are an elderly'
                    :null 
)

console.log(
  message
    ? message
    : "The institution does not support your age, please try again."
);