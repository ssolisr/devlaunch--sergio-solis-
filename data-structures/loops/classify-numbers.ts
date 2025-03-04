/*
classify—numbers.ts

En este ejercicio de programación, se te encarga crear un programa que imprima
los números del 1 al 10, clasificando cada numero como par o impar.

Para lograr esto, desarrollarás una función que itere a través de los ndmeros por debajo
de un numero dado por parámetro, en este caso el numero 10 como ejemplo.

Verificando en calla iteración si ese numero es divisible por 2. Si un número es divisible por 2,
se clasifica como par, y sino se clasifica como impar.

Importante que la funci6n creada devuelva la cadena de valores juntos y formateados en un solo string,
donde para cada iteraci6n habra un salto de linea.

0 sea no es válido que la función contenga ningun console. log dentro, solo es posible afuera.

1 is odd
2 is even
3 is odd
4 is even
5 is odd
6 is even
7 is odd
8 is even
9 is odd
*/

const classifyNumbers = (numberToReach:number): string => {
  let result = ''
  
  for(let i = 1; i < numberToReach; i++) {
    const isOdd = i % 2 === 0 
    result += `${i} is ${isOdd ? 'odd' : 'even'} \n`
  }
  
  return result
}

console.log(classifyNumbers (10))