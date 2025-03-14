/*

En un entorno de laboratorio, los investigadores estan implementando una funcionalidad
en línea destinada a identificar enfermedades genéticas en individuos.

Los genetistas normalmente realizan la tarea de buscar secuencias específicas dentro del
ADN de una persona para detectar mutaciones genéticas asociadas con varios trastornos.

Por ejemplo, pueden buscar secuencias de ADN distintivas que se sabe estan correlacionadas
con enfermedades genéticas.

Tu objetivo es desarrollar esta funcionalidad, en la cual recibirás una secuencia y deberás
verificar su presencia dentro de la cadena de ADN proporcionada. La función debe devolver
true si la secuencia se encuentra en la cadena de ADN y false en caso contrario.

El ADN estara representado por una cadena de caracteres, donde cada caracter denota un
nucleótido (por ejemplo, “gtggggggtttatgcctttagaacagcag").

De igual manera, la secuencia a buscar también estará representada como una cadena de
caracteres, representando una serie más corta de nucleótidos (por ejemplo, "gtt").

*/

const dna: string = "gtgggggggtttatgcctttagaacagcagactactgataactccaatcctgggtt"

const subsequence: string = 'aga'

function SubsequenceInDNA (dna: string, subsequence: string){
  for ( let i: number = 0; i < dna.length - 3; i++){
    // console.log(subsequence[0], dna[i], subsequence[1],  dna[i+1], subsequence[2], dna[i+2])
    if (dna[i] === subsequence[0] && dna[i+1] === subsequence[1] && dna[i+2] === subsequence[2]) return true
  }
  return false
} 

console.log(SubsequenceInDNA(dna, subsequence))

/*

SOLUCION TONY

const dna: string = "gtgggggggtttatgcctttagaacagcagactactgataactccaatcctgggtt"

const subsequence: string = ‘aga’

const isSubsequenceInDNA = (dna: string, match: string): boolean => {
  let subsequence = ""

  for(let i = 0 i <= dna.length - match.length; i++){
    subsequence = dna.slice(i, i + match.length)
    if (subsequence === match) return true
  }
  
  return false
}

console.log(isSubsequenceInDNA(dna, subsequence))

*/