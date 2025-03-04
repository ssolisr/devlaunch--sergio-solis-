/*
vowel-counter.ts

En este ejercicio, crearás una funcién que reciba una cadena de texto y cuente
el número de vocales que contiene (tanto minúsculas como mayúsculas).

La función deberá iterar a través de cada caracter en la cadena dada y verificar
si es una vocal (a, e, i, 0, u). Para facilitar la verificaci6n, puedes almacenar
las vocales en un conjunto 0 array.

La función debe devolver un objeto con el total de vocales encontradas y un
desglose de cuantas veces aparece cada vocal en la cadena.

Ejemplo de uso:
console.log(countVowels("Hello, World!")) // { total: 3, a: 0, e: 1, i: 0, o: 2, u: 0 }
*/

interface VowelCount {
  [key: string]: number
}

const isVowel = (letter: string): boolean  => { 
  return (
    letter === 'a' ||
    letter === 'e' ||
    letter === 'i' ||
    letter === 'o' ||
    letter === 'u'
  )
}

const countVowels = (input: string): VowelCount => {
    const vowelCount: VowelCount = {
      a: 0,
      e: 0,
      i: 0,
      o: 0,
      u: 0,
      total: 0
    }

    for (const letter of input.toLowerCase()) {   // for (let i = 0; i < input.length; i++) {const letter = input.toLowerCase()[i] if (isVowel....)}
      if (isVowel(letter)) {
        vowelCount[letter] += 1
        vowelCount.total += 1
      }
    }
    return vowelCount
}

console. log(countVowels("Hola, Papillo!"))